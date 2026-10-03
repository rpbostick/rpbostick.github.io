import{a as i}from"./chunk-I3M5WXFC.js";var c={light:"#fffaf0",dark:"#26231f"};var p=Object.entries(i).map(([o,r])=>`
  .toybox[data-theme="${o}"] {
    color-scheme: ${o};
    --paper: var(--toybox-paper, ${r.paper}); --ink: var(--toybox-ink, ${r.ink});
    --soft: var(--toybox-soft, ${r.soft}); --faint: var(--toybox-faint, ${r.faint});
    --accent: var(--toybox-accent, ${r.accent}); --card: var(--toybox-card, ${c[o]});
  }`).join("")+`
  * { box-sizing: border-box; }
  .toybox { color: var(--ink); font: 15px/1.4 var(--toybox-font, system-ui, sans-serif); }
  button, select, input, textarea { font: inherit; font-size: .85rem; color: var(--ink); }
  [hidden] { display: none !important; }`,b=`
  .btn { background: var(--paper); border: 1px solid var(--soft); border-radius: 6px; padding: .2rem .6rem; cursor: pointer; }
  .btn:hover, .btn:focus-visible { border-color: var(--accent); }
  .btn[aria-pressed="true"] { background: var(--accent); border-color: var(--accent); color: var(--paper); }
  .btn:disabled { opacity: .5; cursor: default; }
  .check { display: inline-flex; align-items: center; gap: .3rem; font-size: .8rem; }
  .field { background: var(--paper); border: 1px solid var(--soft); border-radius: 6px; padding: .15rem .4rem; }`;function s(o,r){let t=`toybox.${r}`;return{read(){try{return o.localStorage.getItem(t)}catch{return null}},write(n){try{o.localStorage.setItem(t,n)}catch{}}}}function x(o,r,t,n){let a=s(o,r);return{read(){let e=a.read();return t.includes(e)?e:n},write(e){if(!t.includes(e))throw new Error(`${r}: ${JSON.stringify(e)} is not one of ${t.join(", ")}`);a.write(e)}}}var u=(o,r)=>`${o.location.pathname}#${r}`;export{p as a,b,s as c,x as d,u as e};
