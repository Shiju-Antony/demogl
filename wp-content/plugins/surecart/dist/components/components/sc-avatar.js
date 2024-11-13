import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";const scAvatarCss=":host{display:inline-block;--sc-avatar-size:3rem}.avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;width:var(--sc-avatar-size);height:var(--sc-avatar-size);background-color:var(--sc-color-gray-400);font-family:var(--sc-font-sans);font-size:calc(var(--sc-avatar-size) * 0.5);font-weight:var(--sc-font-weight-normal);color:var(--sc-color-white);user-select:none;vertical-align:middle}.avatar--circle,.avatar--circle .avatar__image{border-radius:var(--sc-border-radius-circle)}.avatar--rounded,.avatar--rounded .avatar__image{border-radius:var(--sc-border-radius-medium)}.avatar--square{border-radius:0}.avatar__icon{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%}.avatar__initials{line-height:1;text-transform:uppercase}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;overflow:hidden}",ScAvatarStyle0=scAvatarCss,ScAvatar$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){return h("div",{key:"a15106cbd864b1229fb69f373f7dd9dc53a6c206",part:"base",class:{avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape},role:"img","aria-label":this.label},this.initials?h("div",{part:"initials",class:"avatar__initials"},this.initials):h("div",{part:"icon",class:"avatar__icon","aria-hidden":"true"},h("slot",{name:"icon"},h("sl-icon",{name:"person-fill",library:"system"}))),this.image&&!this.hasError&&h("img",{key:"54c6a83989cab31e0501a6603cfecbb52d4774ea",part:"image",class:"avatar__image",src:this.image,loading:this.loading,alt:"",onError:()=>this.hasError=!0}))}static get watchers(){return{image:["handleImageChange"]}}static get style(){return ScAvatarStyle0}},[1,"sc-avatar",{image:[1],label:[1],initials:[1],loading:[1],shape:[513],hasError:[32]},void 0,{image:["handleImageChange"]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-avatar"].forEach((a=>{"sc-avatar"===a&&(customElements.get(a)||customElements.define(a,ScAvatar$1))}))}const ScAvatar=ScAvatar$1,defineCustomElement=defineCustomElement$1;export{ScAvatar,defineCustomElement};