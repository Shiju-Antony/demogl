import{Fragment,h}from"@stencil/core";import{__}from"@wordpress/i18n";import{state as checkoutState,onChange}from"../../../../store/checkout/index";import{formLoading}from"../../../../store/form/getters";import{lockCheckout,unLockCheckout}from"../../../../store/checkout/mutations";import{createOrUpdateCheckout}from"../../../../services/session/index";export class ScOrderBillingAddress{constructor(){this.label=void 0,this.showName=void 0,this.namePlaceholder=__("Name or Company Name","surecart"),this.countryPlaceholder=__("Country","surecart"),this.cityPlaceholder=__("City","surecart"),this.line1Placeholder=__("Address","surecart"),this.line2Placeholder=__("Address Line 2","surecart"),this.postalCodePlaceholder=__("Postal Code/Zip","surecart"),this.statePlaceholder=__("State/Province/Region","surecart"),this.defaultCountry=void 0,this.toggleLabel=__("Billing address is same as shipping","surecart"),this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null}}async reportValidity(){var e,t;return!this.input||(null===(t=null===(e=this.input)||void 0===e?void 0:e.reportValidity)||void 0===t?void 0:t.call(e))}prefillAddress(){var e;const t=Object.keys(this.address).filter((e=>"country"!==e));t.filter((e=>!this.address[e])).length===t.length&&(this.address={...this.address,...null===(e=checkoutState.checkout)||void 0===e?void 0:e.billing_address})}componentWillLoad(){var e;this.defaultCountry&&!(null===(e=this.address)||void 0===e?void 0:e.country)&&(this.address.country=this.defaultCountry),this.prefillAddress(),onChange("checkout",(()=>this.prefillAddress()))}async updateAddressState(e){var t,r;if(JSON.stringify(e)!==JSON.stringify(this.address)){this.address=e;try{lockCheckout("billing-address"),checkoutState.checkout=await createOrUpdateCheckout({id:null===(t=null==checkoutState?void 0:checkoutState.checkout)||void 0===t?void 0:t.id,data:{billing_matches_shipping:null===(r=checkoutState.checkout)||void 0===r?void 0:r.billing_matches_shipping,billing_address:this.address}})}catch(e){console.error(e)}finally{unLockCheckout("billing-address")}}}async onToggleBillingMatchesShipping(e){checkoutState.checkout={...checkoutState.checkout,billing_matches_shipping:e.target.checked}}shippingAddressFieldExists(){return!!document.querySelector("sc-order-shipping-address")}render(){var e,t;return h(Fragment,{key:"0f9adc881ab492e80b41d8aeeb9db8f21ce893d0"},this.shippingAddressFieldExists()&&h("sc-checkbox",{key:"aaac75789dda952b0042705d600ecaefa399675e",class:"order-billing-address__toggle",onScChange:e=>this.onToggleBillingMatchesShipping(e),checked:null===(e=checkoutState.checkout)||void 0===e?void 0:e.billing_matches_shipping},this.toggleLabel),(!this.shippingAddressFieldExists()||!(null===(t=checkoutState.checkout)||void 0===t?void 0:t.billing_matches_shipping))&&h("sc-address",{key:"d62e1bf6894174cafd49bfcd38f1d8983aa27bde",exportparts:"label, help-text, form-control, input__base, select__base, columns, search__base, menu__base",ref:e=>{this.input=e},label:this.label||__("Billing Address","surecart"),placeholders:{name:this.namePlaceholder,country:this.countryPlaceholder,city:this.cityPlaceholder,line_1:this.line1Placeholder,line_2:this.line2Placeholder,postal_code:this.postalCodePlaceholder,state:this.statePlaceholder},names:{name:"billing_name",country:"billing_country",city:"billing_city",line_1:"billing_line_1",line_2:"billing_line_2",postal_code:"billing_postal_code",state:"billing_state"},required:!0,loading:formLoading(),address:this.address,"show-name":this.showName,onScChangeAddress:e=>this.updateAddressState(e.detail)}))}static get is(){return"sc-order-billing-address"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-order-billing-address.scss"]}}static get styleUrls(){return{$:["sc-order-billing-address.css"]}}static get properties(){return{label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Label for the field"},attribute:"label",reflect:!1},showName:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the name field"},attribute:"show-name",reflect:!0},namePlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Name placeholder"},attribute:"name-placeholder",reflect:!1,defaultValue:"__('Name or Company Name', 'surecart')"},countryPlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Country placeholder"},attribute:"country-placeholder",reflect:!1,defaultValue:"__('Country', 'surecart')"},cityPlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"City placeholder"},attribute:"city-placeholder",reflect:!1,defaultValue:"__('City', 'surecart')"},line1Placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Address placeholder"},attribute:"line-1-placeholder",reflect:!1,defaultValue:"__('Address', 'surecart')"},line2Placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Address Line 2 placeholder"},attribute:"line-2-placeholder",reflect:!1,defaultValue:"__('Address Line 2', 'surecart')"},postalCodePlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Postal Code placeholder"},attribute:"postal-code-placeholder",reflect:!1,defaultValue:"__('Postal Code/Zip', 'surecart')"},statePlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"State placeholder"},attribute:"state-placeholder",reflect:!1,defaultValue:"__('State/Province/Region', 'surecart')"},defaultCountry:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Default country for address"},attribute:"default-country",reflect:!1},toggleLabel:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Toggle label"},attribute:"toggle-label",reflect:!1,defaultValue:"__('Billing address is same as shipping', 'surecart')"}}}static get states(){return{address:{}}}static get methods(){return{reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<boolean>"},docs:{text:"",tags:[]}}}}}