// Waves' Perlin noise, moved out of Waves.tsx so it can be imported on
// its own. perlin2 takes a lattice period, so the pattern can wrap seamlessly.

// Waves reads the noise at a point's pixel position times these.
export const NOISE_SCALE = { x: 0.002, y: 0.0015 };

// The largest lattice period: the permutation table's length.
export const MAX_NOISE_PERIOD = 256;

class Grad {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  dot2(x: number, y: number): number {
    return this.x * x + this.y * y;
  }
}

export class Noise {
  grad3: Grad[];
  p: number[];
  perm: number[];
  gradP: Grad[];

  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0),
      new Grad(-1, 1, 0),
      new Grad(1, -1, 0),
      new Grad(-1, -1, 0),
      new Grad(1, 0, 1),
      new Grad(-1, 0, 1),
      new Grad(1, 0, -1),
      new Grad(-1, 0, -1),
      new Grad(0, 1, 1),
      new Grad(0, -1, 1),
      new Grad(0, 1, -1),
      new Grad(0, -1, -1)
    ];
    this.p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240,
      21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88,
      237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83,
      111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216,
      80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186,
      3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58,
      17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
      129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193,
      238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128,
      195, 78, 66, 215, 61, 156, 180
    ];
    this.perm = new Array(512);
    this.gradP = new Array(512);
    this.seed(seed);
  }
  seed(seed: number) {
    if (seed > 0 && seed < 1) seed *= 65536;
    seed = Math.floor(seed);
    if (seed < 256) seed |= seed << 8;
    for (let i = 0; i < 256; i++) {
      let v = i & 1 ? this.p[i] ^ (seed & 255) : this.p[i] ^ ((seed >> 8) & 255);
      this.perm[i] = this.perm[i + 256] = v;
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12];
    }
  }
  fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  lerp(a: number, b: number, t: number): number {
    return (1 - t) * a + t * b;
  }
  // Repeats every periodX lattice cells across and periodY down (whole
  // numbers up to MAX_NOISE_PERIOD); at 256 it is the original perlin2.
  perlin2(x: number, y: number, periodX = MAX_NOISE_PERIOD, periodY = MAX_NOISE_PERIOD): number {
    let X = Math.floor(x),
      Y = Math.floor(y);
    x -= X;
    y -= Y;
    const X0 = wrap(X, periodX),
      X1 = wrap(X + 1, periodX),
      Y0 = wrap(Y, periodY),
      Y1 = wrap(Y + 1, periodY);
    const n00 = this.gradP[X0 + this.perm[Y0]].dot2(x, y);
    const n01 = this.gradP[X0 + this.perm[Y1]].dot2(x, y - 1);
    const n10 = this.gradP[X1 + this.perm[Y0]].dot2(x - 1, y);
    const n11 = this.gradP[X1 + this.perm[Y1]].dot2(x - 1, y - 1);
    const u = this.fade(x);
    return this.lerp(this.lerp(n00, n10, u), this.lerp(n01, n11, u), this.fade(y));
  }
}

function wrap(cell: number, period: number): number {
  return ((cell % period) + period) % period;
}

// The lattice period, in cells, of a pattern that repeats every `px` pixels
// read at `scale`; it fails loud unless that is a whole number of cells the
// permutation table can repeat.
export function noisePeriod(px: number, scale: number): number {
  const cells = Math.round(px * scale);
  if (!(cells >= 1 && cells <= MAX_NOISE_PERIOD) || Math.abs(px * scale - cells) > 1e-9) {
    throw new Error(`Waves: a ${px} px pattern period is ${px * scale} noise cells, not a whole number from 1 to ${MAX_NOISE_PERIOD}`);
  }
  return cells;
}
