import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$b}from"./sc-button2.js";import{d as defineCustomElement$a}from"./sc-card2.js";import{d as defineCustomElement$9}from"./sc-cc-logo2.js";import{d as defineCustomElement$8}from"./sc-flex2.js";import{d as defineCustomElement$7}from"./sc-icon2.js";import{d as defineCustomElement$6}from"./sc-payment-method2.js";import{d as defineCustomElement$5}from"./sc-spinner2.js";import{d as defineCustomElement$4}from"./sc-tag2.js";import{d as defineCustomElement$3}from"./sc-text2.js";import{d as defineCustomElement$2}from"./sc-tooltip2.js";const ScPaymentMethodDetails$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.paymentMethod=void 0,this.editHandler=void 0}render(){var e,t,s,o,n,m,c,a,d,i;return h("sc-card",{key:"d18eb9dac651905c6b5e0ae42d82b8862f3c880d"},h("sc-flex",{key:"e52aa8d091bfa21cd46093a26de0efcc22f651ce",alignItems:"center",justifyContent:"flex-start",style:{gap:"0.5em"}},h("sc-payment-method",{key:"f3c97ceea085796a657264ca111fd676f014d38b",paymentMethod:this.paymentMethod}),h("div",{key:"3105c4fcc4e89a33498ab86c422cc9e634cf2fe8"},!!(null===(t=null===(e=this.paymentMethod)||void 0===e?void 0:e.card)||void 0===t?void 0:t.exp_month)&&h("span",{key:"9c8c808950843a9642033bba6bc15fc62a2750ed"},
// Translators: %d/%d is month and year of expiration.
wp.i18n.sprintf(wp.i18n.__("Exp. %d/%d","surecart"),null===(o=null===(s=this.paymentMethod)||void 0===s?void 0:s.card)||void 0===o?void 0:o.exp_month,null===(m=null===(n=this.paymentMethod)||void 0===n?void 0:n.card)||void 0===m?void 0:m.exp_year)),!!(null===(a=null===(c=this.paymentMethod)||void 0===c?void 0:c.paypal_account)||void 0===a?void 0:a.email)&&(null===(i=null===(d=this.paymentMethod)||void 0===d?void 0:d.paypal_account)||void 0===i?void 0:i.email)),h("sc-button",{key:"681aa4e2c0b3aaf3925aa18690c03e9903d1bec8",type:"text",circle:!0,onClick:this.editHandler},h("sc-icon",{key:"e0faa7ebf3f465bf7c786690cc4be453b2abc5c5",name:"edit-2"}))))}},[1,"sc-payment-method-details",{paymentMethod:[16],editHandler:[16]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-payment-method-details","sc-button","sc-card","sc-cc-logo","sc-flex","sc-icon","sc-payment-method","sc-spinner","sc-tag","sc-text","sc-tooltip"].forEach((e=>{switch(e){case"sc-payment-method-details":customElements.get(e)||customElements.define(e,ScPaymentMethodDetails$1);break;case"sc-button":customElements.get(e)||defineCustomElement$b();break;case"sc-card":customElements.get(e)||defineCustomElement$a();break;case"sc-cc-logo":customElements.get(e)||defineCustomElement$9();break;case"sc-flex":customElements.get(e)||defineCustomElement$8();break;case"sc-icon":customElements.get(e)||defineCustomElement$7();break;case"sc-payment-method":customElements.get(e)||defineCustomElement$6();break;case"sc-spinner":customElements.get(e)||defineCustomElement$5();break;case"sc-tag":customElements.get(e)||defineCustomElement$4();break;case"sc-text":customElements.get(e)||defineCustomElement$3();break;case"sc-tooltip":customElements.get(e)||defineCustomElement$2()}}))}const ScPaymentMethodDetails=ScPaymentMethodDetails$1,defineCustomElement=defineCustomElement$1;export{ScPaymentMethodDetails,defineCustomElement};