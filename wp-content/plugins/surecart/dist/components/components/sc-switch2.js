import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{F as FormSubmitController}from"./form-data.js";const scSwitchCss=':host{--height:var(--sc-toggle-size);--thumb-size:calc(var(--sc-toggle-size) - 2px);--width:calc(var(--height) * 2);display:block}.switch{display:inline-flex;align-items:flex-start;gap:0.7em;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;cursor:pointer}.switch--reversed{flex-direction:row-reverse}.switch--editing{cursor:initial}.switch__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--width);height:var(--height);background-color:var(--sc-switch-control-background-color, var(--sc-color-gray-300));border:solid var(--sc-input-border-width) var(--sc-switch-border-color, var(--sc-color-gray-300));border-radius:var(--height);transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) background-color}.switch__control .switch__thumb{width:var(--thumb-size);height:var(--thumb-size);background-color:var(--sc-switch-thumb-background-color, var(--sc-color-white));border-radius:50%;border:solid var(--sc-input-border-width) var(--sc-input-border-color);transform:translateX(calc(var(--width) / -2 + var(--thumb-size) / 2 - (var(--thumb-size) - var(--height)) / 2));transition:var(--sc-input-transition, var(--sc-transition-medium)) transform ease, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.switch__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.switch__control:has(:focus-visible){outline:2px solid var(--sc-focus-ring-color-primary);outline-offset:2px}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover{background-color:var(--sc-switch-control-hover-background-color, var(--sc-color-gray-200));border-color:var(--sc-switch-control-hover-border-color, var(--sc-color-gray-200))}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb{background-color:var(--sc-switch-background-thumb-hover-color, var(--sc-color-white));border-color:var(--sc-switch-thumb-border-color, var(--sc-input-border-color))}.switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control{background-color:var(--sc-switch-control-hover-background-color, var(--sc-color-gray-200));border-color:var(--sc-switch-control-hover-border-color, var(--sc-color-gray-200))}.switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-gray-300);box-shadow:0 0 0 1px var(--sc-color-gray-300)}.switch--checked .switch__control{background-color:var(--sc-switch-checked-control-background-color, var(--sc-color-primary-500));border-color:var(--sc-switch-checked-control-border-color, var(--sc-color-primary-500))}.switch--checked .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500);transform:translateX(calc(var(--width) / 2 - var(--thumb-size) / 2 + (var(--thumb-size) - var(--height)) / 2))}.switch.switch--checked:not(.switch--disabled) .switch__control:hover{opacity:0.8}.switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500)}.switch.switch--checked:not(.switch--disabled).switch--focused .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500);box-shadow:0 0 0 1px var(--sc-focus-ring-color-primary)}.switch--disabled{opacity:0.5;cursor:not-allowed}.switch__label{user-select:none;line-height:var(--height)}.switch--is-required .switch__title:after{content:" *";color:var(--sc-color-danger-500)}.switch__title{color:var(--sc-swith-label-color, var(--sc-input-label-color));font-weight:var(--sc-input-label-font-weight);font-size:var(--sc-input-label-font-size-medium)}.switch__description{display:none;color:var(--sc-switch-description-color, var(--sc-color-gray-500));line-height:var(--sc-line-height-dense);margin:0.5em 0 0;font-size:var(--sc-font-size-small)}.switch--has-description .switch__description{display:block}slot[name=description]::slotted(*){margin:0.75em 0;line-height:var(--sc-line-height-dense);vertical-align:center}',ScSwitchStyle0=scSwitchCss;let id=0;const ScSwitch=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scBlur=createEvent(this,"scBlur",7),this.scChange=createEvent(this,"scChange",7),this.scFocus=createEvent(this,"scFocus",7),this.switchId="switch-"+ ++id,this.labelId=`switch-label-${id}`,this.hasDescription=void 0,this.hasFocus=!1,this.name=void 0,this.value=void 0,this.disabled=!1,this.required=!1,this.checked=!1,this.invalid=!1,this.reversed=void 0,this.edit=!1}async reportValidity(){return this.invalid=!this.input.checkValidity(),this.input.reportValidity()}handleClick(){this.checked=!this.checked,this.scChange.emit()}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleKeyDown(t){if(this.edit)return!0;"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.scChange.emit()),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.scChange.emit())," "!==t.key&&"Enter"!==t.key||(t.preventDefault(),this.handleClick())}handleMouseDown(t){if(this.edit)return!0;t.preventDefault(),this.input.focus()}handleCheckedChange(){this.input&&(this.input.checked=this.checked,this.invalid=!this.input.checkValidity())}componentDidLoad(){this.formController=new FormSubmitController(this.el,{value:t=>t.checked?t.value:void 0}).addFormData(),this.hasDescription=!!this.el.querySelector('[slot="description"]')}disconnectedCallback(){var t;null===(t=this.formController)||void 0===t||t.removeFormData()}render(){const t=this.edit?"div":"label";return h(t,{key:"c5f89880b148cbdb90a95439a95aa92bcef46ca8",part:"base",htmlFor:this.switchId,class:{switch:!0,"switch--is-required":this.required,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--reversed":this.reversed,"switch--editing":this.edit,"switch--has-description":this.hasDescription},onMouseDown:t=>this.handleMouseDown(t)},h("span",{key:"bc5a14dcc40faac42d9b23cb92fbc3df1e3d0628",part:"control",class:"switch__control"},h("span",{key:"db05fb48051d149e7c5f3d636a1a0e10bb9745f5",part:"thumb",class:"switch__thumb"}),h("input",{key:"908324f90c0191206fe20e3402adce7deabac67d",ref:t=>this.input=t,id:this.switchId,type:"checkbox",role:"switch",name:this.name,value:this.value||"on",checked:this.checked,disabled:this.disabled,required:this.required,"aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onClick:()=>this.handleClick(),onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus(),onKeyDown:t=>this.handleKeyDown(t)})),h("span",{key:"c69657c6ee99d02eb2f788d9816df7780832cf81",class:"switch__label"},h("span",{key:"70396455c94e4aaf8d4e32e3ddb4899cf3529c60",part:"title",id:this.labelId,class:"switch__title"},h("slot",{key:"f68fc3032fe5b85dd334308fe05aa15552c7906a"})),h("span",{key:"2a469f168b0cc81b462b777456394774eb29a1ea",class:"switch__description",part:"description"},h("slot",{key:"a3285ce31ad48a330f87f77cf0664f30890325d6",name:"description"}))))}get el(){return this}static get watchers(){return{checked:["handleCheckedChange"]}}static get style(){return ScSwitchStyle0}},[1,"sc-switch",{name:[513],value:[1],disabled:[516],required:[516],checked:[1540],invalid:[1540],reversed:[4],edit:[4],hasDescription:[32],hasFocus:[32],reportValidity:[64]},void 0,{checked:["handleCheckedChange"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-switch"].forEach((t=>{"sc-switch"===t&&(customElements.get(t)||customElements.define(t,ScSwitch))}))}export{ScSwitch as S,defineCustomElement as d};