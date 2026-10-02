# Owlbear Rodeo dice, standalone build: source

This directory is a compiled build of the Owlbear Rodeo dice app
(<https://github.com/owlbear-rodeo/dice>, GPL-3.0, see `LICENSE`), modified to run as a
standalone page without Owlbear Rodeo.

Corresponding source: `owlbear-dice-source.zip` in this directory. It holds

- `upstream/`: the upstream app, unmodified, at commit
  `ccc32beceee0888c0a48129fbb23f4a636c710ee`
- `standalone/`: the standalone entry point and the files that replace parts of the app
- `OWLBEAR-CHANGES.md`: the list of changes and the protocol with the host page
- `build/`: the scripts that fetch and build it, and the `package-lock.json` npm resolved
  for the upstream app
- `LICENSE`: the GNU General Public License, version 3

All of the above is licensed GPL-3.0. Packages compiled into this page keep their own
licences, listed in `../THIRD_PARTY_LICENSES.txt` with their texts in `licenses/`.

The page that embeds this one in an `<iframe>` talks to it only by `postMessage` and does
not include any of its code.
