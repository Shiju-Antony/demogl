import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{i as isRtl}from"./page-align.js";const scTabCss=":host{display:block}.tab{font-family:var(--sc-font-sans);color:var(--sc-color-gray-600);display:flex;align-items:center;justify-content:flex-start;line-height:1;padding:var(--sc-spacing-small) var(--sc-spacing-small);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-semibold);border-radius:var(--sc-border-radius-small);cursor:pointer;transition:color 0.35s ease, background-color 0.35s ease;user-select:none;text-decoration:none}.tab.tab--active,.tab:hover{color:var(--sc-tab-active-color, var(--sc-color-gray-900));background-color:var(--sc-tab-active-background, var(--sc-color-gray-100))}.tab.tab--disabled{cursor:not-allowed;color:var(--sc-color-gray-400)}.tab__content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:var(--sc-line-height-dense)}.tab__prefix,.tab__suffix{flex:0 0 auto;display:flex;align-items:center}.tab__suffix{margin-left:auto}.tab__counter{background:var(--sc-color-gray-200);display:inline-block;padding:var(--sc-spacing-xx-small) var(--sc-spacing-small);border-radius:var(--sc-border-radius-pill);font-size:var(--sc-font-size-small);text-align:center;line-height:1;transition:color 0.35s ease, background-color 0.35s ease}.tab.tab--active .tab__counter,.tab:hover .tab__counter{background:var(--sc-color-white)}.tab--has-prefix{padding-left:var(--sc-spacing-small)}.tab--has-prefix .tab__content{padding-left:var(--sc-spacing-small)}.tab--has-suffix{padding-right:var(--sc-spacing-small)}.tab--has-suffix .tab__label{padding-right:var(--sc-spacing-small)}.tab--is-rtl.tab--has-prefix .tab__content{padding-left:0;padding-right:var(--sc-spacing-small)}",ScTabStyle0=scTabCss;let id=0;const ScTab$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scClose=createEvent(this,"scClose",7),this.componentId="tab-"+ ++id,this.panel="",this.href=void 0,this.active=!1,this.disabled=!1,this.count=void 0,this.hasPrefix=!1,this.hasSuffix=!1}async triggerFocus(e){this.tab.focus(e)}async triggerBlur(){this.tab.blur()}handleSlotChange(){this.hasPrefix=!!this.el.querySelector('[slot="prefix"]'),this.hasSuffix=!!this.el.querySelector('[slot="suffix"]')}render(){this.el.id=this.el.id||this.componentId;const e=this.href?"a":"div";return h(e,{key:"8d2c745289f7f1eca46bcd903d5be5b0e0300f40",part:"base "+(this.active?"active":""),href:this.href,class:{tab:!0,"tab--active":this.active,"tab--disabled":this.disabled,"tab--has-prefix":this.hasPrefix,"tab--has-suffix":this.hasSuffix,"tab--is-rtl":isRtl()},ref:e=>this.tab=e,role:"tab","aria-disabled":this.disabled?"true":"false","aria-selected":this.active?"true":"false",tabindex:this.disabled?"-1":"0"},h("span",{key:"ee541e9bc5b5a48ec353d1f136f7f5c924ad2105",part:"prefix",class:"tab__prefix"},h("slot",{key:"50a2d34b276dc133d4498f9bbe48d2458f407c69",onSlotchange:()=>this.handleSlotChange(),name:"prefix"})),h("div",{key:"c7c695fa518af160f7e775cd7158f3e37496833e",class:"tab__content",part:"content"},h("slot",{key:"84f6e9b10e40dbb64ae826fa642a5bf2446a6590"})),h("span",{key:"8bf38778d4ad03f1cd179cab501624fba7e92348",part:"suffix",class:"tab__suffix"},h("slot",{key:"9c783e6e97383bec3385448488eaf72b9b855df4",onSlotchange:()=>this.handleSlotChange(),name:"suffix"})),h("slot",{key:"04ca56731a83e07766421a9bfc81b3fccf8d0f3d",name:"suffix"},!!this.count&&h("div",{key:"e9309cab237ebdee9e09c15581233aa56b521e6b",class:"tab__counter",part:"counter"},this.count)))}get el(){return this}static get style(){return ScTabStyle0}},[1,"sc-tab",{panel:[513],href:[513],active:[516],disabled:[516],count:[1],hasPrefix:[32],hasSuffix:[32],triggerFocus:[64],triggerBlur:[64]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-tab"].forEach((e=>{"sc-tab"===e&&(customElements.get(e)||customElements.define(e,ScTab$1))}))}const ScTab=ScTab$1,defineCustomElement=defineCustomElement$1;export{ScTab,defineCustomElement};