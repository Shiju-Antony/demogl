import{Fragment,h}from"@stencil/core";import{__}from"@wordpress/i18n";import apiFetch from"../../../functions/fetch";export class ScLogin{constructor(){this.step=0,this.email="",this.password="",this.verifyCode="",this.loading=void 0,this.error=void 0}handleStepChange(){1===this.step&&setTimeout((()=>{var e,t;null===(t=null===(e=this.passwordInput)||void 0===e?void 0:e.triggerFocus)||void 0===t||t.call(e)}),50),2===this.step&&setTimeout((()=>{var e,t;null===(t=null===(e=this.codeInput)||void 0===e?void 0:e.triggerFocus)||void 0===t||t.call(e)}),50)}handleLoadingChange(e){e&&(this.error=null)}handleVerifyCodeChange(e){(null==e?void 0:e.length)>=6&&this.submitCode()}handleError(e){console.error(this.error),this.error=e||{message:__("Something went wrong","surecart")}}async createLoginCode(){try{this.loading=!0,await apiFetch({method:"POST",path:"surecart/v1/verification_codes",data:{login:this.email}}),this.step=this.step+1}catch(e){this.handleError(e)}finally{this.loading=!1}}async submitCode(){try{this.loading=!0;const{verified:e}=await apiFetch({method:"POST",path:"surecart/v1/verification_codes/verify",data:{login:this.email,code:this.verifyCode}});if(!e)throw{message:__("Verification code is not valid. Please try again.","surecart")};window.location.reload()}catch(e){this.handleError(e),this.loading=!1}}async login(){try{this.loading=!0;const{redirect_url:e}=await apiFetch({method:"POST",path:"surecart/v1/login",data:{login:this.email,password:this.password}});e?window.location.replace(e):window.location.reload()}catch(e){this.handleError(e),this.loading=!1}}async checkEmail(){try{this.loading=!0,await apiFetch({method:"POST",path:"surecart/v1/check_email",data:{login:this.email}}),this.step=this.step+1}catch(e){this.handleError(e)}finally{this.loading=!1}}renderInner(){return 2===this.step?h(Fragment,null,h("div",{class:"login-form__title",part:"title"},__("Check your email for a confirmation code","surecart")),h("div",null,h("sc-form",{onScFormSubmit:()=>this.submitCode()},h("sc-input",{label:__("Confirmation code","surecart"),type:"text",ref:e=>this.codeInput=e,autofocus:!0,required:!0,onScInput:e=>this.verifyCode=e.target.value}),h("sc-button",{type:"primary",submit:!0,full:!0},h("sc-icon",{name:"lock",slot:"prefix"}),__("Login with Code","surecart"))))):1===this.step&&this.email?h(Fragment,null,h("div",{class:"login-form__title",part:"title"},h("div",null,__("Welcome","surecart")),h("sc-button",{style:{fontSize:"18px"},size:"small",pill:!0,caret:!0,onClick:()=>this.step=this.step-1},h("sc-icon",{name:"user",slot:"prefix"}),this.email)),h("sc-flex",{flexDirection:"column",style:{"--sc-flex-column-gap":"var(--sc-spacing-large)"}},h("div",null,h("sc-form",{onScFormSubmit:()=>this.createLoginCode()},h("sc-button",{class:"login-code",type:"primary",submit:!0,full:!0},h("sc-icon",{name:"mail",slot:"prefix"}),__("Send a login code","surecart"))),h("sc-divider",{style:{"--spacing":"0.5em"}},__("or","surecart")),h("sc-form",{onScFormSubmit:()=>this.login()},h("sc-input",{label:__("Enter your password","surecart"),type:"password",ref:e=>this.passwordInput=e,onKeyDown:e=>"Enter"===e.key&&this.login(),autofocus:!0,required:!0,onScInput:e=>this.password=e.target.value}),h("sc-button",{type:"primary",outline:!0,submit:!0,full:!0},h("sc-icon",{name:"lock",slot:"prefix"}),__("Login","surecart")))))):h(Fragment,null,h("div",{class:"login-form__title",part:"title"},h("slot",{name:"title"})),h("sc-form",{onScFormSubmit:()=>this.checkEmail()},h("sc-input",{type:"text",value:this.email,label:__("Username or Email Address","surecart"),onScInput:e=>this.email=e.target.value,onKeyDown:e=>"Enter"===e.key&&this.checkEmail(),required:!0,autofocus:!0}),h("sc-button",{type:"primary",submit:!0,full:!0},h("sc-icon",{name:"arrow-right",slot:"suffix"}),__("Next","surecart"))))}render(){var e,t;return h("div",{key:"a198dd3dd85a3fd53b499d6f01fc225b1e9886d8",class:"login-form"},h("sc-card",{key:"dc34f52874910e41dd8b46af1d512c8d5166cd50"},!!this.error&&h("sc-alert",{key:"a63a28c99a041e9d61fd0cfc7e331537426c5ede",open:!0,type:"danger",closable:!0,onScHide:()=>this.error=null},h("span",{key:"293bb57f85b4f50fb728be0d559148286f0ba8fb",slot:"title",innerHTML:null===(e=this.error)||void 0===e?void 0:e.message}),((null===(t=this.error)||void 0===t?void 0:t.additional_errors)||[]).map((({message:e})=>h("div",{innerHTML:e})))),this.renderInner()),this.loading&&h("sc-block-ui",{key:"2f0926e300c1f8d68c5eb444583a98ef593580d8",spinner:!0,style:{zIndex:"9","--sc-block-ui-opacity":"0.5"}}))}static get is(){return"sc-login-form"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-login-form.scss"]}}static get styleUrls(){return{$:["sc-login-form.css"]}}static get states(){return{step:{},email:{},password:{},verifyCode:{},loading:{},error:{}}}static get watchers(){return[{propName:"step",methodName:"handleStepChange"},{propName:"loading",methodName:"handleLoadingChange"},{propName:"verifyCode",methodName:"handleVerifyCodeChange"}]}}