import{r as s,h as t,a as i}from"./p-e97fde0a.js";import{i as r}from"./p-b0d8cd6e.js";const a=":host{display:block;font-family:var(--sc-font-sans)}:slotted(*){margin:0}";const e=a;const o=class{constructor(t){s(this,t)}render(){return t("slot",{key:"26aa608eb362ed58cee5315176b78eed5cddfc90"})}};o.style=e;const l=":host{display:block;--column-width-min:125px;position:relative}:host(:not(:last-child)){border-bottom:1px solid var(--sc-stacked-list-border-color, var(--sc-color-gray-200))}:host(:focus-within){z-index:2}.list-row{background:var(--sc-list-row-background-color, var(--sc-color-white));color:var(--sc-list-row-color, var(--sc-color-gray-800));text-decoration:none;display:grid;justify-content:var(--sc-stacked-list-row-justify-content, space-between);align-items:var(--sc-stacked-list-row-align-items, start);grid-template-columns:repeat(auto-fit, minmax(100%, 1fr));gap:var(--sc-spacing-xx-small);padding:var(--sc-spacing-medium) var(--sc-spacing-large);transition:background-color var(--sc-transition-fast) ease;border-radius:var(--sc-input-border-radius-medium);min-width:0px;min-height:0px}.list-row[href]:hover{background:var(--sc-stacked-list-row-hover-color, var(--sc-color-gray-50))}.list-row__prefix,.list-row__suffix{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.list-row__prefix{left:var(--sc-spacing-large)}.list-row__suffix{right:var(--sc-spacing-large)}.list-row--has-prefix{padding-left:3.5em}.list-row--has-suffix{padding-right:3.5em;gap:var(--sc-spacing-xxxx-large)}.list-row.breakpoint-lg{grid-template-columns:repeat(calc(var(--columns) - 1), 1fr) 1fr;gap:var(--sc-spacing-large)}.list-row.breakpoint-lg ::slotted(:last-child:not(:first-child)){display:flex;justify-content:flex-end}.list-row--is-rtl.list-row__prefix,.list-row--is-rtl.list-row__suffix{left:20px;width:20px;transform:rotate(180deg)}.list-row--is-rtl.list-row__suffix{right:auto}.list-row--is-rtl.list-row--has-suffix{gap:var(--sc-spacing-large)}";const c=l;const n=class{constructor(t){s(this,t);this.href=undefined;this.target="_self";this.mobileSize=600;this.width=undefined;this.hasPrefix=false;this.hasSuffix=false}componentDidLoad(){if("ResizeObserver"in window){var s=new window.ResizeObserver((s=>{s.forEach((s=>{this.width=s.contentRect.width}))}));s.observe(this.el)}}handleSlotChange(){this.hasPrefix=!!Array.from(this.el.children).some((s=>s.slot==="prefix"));this.hasSuffix=!!Array.from(this.el.children).some((s=>s.slot==="suffix"))}render(){const s=this.href?"a":"div";return t(s,{key:"3535cdc7f9d7d7bfb0fb8eff83c3146abe799b32",href:this.href,target:this.target,part:"base",class:{"list-row":true,"list-row--has-prefix":this.hasPrefix,"list-row--has-suffix":this.hasSuffix,"breakpoint-lg":this.width>=this.mobileSize,"list-row--is-rtl":r()}},t("span",{key:"848a059a9e57bf9a6a20a0b7dc4da54909aad907",class:"list-row__prefix"},t("slot",{key:"f9ade5b3cf0a7bb1ab1221475d36316c7eff4f15",name:"prefix",onSlotchange:()=>this.handleSlotChange()})),t("slot",{key:"22f1256be5934609bca4f4a3771bdde1d22468ec",onSlotchange:()=>this.handleSlotChange()}),t("span",{key:"5e6949661579e49cfbb92e3b33c3da7528c81e1c",class:"list-row__suffix"},t("slot",{key:"3eaa83e450ffe4d6ab69a1faa231a23611096d7b",name:"suffix",onSlotchange:()=>this.handleSlotChange()})))}get el(){return i(this)}};n.style=c;export{o as sc_stacked_list,n as sc_stacked_list_row};
//# sourceMappingURL=p-2ef18b86.entry.js.map