import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";const scTagCss=":host{display:inline-block}.tag{display:flex;align-items:center;border:none;line-height:1;white-space:nowrap;user-select:none;cursor:pointer;text-decoration:none;font-weight:var(--sc-font-weight-bold)}.tag__clear::part(base){color:inherit;padding:0}.tag--primary{background-color:var(--sc-tag-primary-background-color, var(--sc-color-primary-500));border-color:var(--sc-tag-primary-border-color, var(--sc-color-primary-500));color:var(--sc-tag-primary-color, var(--sc-color-primary-text, var(--sc-color-white)))}.tag--success{background-color:var(--sc-tag-success-background-color, var(--sc-color-success-100));border-color:var(--sc-tag-success-border-color, var(--sc-color-success-200));color:var(--sc-tag-success-color, var(--sc-color-success-800))}.tag--info{background-color:var(--sc-color-info-100);border-color:var(--sc-color-info-200);color:var(--sc-color-info-700)}.tag--default{background-color:var(--sc-tag-default-background-color, var(--sc-color-gray-100));border-color:var(--sc-tag-default-border-color, var(--sc-color-gray-200));color:var(--sc-tag-default-color, var(--sc-color-gray-700))}.tag--warning{background-color:var(--sc-color-warning-100);border-color:var(--sc-color-warning-200);color:var(--sc-color-warning-700)}.tag--danger{background-color:var(--sc-color-danger-100);border-color:var(--sc-color-danger-200);color:var(--sc-color-danger-700)}.tag--small{font-size:var(--sc-button-font-size-small);height:calc(var(--sc-input-height-small) * 0.75);line-height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-small);padding:0 var(--sc-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-xxx-small))}.tag--medium{font-size:var(--sc-font-size-small);height:calc(var(--sc-input-height-medium) * 0.75);line-height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-medium);padding:0 var(--sc-spacing-small)}.tag--medium .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-xx-small))}.tag--large{font-size:var(--sc-button-font-size-large);height:calc(var(--sc-input-height-large) * 0.75);line-height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-large);padding:0 var(--sc-spacing-medium)}.tag--large .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-x-small))}.tag--pill{border-radius:var(--sc-border-radius-pill)}",ScTagStyle0=scTagCss,ScTag=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scClear=createEvent(this,"scClear",7),this.type="default",this.size="medium",this.pill=!1,this.clearable=!1,this.ariaLabel=void 0}handleClearClick(){this.scClear.emit(this)}render(){const a=this.clearable?"button":"span";return h(a,{key:"5d39ae6735fb6ce6f5f1b0ec10d38d5974d35a09",part:"base",onClick:()=>this.handleClearClick(),class:{tag:!0,"tag--primary":"primary"===this.type,"tag--success":"success"===this.type,"tag--info":"info"===this.type,"tag--warning":"warning"===this.type,"tag--danger":"danger"===this.type,"tag--default":"default"===this.type,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--clearable":this.clearable},"aria-label":this.ariaLabel},h("span",{key:"3a532842bff3e2937779d396c06fed61ec22d3df",part:"content",class:"tag__content"},h("slot",{key:"6e95ae19c54f743cc536c2caeb7cb38c4df60f05"})),!!this.clearable&&h("svg",{key:"b62b868b55c6ac52b2bf7700f55fed71af7213f7",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},h("path",{key:"65e3862f7890ca132636af15730c35d3f8593456",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})))}static get style(){return ScTagStyle0}},[1,"sc-tag",{type:[513],size:[513],pill:[516],clearable:[4],ariaLabel:[1,"aria-label"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-tag"].forEach((a=>{"sc-tag"===a&&(customElements.get(a)||customElements.define(a,ScTag))}))}export{ScTag as S,defineCustomElement as d};