import{r as i,h as o,H as r}from"./p-e97fde0a.js";import{g as t}from"./p-5c1a03e5.js";import{s as n,r as s}from"./p-1f60f497.js";import{c as e}from"./p-58d2adc4.js";import{o as l}from"./p-15630c79.js";import"./p-830ab1a3.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";const a=":host{display:block}ul{margin:6px 0px;padding:0px;list-style:none}";const d=a;const p=class{constructor(o){i(this,o);this.removeStateListener=()=>{}}getAlertType(){switch(n===null||n===void 0?void 0:n.type){case"error":return"danger";case"default":return"primary";default:return n===null||n===void 0?void 0:n.type}}componentWillLoad(){this.removeStateListener=l("formState",(()=>{if(["finalizing","updating"].includes(e())){s()}}))}disconnectedCallback(){this.removeStateListener()}getTopLevelError(){var i;if((n===null||n===void 0?void 0:n.code)==="checkout.invalid"&&((i=t())===null||i===void 0?void 0:i.length)){return""}return n===null||n===void 0?void 0:n.message}render(){if(!(n===null||n===void 0?void 0:n.message)||["finalizing","updating"].includes(e())){return o(r,{style:{display:"none"}})}return o(r,null,o("sc-alert",{type:this.getAlertType(),scrollOnOpen:true,open:!!(n===null||n===void 0?void 0:n.message),closable:!!(n===null||n===void 0?void 0:n.dismissible)},!!this.getTopLevelError()&&o("span",{slot:"title",innerHTML:this.getTopLevelError()}),(t()||[]).map(((i,r)=>o("div",{innerHTML:i,key:r})))),o("slot",null))}};p.style=d;export{p as sc_checkout_form_errors};
//# sourceMappingURL=p-8c9ef8f7.entry.js.map