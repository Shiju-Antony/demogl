import{proxyCustomElement,HTMLElement,createEvent,h,Fragment}from"@stencil/core/internal/client";import{s as speak}from"./index2.js";import{i as isRtl}from"./page-align.js";import{a as getHumanDiscount,b as getHumanDiscountRedeemableStatus}from"./price.js";import{d as defineCustomElement$c}from"./sc-alert2.js";import{d as defineCustomElement$b}from"./sc-block-ui2.js";import{d as defineCustomElement$a}from"./sc-button2.js";import{d as defineCustomElement$9}from"./sc-form-control2.js";import{d as defineCustomElement$8}from"./sc-format-number2.js";import{d as defineCustomElement$7}from"./sc-icon2.js";import{d as defineCustomElement$6}from"./sc-input2.js";import{d as defineCustomElement$5}from"./sc-line-item2.js";import{d as defineCustomElement$4}from"./sc-skeleton2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-tag2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scCouponFormCss=":host {\n  display: block;\n}\n\nsc-button {\n  color: var(--sc-color-primary-500);\n}\n\nsc-alert {\n  margin-top: var(--sc-spacing-small);\n}\n\n.coupon-form {\n  position: relative;\n  container-type: inline-size;\n}\n.coupon-form .coupon-button {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0.9);\n  transition: all var(--sc-transition-fast) ease;\n  color: var(--sc-input-color);\n}\n.coupon-form .coupon-button-mobile {\n  margin-top: var(--sc-input-label-margin);\n  display: none;\n}\n.coupon-form--has-value .coupon-button {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n}\n\n@container (max-width: 320px) {\n  .coupon-form .coupon-button {\n    display: none;\n  }\n  .coupon-form .coupon-button-mobile {\n    display: block;\n  }\n}\n.form {\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n  transform: translateY(5px);\n  transition: opacity var(--sc-transition-medium) ease, transform var(--sc-transition-medium) ease;\n  position: relative;\n  gap: var(--sc-spacing-small);\n}\n\n.coupon-form--is-open .form {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  height: auto;\n  margin: var(--sc-spacing-small) 0;\n}\n.coupon-form--is-open .trigger {\n  display: none;\n}\n\n.trigger {\n  cursor: pointer;\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  color: var(--sc-input-label-color);\n  user-select: none;\n}\n.trigger:hover {\n  text-decoration: underline;\n}\n\n.coupon-form--is-rtl .trigger {\n  text-align: right;\n}\n\n.coupon__status {\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  color: var(--sc-color-warning-700);\n  display: inline-flex;\n  gap: var(--sc-spacing-x-small);\n  align-items: flex-start;\n  text-align: left;\n}\n.coupon__status sc-icon {\n  flex: 0 0 1em;\n  margin-top: 0.25em;\n}",ScCouponFormStyle0=scCouponFormCss,ScCouponForm=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scApplyCoupon=createEvent(this,"scApplyCoupon",7),this.label=void 0,this.loading=void 0,this.busy=void 0,this.placeholder=void 0,this.error=void 0,this.forceOpen=void 0,this.discount=void 0,this.currency=void 0,this.discountAmount=void 0,this.showInterval=void 0,this.open=void 0,this.collapsed=void 0,this.value=void 0,this.buttonText=void 0,this.editable=!0}handleOpenChange(e){e&&setTimeout((()=>this.input.triggerFocus()),50)}handleBlur(){this.value||(this.open=!1,this.error="")}getHumanReadableDiscount(){var e,t,o;return(null===(e=null==this?void 0:this.discount)||void 0===e?void 0:e.coupon)&&(null===(t=null==this?void 0:this.discount)||void 0===t?void 0:t.coupon.percent_off)?getHumanDiscount(null===(o=null==this?void 0:this.discount)||void 0===o?void 0:o.coupon):""}applyCoupon(){this.scApplyCoupon.emit(this.value)}handleKeyDown(e){"Enter"===(null==e?void 0:e.code)?this.applyCoupon():"Escape"===(null==e?void 0:e.code)&&(this.scApplyCoupon.emit(null),this.open=!1,speak(wp.i18n.__("Coupon code field closed.","surecart"),"assertive"))}translateHumanDiscountWithDuration(e){var t;if(!this.showInterval)return e;const{duration:o,duration_in_months:n}=null===(t=this.discount)||void 0===t?void 0:t.coupon;switch(o){case"once":return`${e} ${wp.i18n.__("once","surecart")}`;case"repeating":const t=wp.i18n.sprintf(wp.i18n._n("%d month","%d months",n,"surecart"),n);
// translators: %s is the discount amount, %s is the duration (e.g. 3 months)
return wp.i18n.sprintf(wp.i18n.__("%s for %s","surecart"),e,t);default:return e}}async triggerFocus(){var e,t,o;await new Promise((e=>requestAnimationFrame(e))),(null===(t=null===(e=null==this?void 0:this.discount)||void 0===e?void 0:e.promotion)||void 0===t?void 0:t.code)?null===(o=this.couponTag.shadowRoot.querySelector("*"))||void 0===o||o.focus():this.addCouponTrigger&&this.addCouponTrigger.focus()}render(){var e,t,o,n,s,i,r,l,a;if(this.loading)return h("sc-skeleton",{style:{width:"120px",display:"inline-block"}});if(null===(t=null===(e=null==this?void 0:this.discount)||void 0===e?void 0:e.promotion)||void 0===t?void 0:t.code){let e=this.getHumanReadableDiscount();return h("sc-line-item",{exportparts:"description:info, price-description:discount, price:amount"},h("span",{slot:"description"},h("div",{part:"discount-label"},wp.i18n.__("Discount","surecart")),h("sc-tag",{exportparts:"base:coupon-tag",type:"redeemable"===(null===(o=this.discount)||void 0===o?void 0:o.redeemable_status)?"success":"warning",class:"coupon-tag",clearable:this.editable,onScClear:()=>{this.editable&&(this.scApplyCoupon.emit(null),this.open=!1)},onKeyDown:e=>{this.editable&&("Enter"!==e.key&&"Escape"!==e.key||(speak(wp.i18n.__("Coupon was removed.","surecart"),"assertive"),this.scApplyCoupon.emit(null),this.open=!1))},ref:e=>this.couponTag=e,role:"button","aria-label":wp.i18n.sprintf(wp.i18n.__("Press enter to remove coupon code %s.","surecart"),(null===(s=null===(n=null==this?void 0:this.discount)||void 0===n?void 0:n.promotion)||void 0===s?void 0:s.code)||this.input.value||"")},null===(r=null===(i=null==this?void 0:this.discount)||void 0===i?void 0:i.promotion)||void 0===r?void 0:r.code)),"redeemable"===(null===(l=this.discount)||void 0===l?void 0:l.redeemable_status)?h(Fragment,null,e&&h("span",{class:"coupon-human-discount",slot:"price-description"},this.translateHumanDiscountWithDuration(e)),h("span",{slot:"price"},h("sc-format-number",{type:"currency",currency:null==this?void 0:this.currency,value:null==this?void 0:this.discountAmount}))):h("div",{class:"coupon__status",slot:"price-description"},h("sc-icon",{name:"alert-triangle"}),getHumanDiscountRedeemableStatus(null===(a=this.discount)||void 0===a?void 0:a.redeemable_status)))}return this.collapsed?h("div",{part:"base",class:{"coupon-form":!0,"coupon-form--is-open":this.open||this.forceOpen,"coupon-form--has-value":!!this.value,"coupon-form--is-rtl":isRtl()}},h("div",{part:"label",class:"trigger",onMouseDown:()=>{this.open||(this.open=!0)},onKeyDown:e=>{if("Enter"!==e.key&&" "!==e.key)return!0;this.open||(this.open=!0,speak(wp.i18n.__("Coupon code field opened. Press Escape button to close it.","surecart"),"assertive"))},tabindex:"0",ref:e=>this.addCouponTrigger=e,role:"button"},h("slot",{name:"label"},this.label)),h("div",{class:"form",part:"form"},h("sc-input",{exportparts:"base:input__base, input, form-control:input__form-control",value:this.value,onScInput:e=>this.value=e.target.value,placeholder:this.placeholder,onScBlur:()=>this.handleBlur(),onKeyDown:e=>this.handleKeyDown(e),ref:e=>this.input=e,"aria-label":wp.i18n.__("Add coupon code.","surecart")},h("sc-button",{exportparts:"base:button__base, label:button_label",slot:"suffix",type:"text",loading:this.busy,size:"medium",class:"coupon-button",onClick:()=>this.applyCoupon()},h("slot",null,this.buttonText))),h("sc-button",{exportparts:"base:button__base, label:button_label",type:"primary",outline:!0,loading:this.busy,size:"medium",class:"coupon-button-mobile",onClick:()=>this.applyCoupon()},h("slot",null,this.buttonText)),!!this.error&&h("sc-alert",{exportparts:"base:error__base, icon:error__icon, text:error__text, title:error_title, message:error__message",type:"danger",open:!0},h("span",{slot:"title"},this.error))),this.loading&&h("sc-block-ui",{exportparts:"base:block-ui, content:block-ui__content"})):h("div",{class:{"coupon-form":!0,"coupon-form--has-value":!!this.value,"coupon-form--is-rtl":isRtl()}},h("sc-input",{label:this.label,exportparts:"base:input__base, input, form-control:input__form-control",value:this.value,onScInput:e=>this.value=e.target.value,placeholder:this.placeholder,onScBlur:()=>this.handleBlur(),onKeyDown:e=>this.handleKeyDown(e),ref:e=>this.input=e},h("sc-button",{exportparts:"base:button__base, label:button_label",slot:"suffix",type:"text",loading:this.busy,size:"medium",class:"coupon-button",onClick:()=>this.applyCoupon()},h("slot",null,this.buttonText))),h("sc-button",{exportparts:"base:button__base, label:button_label",type:"primary",outline:!0,loading:this.busy,size:"medium",class:"coupon-button-mobile",onClick:()=>this.applyCoupon()},h("slot",null,this.buttonText)),!!this.error&&h("sc-alert",{exportparts:"base:error__base, icon:error__icon, text:error__text, title:error_title, message:error__message",type:"danger",open:!0},h("span",{slot:"title"},this.error)))}get el(){return this}static get watchers(){return{open:["handleOpenChange"]}}static get style(){return ScCouponFormStyle0}},[1,"sc-coupon-form",{label:[1],loading:[4],busy:[4],placeholder:[1],error:[1025],forceOpen:[4,"force-open"],discount:[16],currency:[1],discountAmount:[2,"discount-amount"],showInterval:[4,"show-interval"],open:[1028],collapsed:[4],buttonText:[513,"button-text"],editable:[4],value:[32],triggerFocus:[64]},void 0,{open:["handleOpenChange"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-coupon-form","sc-alert","sc-block-ui","sc-button","sc-form-control","sc-format-number","sc-icon","sc-input","sc-line-item","sc-skeleton","sc-spinner","sc-tag","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-coupon-form":customElements.get(e)||customElements.define(e,ScCouponForm);break;case"sc-alert":customElements.get(e)||defineCustomElement$c();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$b();break;case"sc-button":customElements.get(e)||defineCustomElement$a();break;case"sc-form-control":customElements.get(e)||defineCustomElement$9();break;case"sc-format-number":customElements.get(e)||defineCustomElement$8();break;case"sc-icon":customElements.get(e)||defineCustomElement$7();break;case"sc-input":customElements.get(e)||defineCustomElement$6();break;case"sc-line-item":customElements.get(e)||defineCustomElement$5();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-tag":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScCouponForm as S,defineCustomElement as d};