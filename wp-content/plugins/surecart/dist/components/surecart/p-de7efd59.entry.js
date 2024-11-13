import{r as e,h as s}from"./p-e97fde0a.js";import{a as t}from"./p-9a298389.js";import"./p-401e165e.js";import"./p-d3366af3.js";const a=":host{display:block;position:relative}";const d=a;const r=class{constructor(s){e(this,s);this.heading=undefined;this.successUrl=undefined;this.user=undefined;this.loading=undefined;this.error=undefined;this.enableValidation=true}renderEmpty(){return s("slot",{name:"empty"},wp.i18n.__("User not found.","surecart"))}validatePassword(e){const s=new RegExp("^(?=.*?[#?!@$%^&*-]).{6,}$");if(s.test(e))return true;return false}async handleSubmit(e){this.loading=true;this.error="";try{const{password:s}=await e.target.getFormJson();await t({path:`wp/v2/users/me`,method:"PATCH",data:{password:s,meta:{default_password_nag:false}}});if(this.successUrl){window.location.assign(this.successUrl)}else{this.loading=false}}catch(e){this.error=(e===null||e===void 0?void 0:e.message)||wp.i18n.__("Something went wrong","surecart");this.loading=false}}render(){return s("sc-dashboard-module",{key:"308dedaeba09cb4b08fd28ba1cb1f4f58b7fde62",class:"customer-details",error:this.error},s("span",{key:"d9ca41543d10f12bcd5c46851a7427725f59cb4f",slot:"heading"},this.heading||wp.i18n.__("Update Password","surecart")," "),s("slot",{key:"43059ce5eaa891c7f867716d97212df545288c7b",name:"end",slot:"end"}),s("sc-card",{key:"e95f7ff5b4881ae8fc8939cd0784ebfff7df7263"},s("sc-form",{key:"fd0ea37527769a58f999f38f3fba14c90e6fe96e",onScFormSubmit:e=>this.handleSubmit(e)},s("sc-password",{key:"2a24953373fd3cfdb9b36751a5f798152013573d",enableValidation:this.enableValidation,label:wp.i18n.__("New Password","surecart"),name:"password",confirmation:true,required:true}),s("div",{key:"5f85290225bfee190adbe43f852078ab7d0bbc11"},s("sc-button",{key:"50cca5ebe40dd711c2a45cf38c6cc3e5827c8713",type:"primary",full:true,submit:true},wp.i18n.__("Update Password","surecart"))))),this.loading&&s("sc-block-ui",{key:"c44d9cb7bf0f9a9bf869d24df1bb8a130e577098",spinner:true}))}};r.style=d;export{r as sc_wordpress_password_edit};
//# sourceMappingURL=p-de7efd59.entry.js.map