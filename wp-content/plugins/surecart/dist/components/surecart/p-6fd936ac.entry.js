import{r as i,c as t,h as e,H as o,a as s}from"./p-e97fde0a.js";import{s as n,o as d,u as r}from"./p-97f59651.js";import{d as a,e as c,f as l,g as u,h,c as v}from"./p-2cdfd4bc.js";import{c as f}from"./p-58d2adc4.js";import{s as p}from"./p-2c73bc7c.js";import{v as m,c as g,s as y}from"./p-15630c79.js";import{a as b}from"./p-9a298389.js";import{s as w}from"./p-830ab1a3.js";import{c as _,r as k,a as E}from"./p-1f60f497.js";import{c as C}from"./p-96e5202e.js";import{a as S,g as x}from"./p-401e165e.js";import{s as I}from"./p-fab02ef6.js";import"./p-433d9154.js";import{s as T}from"./p-cd77e20e.js";import{p as j}from"./p-8b323bfb.js";import{r as L,g as P}from"./p-d3366af3.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-6ec14893.js";import"./p-07b1b1ed.js";import"./p-93127aa7.js";const R=":host{display:block}sc-table{height:auto}h4{display:block;margin:0;font-weight:var(--sc-font-weight-bold);font-size:var(--sc-font-size-medium)}.stock-alert{--body-spacing:var(--sc-spacing-x-large);--width:500px}.stock-alert__image{width:50px;height:50px;object-fit:cover;margin-right:10px;display:block}.stock-alert__quantity{color:var(--sc-color-gray-500);font-weight:var(--sc-font-weight-bold);display:flex;align-items:center;justify-content:flex-end;gap:var(--sc-spacing-xx-small)}";const A=R;const q=class{constructor(e){i(this,e);this.scUpdateLineItem=t(this,"scUpdateLineItem",7);this.stockErrors=[];this.busy=undefined;this.error=undefined}getOutOfStockLineItems(){var i,t;return(((t=(i=n.checkout)===null||i===void 0?void 0:i.line_items)===null||t===void 0?void 0:t.data)||[]).filter((i=>{var t,e,o;const s=(t=i.price)===null||t===void 0?void 0:t.product;if((i===null||i===void 0?void 0:i.purchasable_status)!=="out_of_stock")return false;if((e=i===null||i===void 0?void 0:i.variant)===null||e===void 0?void 0:e.id){return((o=i===null||i===void 0?void 0:i.variant)===null||o===void 0?void 0:o.available_stock)<i.quantity}return(s===null||s===void 0?void 0:s.available_stock)<i.quantity}))}async onSubmit(){const i=this.getOutOfStockLineItems().map((i=>{var t,e,o;const s=(t=i.price)===null||t===void 0?void 0:t.product;if((e=i===null||i===void 0?void 0:i.variant)===null||e===void 0?void 0:e.id){return{...i,quantity:Math.max(((o=i===null||i===void 0?void 0:i.variant)===null||o===void 0?void 0:o.available_stock)||0,0)}}return{...i,quantity:Math.max((s===null||s===void 0?void 0:s.available_stock)||0,0)}}));try{this.busy=true;n.checkout=await a({id:n.checkout.id,data:{line_items:(i||[]).filter((i=>!!i.quantity)).map((i=>{var t,e;return{id:i.id,price_id:(t=i.price)===null||t===void 0?void 0:t.id,quantity:i.quantity,...((e=i===null||i===void 0?void 0:i.variant)===null||e===void 0?void 0:e.id)?{variant:i.variant.id}:{}}}))}})}catch(i){const t=((i===null||i===void 0?void 0:i.additional_errors)||[]).map((i=>i===null||i===void 0?void 0:i.message)).filter((i=>i));this.error=`${(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Something went wrong.","surecart")} ${(t===null||t===void 0?void 0:t.length)&&` ${t.join(". ")}`}`}finally{this.busy=false}}render(){const i=(this.getOutOfStockLineItems()||[]).map((i=>{var t,e,o;const s=(t=i.price)===null||t===void 0?void 0:t.product;const n=((e=i===null||i===void 0?void 0:i.variant)===null||e===void 0?void 0:e.id)?(o=i===null||i===void 0?void 0:i.variant)===null||o===void 0?void 0:o.available_stock:s===null||s===void 0?void 0:s.available_stock;return{name:s===null||s===void 0?void 0:s.name,image:i===null||i===void 0?void 0:i.image,quantity:i.quantity,available_stock:n}}));const t=i===null||i===void 0?void 0:i.some((i=>(i===null||i===void 0?void 0:i.available_stock)<1));return e(o,null,e("sc-dialog",{open:!!i.length&&f()==="draft",noHeader:true,onScRequestClose:i=>i.preventDefault(),class:"stock-alert"},e("sc-dashboard-module",{class:"subscription-cancel",error:this.error,style:{"--sc-dashboard-module-spacing":"1em"}},e("sc-flex",{slot:"heading","align-items":"center","justify-content":"flex-start"},e("sc-icon",{name:"alert-circle",style:{color:"var(--sc-color-primary-500"}}),t?wp.i18n.__("Out of Stock","surecart"):wp.i18n.__("Quantity Update","surecart")),e("span",{slot:"description"},t?wp.i18n.__("Some items are no longer available. Your cart will be updated.","surecart"):wp.i18n.__("Available quantities for these items have changed. Your cart will be updated.","surecart")),e("sc-card",{"no-padding":true},e("sc-table",null,e("sc-table-cell",{slot:"head"},wp.i18n.__("Description","surecart")),e("sc-table-cell",{slot:"head",style:{width:"100px",textAlign:"right"}},wp.i18n.__("Quantity","surecart")),i.map(((t,o)=>{const s=o===i.length-1;return e("sc-table-row",{style:{"--columns":"2",...s?{border:"none"}:{}}},e("sc-table-cell",null,e("sc-flex",{justifyContent:"flex-start",alignItems:"center"},(t===null||t===void 0?void 0:t.image)&&e("img",{...t.image,class:"stock-alert__image"}),e("h4",null,t.name))),e("sc-table-cell",{style:{width:"100px",textAlign:"right"}},e("span",{class:"stock-alert__quantity"},e("span",null,t===null||t===void 0?void 0:t.quantity)," ",e("sc-icon",{name:"arrow-right"})," ",e("span",null,Math.max(t===null||t===void 0?void 0:t.available_stock,0)))))}))))),e("sc-button",{slot:"footer",type:"primary",loading:this.busy,onClick:()=>this.onSubmit()},wp.i18n.__("Continue","surecart"),e("sc-icon",{name:"arrow-right",slot:"suffix"})),this.busy&&e("sc-block-ui",{spinner:true})))}};q.style=A;const O=class{constructor(t){i(this,t);this.state=undefined}componentDidLoad(){window.addEventListener("beforeunload",(i=>this.warnIfUnsavedChanges(i)),{capture:true})}warnIfUnsavedChanges(i){if(["updating","finalizing","confirming"].includes(this.state)){console.log({e:i});i.preventDefault();i.returnValue=wp.i18n.__("Your payment is processing. Exiting this page could cause an error in your order. Please do not navigate away from this page.","surecart");return i.returnValue}}};const D=class{constructor(t){i(this,t);this.disabled=undefined;this.taxProtocol=undefined;this.hasAddress=undefined;this.hasTaxIDField=undefined;this.hasBumpsField=undefined;this.hasTaxLine=undefined;this.hasBumpLine=undefined;this.hasShippingChoices=undefined;this.hasShippingAmount=undefined;this.hasInvoiceDetails=undefined;this.hasInvoiceMemo=undefined}handleOrderChange(){var i,t,e,o,s,d,r,a;if(this.disabled)return;if(p()){this.addAddressField()}if((e=(t=(i=n.checkout)===null||i===void 0?void 0:i.recommended_bumps)===null||t===void 0?void 0:t.data)===null||e===void 0?void 0:e.length){this.addBumps()}if(!!((o=n.checkout)===null||o===void 0?void 0:o.tax_amount)){this.addTaxLine()}if(((s=n.checkout)===null||s===void 0?void 0:s.shipping_enabled)&&((d=n.checkout)===null||d===void 0?void 0:d.selected_shipping_choice_required)){this.addShippingChoices()}if(!!((r=n.checkout)===null||r===void 0?void 0:r.shipping_amount)){this.addShippingAmount()}if(!!((a=n.checkout)===null||a===void 0?void 0:a.invoice)){this.addInvoiceDetails();this.addInvoiceMemo()}}handleHasAddressChange(){if(!this.hasAddress)return;this.handleShippingAddressRequired()}componentWillLoad(){var i,t;this.hasAddress=!!this.el.querySelector("sc-order-shipping-address");this.hasTaxIDField=!!this.el.querySelector("sc-order-tax-id-input");this.hasBumpsField=!!this.el.querySelector("sc-order-bumps");this.hasTaxLine=!!this.el.querySelector("sc-line-item-tax");this.hasShippingChoices=!!this.el.querySelector("sc-shipping-choices");this.hasShippingAmount=!!this.el.querySelector("sc-line-item-shipping");this.hasInvoiceDetails=!!this.el.querySelector("sc-invoice-details");this.hasInvoiceMemo=!!this.el.querySelector("sc-invoice-memo");if((i=this.taxProtocol)===null||i===void 0?void 0:i.tax_enabled){this.addAddressField();if((t=this.taxProtocol)===null||t===void 0?void 0:t.eu_vat_required){this.addTaxIDField()}}this.handleOrderChange();this.removeCheckoutListener=d("checkout",(()=>this.handleOrderChange()));this.removePaymentRequiresShippingListener=d("paymentMethodRequiresShipping",(()=>this.handleOrderChange()))}disconnectedCallback(){this.removeCheckoutListener();this.removePaymentRequiresShippingListener()}handleShippingAddressRequired(){var i;if(!((i=n.checkout)===null||i===void 0?void 0:i.shipping_address_required))return;const t=this.el.querySelector("sc-order-shipping-address");if(!t)return;t.required=true;const e=this.el.querySelector("sc-customer-name");if(!!e){e.required=true;return}const o=this.el.querySelector("sc-customer-firstname");const s=this.el.querySelector("sc-customer-lastname");if(!!o){o.required=true;if(!!s){s.required=true}return}t.requireName=true;t.showName=true}addAddressField(){if(this.hasAddress){return}const i=this.el.querySelector("sc-payment");const t=document.createElement("sc-order-shipping-address");t.label=wp.i18n.__("Shipping Address","surecart");const e=document.createElement("sc-order-billing-address");e.label=wp.i18n.__("Billing Address","surecart");i.parentNode.insertBefore(t,i);i.parentNode.insertBefore(e,i);this.hasAddress=true}addTaxIDField(){if(this.hasTaxIDField)return;const i=this.el.querySelector("sc-payment");const t=document.createElement("sc-order-tax-id-input");i.parentNode.insertBefore(t,i);this.hasTaxIDField=true}addBumps(){if(this.hasBumpsField)return;const i=this.el.querySelector("sc-order-billing-address")||this.el.querySelector("sc-payment");const t=document.createElement("sc-order-bumps");i===null||i===void 0?void 0:i.parentNode.insertBefore(t,i.nextSibling);this.hasBumpsField=true}addTaxLine(){var i;if(this.hasTaxLine)return;const t=this.el.querySelector("sc-line-item-total[total=total]");const e=document.createElement("sc-line-item-tax");if(!t)return;if(((i=t===null||t===void 0?void 0:t.previousElementSibling)===null||i===void 0?void 0:i.tagName)==="SC-DIVIDER"){t.parentNode.insertBefore(e,t.previousElementSibling)}else{t.parentNode.insertBefore(e,t)}this.hasTaxLine=true}addShippingChoices(){if(this.hasShippingChoices)return;const i=this.el.querySelector("sc-payment");const t=document.createElement("sc-shipping-choices");i.parentNode.insertBefore(t,i);this.hasShippingChoices=true}addShippingAmount(){var i;if(this.hasShippingAmount)return;let t=this.el.querySelector("sc-line-item-tax");const e=this.el.querySelector("sc-line-item-total[total=total]");if(!e)return;if(!t){t=((i=e===null||e===void 0?void 0:e.previousElementSibling)===null||i===void 0?void 0:i.tagName)==="SC-DIVIDER"?e.previousElementSibling:e}const o=document.createElement("sc-line-item-shipping");t.parentNode.insertBefore(o,t);this.hasShippingAmount=true}addInvoiceDetails(){if(this.hasInvoiceDetails)return;let i=this.el.querySelector("sc-line-items");const t=document.createElement("sc-invoice-details");i.parentNode.insertBefore(t,i);const e=document.createElement("sc-line-item-invoice-number");t.appendChild(e);const o=document.createElement("sc-line-item-invoice-due-date");t.appendChild(o);const s=document.createElement("sc-line-item-invoice-receipt-download");t.appendChild(s);const n=document.createElement("sc-divider");t.appendChild(n);this.hasInvoiceDetails=true}addInvoiceMemo(){if(this.hasInvoiceMemo)return;const i=this.el.querySelector("sc-order-summary");const t=document.createElement("sc-invoice-details");i.parentNode.insertBefore(t,i.nextSibling);const e=document.createElement("sc-invoice-memo");t.appendChild(e);this.hasInvoiceMemo=true}render(){return e("slot",{key:"99be2f94afda80e18e15b54cf2e897a9f1211a40"})}get el(){return s(this)}static get watchers(){return{hasAddress:["handleHasAddressChange"]}}};const F=class{constructor(t){i(this,t)}componentWillLoad(){this.maybeAddErrorsComponent()}maybeAddErrorsComponent(){var i,t;if(!!this.el.querySelector("sc-checkout-form-errors"))return;const e=document.createElement("sc-checkout-form-errors");(t=(i=this.el.querySelector("sc-form"))===null||i===void 0?void 0:i.prepend)===null||t===void 0?void 0:t.call(i,e)}render(){return e("slot",{key:"44b8ac7fd69244852c28c34122cad8d57a2c4ffe"})}get el(){return s(this)}};const H=class{constructor(e){i(this,e);this.scSetCheckoutFormState=t(this,"scSetCheckoutFormState",7);this._stateService=m(g);this.checkoutState=g.initialState}setState(i){const{send:t}=this._stateService;r(i);return t(i)}handleCheckoutStateChange(i){this.scSetCheckoutFormState.emit(i.value)}componentWillLoad(){this._stateService.subscribe((i=>this.checkoutState=i));this._stateService.start()}disconnectedCallback(){this._stateService.stop()}handleSetStateEvent(i){this.setState(i.detail)}async handlePaid(){this.setState("PAID")}render(){if(this.checkoutState.value==="expired"){return e("sc-block-ui",null,e("div",null,wp.i18n.__("Please refresh the page.","surecart")))}return e("slot",null)}static get watchers(){return{checkoutState:["handleCheckoutStateChange"]}}};const U=":host{display:block}";const J=U;const M=class{constructor(e){i(this,e);this.scSetLoggedIn=t(this,"scSetLoggedIn",7);this.scSetCustomer=t(this,"scSetCustomer",7);this.loggedIn=undefined;this.order=undefined;this.notice=undefined;this.open=undefined;this.loading=undefined;this.error=undefined}handleLoginPrompt(){this.open=true}handleLoginDialogChange(i){if(i){setTimeout((()=>{this.loginForm.querySelector("sc-input").triggerFocus()}),100)}}handleLoggedInChange(i,t){if(t===false&&i){this.notice=true}}handleOrderChange(i,t){if((i===null||i===void 0?void 0:i.updated_at)!==(t===null||t===void 0?void 0:t.updated_at)){this.notice=false}}async handleFormSubmit(i){i.preventDefault();i.stopImmediatePropagation();this.error=null;const{login:t,password:e}=await i.target.getFormJson();try{this.loading=true;const{name:i,email:o}=await b({method:"POST",path:"surecart/v1/login",data:{login:t,password:e}});this.scSetLoggedIn.emit(true);this.scSetCustomer.emit({name:i,email:o});this.open=false}catch(i){console.error(i);this.error=(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.loading=false}}render(){return e(o,{key:"6483b03774752f149ebf2780bcf7de9ea249b876"},!!this.notice&&e("sc-alert",{key:"4dda99cfcc4cda8b96334b370926da2535606cc6",type:"success",open:true,style:{marginBottom:"var(--sc-form-row-spacing)"},closable:true},e("span",{key:"516d569aced76e669d2cad929b7ddd1d54b9c4fa",slot:"title"},wp.i18n.__("Welcome back!","surecart")),wp.i18n.__("You have logged in successfully.","surecart")),e("slot",{key:"efd0fc876bd402c8cda5eac0fa66b1a892638a22"}),!this.loggedIn&&e("sc-dialog",{key:"a9bcad9e5dba0f09a09f37330661b20f086f92c1",label:wp.i18n.__("Login to your account","surecart"),open:this.open,onScRequestClose:()=>this.open=false},e("sc-form",{key:"e491ab3a3e78b038364f248f3ee9b427453b3d9c",ref:i=>this.loginForm=i,onScFormSubmit:i=>{i.preventDefault();i.stopImmediatePropagation()},onScSubmit:i=>this.handleFormSubmit(i)},!!this.error&&e("sc-alert",{key:"45135eca2527a0c4a3eb2376ddc8139e1e5cccd0",type:"danger",open:!!this.error},this.error),e("sc-input",{key:"d6679b8e493874e4c804012c596c0d2974129f3e",label:wp.i18n.__("Email or Username","surecart"),type:"text",name:"login",required:true,autofocus:this.open}),e("sc-input",{key:"fd2cd1cb50df0e1803572252ad9a225879236723",label:wp.i18n.__("Password","surecart"),type:"password",name:"password",required:true}),e("sc-button",{key:"4fd330c793e64d0e5bce9e16460b269b38d12987",type:"primary",full:true,loading:this.loading,submit:true},wp.i18n.__("Login","surecart")))))}static get watchers(){return{open:["handleLoginDialogChange"],loggedIn:["handleLoggedInChange"],order:["handleOrderChange"]}}};M.style=J;const N=".confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}sc-dialog::part(overlay){backdrop-filter:blur(4px)}";const V=N;const Y=class{constructor(e){i(this,e);this.scOrderPaid=t(this,"scOrderPaid",7);this.scSetState=t(this,"scSetState",7);this.showSuccessModal=false;this.manualPaymentMethod=undefined;this.checkoutStatus=undefined;this.successUrl=undefined}handleConfirmOrderEvent(){if(this.checkoutStatus==="confirming"){this.confirmOrder()}else if(this.checkoutStatus==="confirmed"){w(wp.i18n.__("Order has been confirmed. Please select continue to go to the next step.","surecart"))}}async confirmOrder(){var i,t,e,o;try{n.checkout=await b({method:"PATCH",path:S(`surecart/v1/checkouts/${(i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.id}/confirm`,{expand:c})});this.scSetState.emit("CONFIRMED")}catch(i){console.error(i);_(i)}finally{this.manualPaymentMethod=((t=n.checkout)===null||t===void 0?void 0:t.manual_payment_method)||null;const i=n.checkout;const s=n.formId;if(!!((e=i===null||i===void 0?void 0:i.current_upsell)===null||e===void 0?void 0:e.permalink)){setTimeout((()=>{var t;return window.location.assign(S((t=i===null||i===void 0?void 0:i.current_upsell)===null||t===void 0?void 0:t.permalink,{sc_checkout_id:i===null||i===void 0?void 0:i.id,sc_form_id:s}))}),50);C();return}const d=((o=i===null||i===void 0?void 0:i.metadata)===null||o===void 0?void 0:o.success_url)||this.successUrl;if(d){this.scSetState.emit("REDIRECT");const t=S(d,{sc_order:i===null||i===void 0?void 0:i.id});setTimeout((()=>window.location.assign(t)),50)}else{this.showSuccessModal=true}C()}}getSuccessUrl(){var i,t,e,o,s;const d=((t=(i=n.checkout)===null||i===void 0?void 0:i.metadata)===null||t===void 0?void 0:t.success_url)||this.successUrl;return d?S(d,{sc_order:(e=n.checkout)===null||e===void 0?void 0:e.id}):(s=(o=window===null||window===void 0?void 0:window.scData)===null||o===void 0?void 0:o.pages)===null||s===void 0?void 0:s.dashboard}handleSuccessModal(){if(this.showSuccessModal){setTimeout((()=>{var i;(i=this.continueButton)===null||i===void 0?void 0:i.focus()}),50)}}render(){var i,t,s,n,d,r,a,c,l,u;return e(o,{key:"709b913495c04e32ffa6ff0789c78e72f12d931d"},e("slot",{key:"764b953fd9e5ca03dd33caf7a0aa15d304e09b43"}),e("sc-dialog",{key:"0353c8718cb862a6fe3ccfd3d052e9bd7c70b6b0",open:!!this.showSuccessModal,style:{"--body-spacing":"var(--sc-spacing-xxx-large)"},noHeader:true,onScRequestClose:i=>i.preventDefault()},e("div",{key:"6601344c74390674d861fe1520c823b13b470532",class:"confirm__icon"},e("div",{key:"cd71aad57192758b409e04c2e8a19237d0a99fcb",class:"confirm__icon-container"},e("sc-icon",{key:"b162000d4b4cc7523cb464764daaf6f7f4bb3ec6",name:"check"}))),e("sc-dashboard-module",{key:"a0f0d09c45327957b68bf5cd9673acc278dc724a",heading:((t=(i=y===null||y===void 0?void 0:y.text)===null||i===void 0?void 0:i.success)===null||t===void 0?void 0:t.title)||wp.i18n.__("Thanks for your order!","surecart"),style:{"--sc-dashboard-module-spacing":"var(--sc-spacing-x-large)",textAlign:"center"}},e("span",{key:"951a99436d4e5b3bb0fc7f2bfbcd2cd819dbad85",slot:"description"},((n=(s=y===null||y===void 0?void 0:y.text)===null||s===void 0?void 0:s.success)===null||n===void 0?void 0:n.description)||wp.i18n.__("Your payment was successful. A receipt is on its way to your inbox.","surecart")),!!((d=this.manualPaymentMethod)===null||d===void 0?void 0:d.name)&&!!((r=this.manualPaymentMethod)===null||r===void 0?void 0:r.instructions)&&e("sc-alert",{key:"79b3a501f1e284f4a940197ea2efb915821ca0f7",type:"info",open:true,style:{"text-align":"left"}},e("span",{key:"9d18b5f00e3ce22595ca9f56ca9fbd236167b607",slot:"title"},(a=this.manualPaymentMethod)===null||a===void 0?void 0:a.name),e("div",{key:"02fc5b1ef2fb50db6d1dcca011576e713b26ce1a",innerHTML:(c=this.manualPaymentMethod)===null||c===void 0?void 0:c.instructions})),e("sc-button",{key:"03f10803f9db23b6ca824f7b8cb7bbcc4b9e7a62",href:this.getSuccessUrl(),size:"large",type:"primary",ref:i=>this.continueButton=i},((u=(l=y===null||y===void 0?void 0:y.text)===null||l===void 0?void 0:l.success)===null||u===void 0?void 0:u.button)||wp.i18n.__("Continue","surecart"),e("sc-icon",{key:"539b8b91725ceb58e0177bcf101712d4c58a1a9a",name:"arrow-right",slot:"suffix"})))))}get el(){return s(this)}static get watchers(){return{checkoutStatus:["handleConfirmOrderEvent"],showSuccessModal:["handleSuccessModal"]}}};Y.style=V;const z=class{constructor(e){i(this,e);this.scUpdateOrderState=t(this,"scUpdateOrderState",7);this.scUpdateDraftState=t(this,"scUpdateDraftState",7);this.scPaid=t(this,"scPaid",7);this.scSetState=t(this,"scSetState",7);this.prices=[];this.persist=true}handlePricesChange(){let i=this.addInitialPrices()||[];if(!(i===null||i===void 0?void 0:i.length)){return}return this.loadUpdate({line_items:i})}async finalize(){return await this.handleFormSubmit()}async getFormData(){let i={};const t=this.el.querySelector("sc-form");if(t){const e=await t.getFormJson();i=j(e)}return i}async handleFormSubmit(){var i,t,e,o,s,d,a,c,u,h,v,f;k();r("FINALIZE");if(((i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.payment_method_required)&&(I===null||I===void 0?void 0:I.id)==="stripe"&&T.config.stripe.paymentElement){if(!((t=T===null||T===void 0?void 0:T.instances)===null||t===void 0?void 0:t.stripeElements)){r("REJECT");this.handleErrorResponse({message:"Stripe Elements not found.",code:"stripe_elements_not_found"});return new Error("Stripe Elements not found.")}const{error:i}=await((e=T===null||T===void 0?void 0:T.instances)===null||e===void 0?void 0:e.stripeElements.submit());if(i){console.error({error:i});r("REJECT");_(i);return}}let p=await this.getFormData();if(((o=window===null||window===void 0?void 0:window.scData)===null||o===void 0?void 0:o.recaptcha_site_key)&&(window===null||window===void 0?void 0:window.grecaptcha)){try{p["grecaptcha"]=await window.grecaptcha.execute(window.scData.recaptcha_site_key,{action:"surecart_checkout_submit"})}catch(i){console.error(i);r("REJECT");this.handleErrorResponse(i);return new Error(i===null||i===void 0?void 0:i.message)}}try{await this.update(p)}catch(i){console.error(i);r("REJECT");this.handleErrorResponse(i)}try{n.checkout=await l({id:(s=n===null||n===void 0?void 0:n.checkout)===null||s===void 0?void 0:s.id,query:{...(I===null||I===void 0?void 0:I.method)?{payment_method_type:I===null||I===void 0?void 0:I.method}:{},return_url:S(window.location.href,{...((d=n===null||n===void 0?void 0:n.checkout)===null||d===void 0?void 0:d.id)?{checkout_id:(a=n===null||n===void 0?void 0:n.checkout)===null||a===void 0?void 0:a.id}:{},is_surecart_payment_redirect:true})},data:p,processor:{id:I.id,manual:I.manual}});if((v=(h=(u=(c=n.checkout)===null||c===void 0?void 0:c.payment_intent)===null||u===void 0?void 0:u.processor_data)===null||h===void 0?void 0:h.mollie)===null||v===void 0?void 0:v.checkout_url){r("PAYING");return setTimeout((()=>{var i,t,e,o;return window.location.assign((o=(e=(t=(i=n.checkout)===null||i===void 0?void 0:i.payment_intent)===null||t===void 0?void 0:t.processor_data)===null||e===void 0?void 0:e.mollie)===null||o===void 0?void 0:o.checkout_url)}),50)}if(["paid","processing"].includes((f=n.checkout)===null||f===void 0?void 0:f.status)){this.scPaid.emit()}setTimeout((()=>{r("PAYING")}),50);return n.checkout}catch(i){console.error(i);this.handleErrorResponse(i);return new Error(i===null||i===void 0?void 0:i.message)}}async handlePaid(){r("PAID")}async handleAbandonedCartUpdate(i){const t=i.detail;this.loadUpdate({abandoned_checkout_enabled:t})}componentDidLoad(){this.findOrCreateOrder()}async findOrCreateOrder(){var i;const{redirect_status:t,checkout_id:e,line_items:o,coupon:s,is_surecart_payment_redirect:d}=x(window.location.href);window.history.replaceState({},document.title,L(window.location.href,"redirect_status","coupon","line_items","confirm_checkout_id","checkout_id","no_cart"));if(!!d&&!!e){r("FINALIZE");r("PAYING");return this.handleCheckoutIdFromUrl(e,s)}if(!!t){return this.handleRedirectStatus(t,e)}if(!!e){return this.handleCheckoutIdFromUrl(e,s)}if(!!o){return this.handleInitialLineItems(o,s)}const a=(i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.id;if(a&&this.persist){return this.handleExistingCheckout(a,s)}return this.handleNewCheckout(s)}async handleRedirectStatus(i,t){var e,o;console.info("Handling payment redirect.");if(i==="failed"){_(wp.i18n.__("Payment unsuccessful. Please try again.","surecart"));return}if(!t){_(wp.i18n.__("Could not find checkout. Please contact us before attempting to purchase again.","surecart"));return}try{r("FINALIZE");n.checkout=await u({id:t,query:{refresh_status:true}});if(((e=n.checkout)===null||e===void 0?void 0:e.status)&&["paid","processing"].includes((o=n.checkout)===null||o===void 0?void 0:o.status)){setTimeout((()=>{r("PAID");this.scPaid.emit()}),100)}}catch(i){this.handleErrorResponse(i)}}async handleCheckoutIdFromUrl(i,t=""){var e;console.info("Handling existing checkout from url.",t,i);if(t){return this.loadUpdate({id:i,discount:{promotion_code:t},refresh_line_items:true})}try{r("FETCH");n.checkout=await u({id:i,query:{refresh_line_items:true}});r("RESOLVE")}catch(i){this.handleErrorResponse(i)}switch((e=n.checkout)===null||e===void 0?void 0:e.status){case"paid":case"processing":return setTimeout((()=>{r("FINALIZE");r("PAID");this.scPaid.emit()}),100);case"payment_failed":C();_({message:wp.i18n.__("Payment unsuccessful.","surecart")});r("REJECT");return;case"payment_intent_canceled":r("REJECT");return;case"canceled":C();_({message:wp.i18n.__("Payment canceled. Please try again.","surecart")});r("REJECT");return}}async handleInitialLineItems(i,t){console.info("Handling initial line items.");const e=this.el.querySelector("sc-order-shipping-address");C();return this.loadUpdate({line_items:i,refresh_line_items:true,...t?{discount:{promotion_code:t}}:{},...(e===null||e===void 0?void 0:e.defaultCountry)?{shipping_address:{country:e===null||e===void 0?void 0:e.defaultCountry}}:{}})}async handleNewCheckout(i){var t,e,o;const s=this.getFormData();let d=n.initialLineItems||[];const a=this.el.querySelector("sc-order-shipping-address");try{r("FETCH");n.checkout=await h({data:{...s,...i?{discount:{promotion_code:i}}:{},...(a===null||a===void 0?void 0:a.defaultCountry)?{shipping_address:{country:a===null||a===void 0?void 0:a.defaultCountry}}:{},line_items:d,...((t=n.taxProtocol)===null||t===void 0?void 0:t.eu_vat_required)?{tax_identifier:{number_type:"eu_vat"}}:{}}});r("RESOLVE")}catch(i){console.error(i);this.handleErrorResponse(i);if(((o=(e=i===null||i===void 0?void 0:i.additional_errors)===null||e===void 0?void 0:e[0])===null||o===void 0?void 0:o.code)==="checkout.discount.coupon.blank"){await this.handleNewCheckout(false);_(i)}}}async handleExistingCheckout(i,t){var e,o,s;if(!i)return this.handleNewCheckout(t);console.info("Handling existing checkout.");try{r("FETCH");n.checkout=await v({id:i,data:{...t?{discount:{promotion_code:t}}:{},...((e=n.taxProtocol)===null||e===void 0?void 0:e.eu_vat_required)?{tax_identifier:{number_type:"eu_vat"}}:{},refresh_line_items:true}});r("RESOLVE")}catch(t){console.error(t);this.handleErrorResponse(t);if(((s=(o=t===null||t===void 0?void 0:t.additional_errors)===null||o===void 0?void 0:o[0])===null||s===void 0?void 0:s.code)==="checkout.discount.coupon.blank"){await this.handleExistingCheckout(i,false);_(t)}}}async handleErrorResponse(i){var t,e,o,s,d,a;if(["checkout.not_found"].includes(i===null||i===void 0?void 0:i.code)){C();return this.handleNewCheckout(false)}const c=((i===null||i===void 0?void 0:i.additional_errors)||[]).some((i=>{var t,e;const o=((e=(t=i===null||i===void 0?void 0:i.data)===null||t===void 0?void 0:t.options)===null||e===void 0?void 0:e.purchasable_statuses)||[];return["price_old_version","variant_old_version"].some((i=>o.includes(i)))}));if(c){await this.loadUpdate({id:(t=n===null||n===void 0?void 0:n.checkout)===null||t===void 0?void 0:t.id,refresh_line_items:true,status:"draft"});E(((o=(e=i===null||i===void 0?void 0:i.additional_errors)===null||e===void 0?void 0:e[0])===null||o===void 0?void 0:o.message)||wp.i18n.__("Some products in your order were outdated and have been updated. Please review your order summary before proceeding to payment.","surecart"));r("REJECT");return}if(((d=(s=i===null||i===void 0?void 0:i.additional_errors)===null||s===void 0?void 0:s[0])===null||d===void 0?void 0:d.code)==="checkout.product.out_of_stock"){this.fetch();r("REJECT");return}if(["order.invalid_status_transition"].includes(i===null||i===void 0?void 0:i.code)){await this.loadUpdate({id:(a=n===null||n===void 0?void 0:n.checkout)===null||a===void 0?void 0:a.id,status:"draft"});this.handleFormSubmit();return}if((i===null||i===void 0?void 0:i.code)==="rest_cookie_invalid_nonce"){r("EXPIRE");return}if((i===null||i===void 0?void 0:i.code)==="readonly"){C();window.location.assign(L(window.location.href,"order"));return}_(i);r("REJECT")}async initialize(i={}){let t=n.initialLineItems||[];return this.loadUpdate({...(t===null||t===void 0?void 0:t.length)?{line_items:t}:{},...i})}addInitialPrices(){var i;if(!((i=this===null||this===void 0?void 0:this.prices)===null||i===void 0?void 0:i.length))return[];if(this.prices.some((i=>!(i===null||i===void 0?void 0:i.id)))){return}return this.prices.map((i=>({price_id:i.id,quantity:i.quantity,variant:i.variant})))}getSessionId(){var i,t;const e=P(window.location.href,"checkout_id");if(!!e){return e}if((i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.id){return(t=n===null||n===void 0?void 0:n.checkout)===null||t===void 0?void 0:t.id}return null}async fetchCheckout(i,{query:t={},data:e={}}={}){try{r("FETCH");const o=await v({id:i,query:t,data:e});r("RESOLVE");return o}catch(i){this.handleErrorResponse(i)}}async fetch(i={}){try{r("FETCH");n.checkout=await u({id:this.getSessionId(),query:i});r("RESOLVE")}catch(i){this.handleErrorResponse(i)}}async update(i={},t={}){try{n.checkout=await v({id:(i===null||i===void 0?void 0:i.id)?i.id:this.getSessionId(),data:i,query:t})}catch(i){if(["checkout.not_found"].includes(i===null||i===void 0?void 0:i.code)){C();return this.initialize()}console.error(i);throw i}}async loadUpdate(i={}){try{r("FETCH");await this.update(i);r("RESOLVE")}catch(i){this.handleErrorResponse(i)}}render(){return e("sc-line-items-provider",{key:"cc013c7af415371652cecaff1727e10dc45a8c4d",order:n===null||n===void 0?void 0:n.checkout,onScUpdateLineItems:i=>this.loadUpdate({line_items:i.detail})},e("slot",{key:"5deb799bfe47cceb9bb998e2f72de696010a742f"}))}get el(){return s(this)}static get watchers(){return{prices:["handlePricesChange"]}}};export{q as sc_checkout_stock_alert,O as sc_checkout_unsaved_changes_warning,D as sc_form_components_validator,F as sc_form_error_provider,H as sc_form_state_provider,M as sc_login_provider,Y as sc_order_confirm_provider,z as sc_session_provider};
//# sourceMappingURL=p-6fd936ac.entry.js.map