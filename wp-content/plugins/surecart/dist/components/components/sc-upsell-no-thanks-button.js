import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{d as decline}from"./mutations.js";const scUpsellNoThanksButtonCss="sc-upsell-no-thanks-button{display:block}sc-upsell-no-thanks-button p{margin-block-start:0;margin-block-end:1em}sc-upsell-no-thanks-button .wp-block-button__link{position:relative;text-decoration:none}",ScUpsellNoThanksButtonStyle0=scUpsellNoThanksButtonCss,ScUpsellNoThanksButton$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost()}render(){return h(Host,{key:"03f84cb5ae3de9d1852387e9b1841ca04cef6ba4",onClick:()=>decline()},h("slot",{key:"5cafc814e0c5d1a3932da889cdf7a9eebff08ed0"}))}static get style(){return ScUpsellNoThanksButtonStyle0}},[4,"sc-upsell-no-thanks-button"]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-upsell-no-thanks-button"].forEach((t=>{"sc-upsell-no-thanks-button"===t&&(customElements.get(t)||customElements.define(t,ScUpsellNoThanksButton$1))}))}const ScUpsellNoThanksButton=ScUpsellNoThanksButton$1,defineCustomElement=defineCustomElement$1;export{ScUpsellNoThanksButton,defineCustomElement};