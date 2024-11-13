import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";const scSkeletonCss=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--border-radius:var(--sc-border-radius-pill);--color:var(--sc-skeleton-color, var(--sc-color-gray-300));--sheen-color:var(--sc-skeleton-sheen-color, var(--sc-color-gray-400));display:block;position:relative}.skeleton{display:flex;width:100%;height:100%;min-height:1rem}.skeleton__indicator{flex:1 1 auto;background:var(--color);border-radius:var(--border-radius)}.skeleton--sheen .skeleton__indicator{background:linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));background-size:400% 100%;background-size:400% 100%;animation:sheen 3s ease-in-out infinite}.skeleton--pulse .skeleton__indicator{animation:pulse 2s ease-in-out 0.5s infinite}@keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}",ScSkeletonStyle0=scSkeletonCss,ScSkeleton=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.effect="sheen"}render(){return h("div",{key:"3834f7675206fe240c5ea40fae07661d0b858b8c",part:"base",class:{skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect},"aria-busy":"true","aria-live":"polite"},h("div",{key:"85ae7733617a89a5682ceeee598aad4fb0f09cba",part:"indicator",class:"skeleton__indicator"}))}static get style(){return ScSkeletonStyle0}},[1,"sc-skeleton",{effect:[1]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-skeleton"].forEach((e=>{"sc-skeleton"===e&&(customElements.get(e)||customElements.define(e,ScSkeleton))}))}export{ScSkeleton as S,defineCustomElement as d};