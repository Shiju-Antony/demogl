import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$1}from"./sc-spinner2.js";const scBlockUiCss=':host{display:block;position:var(--sc-block-ui-position, absolute);top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:"";position:var(--sc-block-ui-position, absolute);top:0;left:0;right:0;bottom:0;cursor:var(--sc-block-ui-cursor, wait);background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}',ScBlockUiStyle0=scBlockUiCss,ScBlockUi=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.zIndex=1,this.transparent=void 0,this.spinner=void 0}render(){return h("div",{key:"166b7af9d3d96ed2413b5d0da297c6a936bd3e98",part:"base",class:{overlay:!0,transparent:this.transparent},style:{"z-index":this.zIndex.toString()}},h("div",{key:"a95cda7937e31a4c6d2860d86b8c3216dfeecdbd",class:"overlay__content",part:"content"},h("slot",{key:"56e201145b447e0226b5a1280bc5d283b500ca66",name:"spinner"},!this.transparent&&this.spinner&&h("sc-spinner",{key:"6cb3a4ea4dbfe228f36b1d4707b8f5b53fc811c8"})),h("slot",{key:"22deeea43bd2f2809e706c6452e11b86d2e670ed"})))}static get style(){return ScBlockUiStyle0}},[1,"sc-block-ui",{zIndex:[2,"z-index"],transparent:[4],spinner:[4]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-block-ui","sc-spinner"].forEach((e=>{switch(e){case"sc-block-ui":customElements.get(e)||customElements.define(e,ScBlockUi);break;case"sc-spinner":customElements.get(e)||defineCustomElement$1()}}))}export{ScBlockUi as S,defineCustomElement as d};