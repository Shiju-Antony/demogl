import{r as t,h as e,a as s}from"./p-e97fde0a.js";const i=".form-row{display:flex;align-items:flex-start;justify-content:space-between;gap:calc(var(--sc-form-row-spacing, 0.75em) * 2.5)}::slotted(*){flex:1;width:0}";const o=i;const r=class{constructor(e){t(this,e);this.width=undefined}componentDidLoad(){if("ResizeObserver"in window){this.observer=new window.ResizeObserver((t=>{this.width=t===null||t===void 0?void 0:t[0].contentRect.width}));this.observer.observe(this.el)}}render(){return e("div",{key:"48aa2fc70e2bb0d413085e4b159f2f1fccb94e64",part:"base",class:{"form-row":true,"breakpoint-sm":this.width<384,"breakpoint-md":this.width>=384&&this.width<576,"breakpoint-lg":this.width>=576&&this.width<768,"breakpoint-xl":this.width>=768}},e("slot",{key:"213f9339dadf66345870a434de8129973069bb64"}))}get el(){return s(this)}};r.style=o;export{r as sc_form_row};
//# sourceMappingURL=p-ac728ef4.entry.js.map