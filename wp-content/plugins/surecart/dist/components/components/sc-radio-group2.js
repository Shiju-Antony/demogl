import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{i as isRtl}from"./page-align.js";const scRadioGroupCss=':host{display:block}.radio-group{border:none;padding:0;margin:0;min-width:0}.radio-group .radio-group__label{display:inline-block;padding:0;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0);margin-bottom:var(--sc-input-label-margin)}.radio-group__hidden-input{position:absolute;opacity:0;padding:0px;margin:0px;pointer-events:none}.radio-group--is-required .radio-group__label:after{content:" *";color:var(--sc-color-danger-500)}::slotted(sc-radio:not(:last-of-type)){display:block;margin-bottom:var(--sc-spacing-x-small)}.radio-group--is-rtl.radio-group,.radio-group--is-rtl.radio-group .radio-group__label{text-align:right}',ScRadioGroupStyle0=scRadioGroupCss,ScRadioGroup=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scChange=createEvent(this,"scChange",7),this.label="",this.invalid=void 0,this.value="",this.required=void 0}async reportValidity(){return this.invalid=!this.input.checkValidity(),this.input.reportValidity()}handleRadioClick(e){if("SC-RADIO"!==e.target.tagName)return;e.stopImmediatePropagation();const i=e.target;i.disabled||i.checked&&(this.value=i.value,this.scChange.emit(i.value))}componentDidLoad(){[...this.el.querySelectorAll("sc-radio")].forEach((e=>{e.checked&&(this.value=e.value)}))}render(){return h("fieldset",{key:"c22fb5993eb9405e51d817c6f22a12e60d0534e0",part:"base",class:{"radio-group":!0,"radio-group--invalid":this.invalid,"radio-group--is-required":this.required,"radio-group--is-rtl":isRtl()},"aria-invalid":this.invalid,role:"radiogroup"},h("legend",{key:"c46d5c06133dd0b22a9e22af952ae11dd886b956",part:"label",class:"radio-group__label"},h("slot",{key:"3544868fa6b0d1765da36b1127fae4e8d72a26ac",name:"label"},this.label)),h("input",{key:"5bc4415a960be4aa497201e1ea1b5e484b638ff3",type:"text",class:"radio-group__hidden-input",ref:e=>this.input=e,required:this.required,value:this.value,tabindex:"-1"}),h("div",{key:"eaf7f528acc1d841b1265e8a6bbaf120c654de0e",part:"items",class:"radio-group__items"},h("slot",{key:"c3f98c182259bad38565fe79f2387f9acedc7139"})))}get el(){return this}static get style(){return ScRadioGroupStyle0}},[1,"sc-radio-group",{label:[1],invalid:[1540],value:[1537],required:[4],reportValidity:[64]},[[0,"scChange","handleRadioClick"]]]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-radio-group"].forEach((e=>{"sc-radio-group"===e&&(customElements.get(e)||customElements.define(e,ScRadioGroup))}))}export{ScRadioGroup as S,defineCustomElement as d};