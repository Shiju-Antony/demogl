import{r as e,h as r}from"./p-e97fde0a.js";const s=":host{display:inline-block}";const a=s;const t=class{constructor(r){e(this,r);this.status=undefined;this.size="medium";this.pill=false;this.clearable=false}getType(){switch(this.status){case"processing":return"warning";case"paid":return"success";case"payment_failed":return"danger";case"canceled":return"danger";case"void":return"danger";case"canceled":return"danger"}}getText(){switch(this.status){case"processing":return wp.i18n.__("Processing","surecart");case"payment_failed":return wp.i18n.__("Payment Failed","surecart");case"paid":return wp.i18n.__("Paid","surecart");case"canceled":return wp.i18n.__("Canceled","surecart");case"void":return wp.i18n.__("Canceled","surecart");case"draft":return wp.i18n.__("Draft","surecart");default:return this.status}}render(){return r("sc-tag",{key:"1f653f8fc1d84fd6aa3b3563e31454ae9b575a89",type:this.getType(),pill:this.pill},this.getText())}};t.style=a;export{t as sc_order_status_badge};
//# sourceMappingURL=p-fcf0763f.entry.js.map