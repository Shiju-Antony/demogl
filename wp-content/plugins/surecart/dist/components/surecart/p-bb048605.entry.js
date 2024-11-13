import{r as e,h as t,F as i,a as s}from"./p-e97fde0a.js";import{a as n}from"./p-9a298389.js";import{o}from"./p-b719a497.js";import{p as r}from"./p-6ec14893.js";import{a as c}from"./p-401e165e.js";import"./p-d3366af3.js";import"./p-3f6362a4.js";const a=":host{display:block}.subscription{display:grid;gap:0.5em}.subscription a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.subscription a.cancel{color:var(--sc-color-danger-500)}@media screen and (max-width: 720px){.subscription__action-buttons{--sc-flex-column-gap:var(--sc-spacing-xxx-small)}.subscription__action-buttons::part(base){flex-direction:column}.subscription__action-buttons sc-button::part(base){width:auto;height:2em}}";const d=a;const l=class{constructor(t){e(this,t);this.subscriptionId=undefined;this.showCancel=undefined;this.heading=undefined;this.query=undefined;this.protocol=undefined;this.subscription=undefined;this.updatePaymentMethodUrl=undefined;this.loading=undefined;this.cancelModal=undefined;this.resubscribeModal=undefined;this.busy=undefined;this.error=undefined}componentWillLoad(){o(this.el,(()=>{if(!this.subscription){this.getSubscription()}}))}async cancelPendingUpdate(){var e;const t=confirm(wp.i18n.__("Are you sure you want to cancel the pending update to your plan?","surecart"));if(!t)return;try{this.busy=true;this.subscription=await n({path:c(`surecart/v1/subscriptions/${(e=this.subscription)===null||e===void 0?void 0:e.id}/`,{expand:["price","price.product","current_period","period.checkout","purchase","purchase.license","license.activations","discount","discount.coupon"]}),method:"PATCH",data:{purge_pending_update:true}})}catch(e){if(e===null||e===void 0?void 0:e.message){this.error=e.message}else{this.error=wp.i18n.__("Something went wrong","surecart")}console.error(this.error)}finally{this.busy=false}}async renewSubscription(){var e;try{this.error="";this.busy=true;this.subscription=await n({path:c(`surecart/v1/subscriptions/${(e=this.subscription)===null||e===void 0?void 0:e.id}/renew`,{expand:["price","price.product","current_period","period.checkout","purchase","purchase.license","license.activations","discount","discount.coupon"]}),method:"PATCH"})}catch(e){this.error=(e===null||e===void 0?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=false}}async getSubscription(){var e;try{this.loading=true;this.subscription=await await n({path:c(`surecart/v1/subscriptions/${this.subscriptionId||((e=this.subscription)===null||e===void 0?void 0:e.id)}`,{expand:["price","price.product","current_period"],...this.query||{}})})}catch(e){if(e===null||e===void 0?void 0:e.message){this.error=e.message}else{this.error=wp.i18n.__("Something went wrong","surecart")}console.error(this.error)}finally{this.loading=false}}renderName(e){var t;if(typeof((t=e===null||e===void 0?void 0:e.price)===null||t===void 0?void 0:t.product)!=="string"){return r(e===null||e===void 0?void 0:e.price)}return wp.i18n.__("Subscription","surecart")}renderRenewalText(e){const i=t("sc-subscription-status-badge",{subscription:e});if((e===null||e===void 0?void 0:e.cancel_at_period_end)&&e.current_period_end_at){return t("span",null,i," ",wp.i18n.sprintf(wp.i18n.__("Your plan will be canceled on","surecart"))," ",t("sc-format-date",{date:e.current_period_end_at*1e3,month:"long",day:"numeric",year:"numeric"}))}if(e.status==="trialing"&&e.trial_end_at){return t("span",null,i," ",wp.i18n.sprintf(wp.i18n.__("Your plan begins on","surecart"))," ",t("sc-format-date",{date:e.trial_end_at*1e3,month:"long",day:"numeric",year:"numeric"}))}if(e.status==="active"&&e.current_period_end_at){return t("span",null,i," ",wp.i18n.sprintf(wp.i18n.__("Your plan renews on","surecart"))," ",t("sc-format-date",{date:e.current_period_end_at*1e3,month:"long",day:"numeric",year:"numeric"}))}return i}renderEmpty(){return t("slot",{name:"empty"},wp.i18n.__("This subscription does not exist.","surecart"))}renderLoading(){return t("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},t("div",{style:{padding:"0.5em"}},t("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),t("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),t("sc-skeleton",{style:{width:"40%"}})))}renderContent(){if(this.loading){return this.renderLoading()}if(!this.subscription){return this.renderEmpty()}return t(i,null,t("sc-subscription-next-payment",{subscription:this.subscription,updatePaymentMethodUrl:this.updatePaymentMethodUrl},t("sc-subscription-details",{subscription:this.subscription})))}render(){var e,i,s,n,o,r,a;const d=(this===null||this===void 0?void 0:this.subscription.payment_method)||(this===null||this===void 0?void 0:this.subscription.manual_payment);return t("sc-dashboard-module",{key:"d1b482246a36e1784160e66902877fa9a41b1b0c",heading:this.heading||wp.i18n.__("Current Plan","surecart"),class:"subscription",error:this.error},!!this.subscription&&t("sc-flex",{key:"39653d17c4c8d184af097f1ce0414f771bbac0ad",slot:"end",class:"subscription__action-buttons"},this.updatePaymentMethodUrl&&d&&t("sc-button",{key:"22715edf0b172711b8471493eba89e96977a75eb",type:"link",href:this.updatePaymentMethodUrl},t("sc-icon",{key:"b4600d4cae25d98cdc9b8a1801d7610277b762ca",name:"credit-card",slot:"prefix"}),wp.i18n.__("Update Payment Method","surecart")),!d&&t("sc-button",{key:"97d2dd5fed01ccc76f7abb49ee9b94e2a4a23c46",type:"link",href:c(window.location.href,{action:"create",model:"payment_method",id:this===null||this===void 0?void 0:this.subscription.id,...((e=this===null||this===void 0?void 0:this.subscription)===null||e===void 0?void 0:e.live_mode)===false?{live_mode:false}:{}})},t("sc-icon",{key:"efd8143eab4572a2c593752f5b911254e95ac66d",name:"credit-card",slot:"prefix"}),wp.i18n.__("Add Payment Method","surecart")),!!Object.keys((i=this.subscription)===null||i===void 0?void 0:i.pending_update).length&&t("sc-button",{key:"2f8c0872bc330363d3c41aa64a92466d73edb0cc",type:"link",onClick:()=>this.cancelPendingUpdate()},t("sc-icon",{key:"c4b88b088e4ee2888a515fd0e79b4b4f25b198d3",name:"x-octagon",slot:"prefix"}),wp.i18n.__("Cancel Scheduled Update","surecart")),((s=this===null||this===void 0?void 0:this.subscription)===null||s===void 0?void 0:s.cancel_at_period_end)?t("sc-button",{type:"link",onClick:()=>this.renewSubscription()},t("sc-icon",{name:"repeat",slot:"prefix"}),wp.i18n.__("Restore Plan","surecart")):((n=this.subscription)===null||n===void 0?void 0:n.status)!=="canceled"&&((o=this.subscription)===null||o===void 0?void 0:o.current_period_end_at)&&this.showCancel&&t("sc-button",{type:"link",onClick:()=>this.cancelModal=true},t("sc-icon",{name:"x",slot:"prefix"}),wp.i18n.__("Cancel Plan","surecart")),((r=this.subscription)===null||r===void 0?void 0:r.status)==="canceled"&&t("sc-button",{key:"97ddcae62d465956a434b1c7be2f3d6455d0e421",type:"link",...!!((a=this.subscription)===null||a===void 0?void 0:a.payment_method)?{onClick:()=>this.resubscribeModal=true}:{href:this===null||this===void 0?void 0:this.updatePaymentMethodUrl}},t("sc-icon",{key:"e2db86e7c2e13740aeda01e2c3f1c13b0606511f",name:"repeat",slot:"prefix"}),wp.i18n.__("Resubscribe","surecart"))),t("sc-card",{key:"b62e53121cee3e6fbbd29e73fb26d3da2e1eb13a",style:{"--overflow":"hidden"},noPadding:true},this.renderContent()),this.busy&&t("sc-block-ui",{key:"b8e2694271c169f2f7f30a54f2318566b71d143f",spinner:true}),t("sc-cancel-dialog",{key:"d647066e24baf87d3f7f57fe26b09615b890d8c7",subscription:this.subscription,protocol:this.protocol,open:this.cancelModal,onScRequestClose:()=>this.cancelModal=false,onScRefresh:()=>this.getSubscription()}),t("sc-subscription-reactivate",{key:"d32a4ace7ce7107aa07654cceda4ff69bb837fd5",subscription:this.subscription,open:this.resubscribeModal,onScRequestClose:()=>this.resubscribeModal=false,onScRefresh:()=>this.getSubscription()}))}get el(){return s(this)}};l.style=d;export{l as sc_subscription};
//# sourceMappingURL=p-bb048605.entry.js.map