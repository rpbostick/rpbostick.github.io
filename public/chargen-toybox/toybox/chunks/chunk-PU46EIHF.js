import{a}from"./chunk-I3M5WXFC.js";var t={light:"#fffaf0",dark:"#26231f"};var e=Object.entries(a).map(([o,r])=>`
  .toybox[data-theme="${o}"] {
    color-scheme: ${o};
    --paper: var(--toybox-paper, ${r.paper}); --ink: var(--toybox-ink, ${r.ink});
    --soft: var(--toybox-soft, ${r.soft}); --faint: var(--toybox-faint, ${r.faint});
    --accent: var(--toybox-accent, ${r.accent}); --card: var(--toybox-card, ${t[o]});
  }`).join("")+`
  * { box-sizing: border-box; }
  .toybox { color: var(--ink); font: 15px/1.4 var(--toybox-font, system-ui, sans-serif); }
  button, select, input, textarea { font: inherit; font-size: .85rem; color: var(--ink); }
  [hidden] { display: none !important; }`,i=`
  .btn { background: var(--paper); border: 1px solid var(--soft); border-radius: 6px; padding: .2rem .6rem; cursor: pointer; }
  .btn:hover, .btn:focus-visible { border-color: var(--accent); }
  .btn[aria-pressed="true"] { background: var(--accent); border-color: var(--accent); color: var(--paper); }
  .btn:disabled { opacity: .5; cursor: default; }
  .check { display: inline-flex; align-items: center; gap: .3rem; font-size: .8rem; }
  .field { background: var(--paper); border: 1px solid var(--soft); border-radius: 6px; padding: .15rem .4rem; }`;export{e as a,i as b};
