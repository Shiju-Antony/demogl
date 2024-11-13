import{Host,h}from"@stencil/core";import{getProcessorByType}from"../../../../store/processors/getters";import{formBusy}from"../../../../store/form/getters";export class ScExpressPayment{constructor(){this.processor=void 0,this.dividerText=void 0,this.debug=void 0,this.hasPaymentOptions=void 0}onPaymentRequestLoaded(){this.hasPaymentOptions=!0}renderStripePaymentRequest(){const{processor_data:e}=getProcessorByType("stripe")||{};return h("sc-stripe-payment-request",{debug:this.debug,stripeAccountId:null==e?void 0:e.account_id,publishableKey:null==e?void 0:e.publishable_key})}render(){return h(Host,{key:"91a87d87f5eb428ffc089c43424a39d823cb17f3",class:{"is-empty":!this.hasPaymentOptions&&!this.debug}},this.renderStripePaymentRequest(),(this.hasPaymentOptions||this.debug)&&h("sc-divider",{key:"8edcda43e67e26227500031b882a7943ea70e039",style:{"--spacing":"calc(var(--sc-form-row-spacing)/2)"}},this.dividerText),!!formBusy()&&h("sc-block-ui",{key:"64faeb9b482bf26f0c055b808b55fc0dab136fec"}))}static get is(){return"sc-express-payment"}static get originalStyleUrls(){return{$:["sc-express-payment.css"]}}static get styleUrls(){return{$:["sc-express-payment.css"]}}static get properties(){return{processor:{type:"string",mutable:!1,complexType:{original:"ProcessorName",resolved:'"paypal" | "paypal-card" | "stripe"',references:{ProcessorName:{location:"import",path:"../../../../types",id:"src/types.ts::ProcessorName"}}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"processor",reflect:!1},dividerText:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"divider-text",reflect:!1},debug:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"debug",reflect:!1},hasPaymentOptions:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"has-payment-options",reflect:!1}}}static get listeners(){return[{name:"scPaymentRequestLoaded",method:"onPaymentRequestLoaded",target:void 0,capture:!1,passive:!1}]}}