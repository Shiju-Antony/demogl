import{Fragment}from"@stencil/core";import{h}from"@stencil/core";import{__,sprintf}from"@wordpress/i18n";import{getLineItemByProductId}from"../../../../store/checkout/getters";import{state as checkoutState,onChange}from"../../../../store/checkout/index";import{getVariantFromValues}from"../../../../functions/util";import{addLineItem,updateLineItem}from"../../../../services/session/index";import{updateFormState}from"../../../../store/form/mutations";import{createErrorNotice}from"../../../../store/notices/mutations";import{isProductVariantOptionMissing,isProductVariantOptionSoldOut}from"../../../../store/utils";export class ScProductCheckoutSelectVariantOption{constructor(){this.product=void 0,this.label=void 0,this.selectorTitle=void 0,this.selectedVariant=void 0,this.selectedPrice=void 0,this.option1=void 0,this.option2=void 0,this.option3=void 0}handleOptionChange(){var t,i;this.selectedVariant=getVariantFromValues({variants:null===(i=null===(t=this.product)||void 0===t?void 0:t.variants)||void 0===i?void 0:i.data,values:{...this.option1?{option_1:this.option1}:{},...this.option2?{option_2:this.option2}:{},...this.option3?{option_3:this.option3}:{}}})}isSelectedVariantOutOfStock(){var t,i;return(null===(t=this.product)||void 0===t?void 0:t.stock_enabled)&&this.hasVariants()&&!(null===(i=this.product)||void 0===i?void 0:i.allow_out_of_stock_purchases)&&this.selectedVariant.available_stock<1}hasRequiredSelectedVariant(){var t;return!this.hasVariants()||(null===(t=this.selectedVariant)||void 0===t?void 0:t.id)}async reportValidity(){return this.input.setCustomValidity(""),this.hasVariants()?this.hasRequiredSelectedVariant()?this.isSelectedVariantOutOfStock()?(this.input.setCustomValidity(__("This selection is not available.","surecart")),this.input.reportValidity()):this.input.reportValidity():(this.input.setCustomValidity(__("Please choose an available option.","surecart")),this.input.reportValidity()):this.input.reportValidity()}getSelectedPrice(){var t,i,e,o,r;return 1===(null===(e=null===(i=null===(t=this.product)||void 0===t?void 0:t.prices)||void 0===i?void 0:i.data)||void 0===e?void 0:e.length)?null===(r=null===(o=this.product)||void 0===o?void 0:o.prices)||void 0===r?void 0:r.data[0]:this.selectedPrice}async updateLineItems(){var t,i,e,o,r;const a=this.getSelectedPrice();if(!(null==a?void 0:a.id))return;const n=this.lineItem();if(((null===(t=null==n?void 0:n.price)||void 0===t?void 0:t.id)!==(null==a?void 0:a.id)||(null===(i=null==n?void 0:n.variant)||void 0===i?void 0:i.id)!==(null===(e=this.selectedVariant)||void 0===e?void 0:e.id))&&this.hasRequiredSelectedVariant()&&!this.isSelectedVariantOutOfStock())try{updateFormState("FETCH"),(null==n?void 0:n.id)?checkoutState.checkout=await updateLineItem({id:null==n?void 0:n.id,data:{variant:null===(o=this.selectedVariant)||void 0===o?void 0:o.id,price:null==a?void 0:a.id,quantity:1}}):checkoutState.checkout=await addLineItem({checkout:checkoutState.checkout,data:{variant:null===(r=this.selectedVariant)||void 0===r?void 0:r.id,price:null==a?void 0:a.id,quantity:1}}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}}componentWillLoad(){this.removeListener=onChange("checkout",(()=>{var t,i,e;const o=this.lineItem();this.selectedVariant=null==o?void 0:o.variant,this.selectedPrice=null==o?void 0:o.price,this.option1=null===(t=null==o?void 0:o.variant)||void 0===t?void 0:t.option_1,this.option2=null===(i=null==o?void 0:o.variant)||void 0===i?void 0:i.option_2,this.option3=null===(e=null==o?void 0:o.variant)||void 0===e?void 0:e.option_3}))}disconnectedCallback(){this.removeListener()}lineItem(){var t;return getLineItemByProductId(null===(t=this.product)||void 0===t?void 0:t.id)}hasVariants(){var t,i,e;return(null===(e=null===(i=null===(t=this.product)||void 0===t?void 0:t.variants)||void 0===i?void 0:i.data)||void 0===e?void 0:e.length)>0}render(){var t,i,e,o,r;return h("sc-form-control",{key:"74f2ab18025f2d4c607b832818ad8a566b6c6051",class:"sc-checkout-product-price-variant-selector",label:this.selectorTitle},(this.product.variant_options.data||[]).map((({name:t,values:i},e)=>h("sc-form-control",{label:t},h("div",{class:"sc-checkout-product-price-variant-selector__pills-wrapper"},(i||[]).map((i=>{const o=[e+1,i,{...this.option1?{option_1:this.option1}:{},...this.option2?{option_2:this.option2}:{},...this.option3?{option_3:this.option3}:{}},this.product],r=isProductVariantOptionSoldOut.apply(void 0,o)||isProductVariantOptionMissing.apply(void 0,o);return h("sc-pill-option",{isUnavailable:r,isSelected:this[`option${e+1}`]===i,onClick:()=>this[`option${e+1}`]=i},h("span",{"aria-hidden":"true"},i),h("sc-visually-hidden",null,sprintf(__("Select %s: %s","surecart"),t,i),r&&h(Fragment,null," ",__("(option unavailable)","surecart"))))})))))),(null===(e=null===(i=null===(t=this.product)||void 0===t?void 0:t.prices)||void 0===i?void 0:i.data)||void 0===e?void 0:e.length)>1&&h("sc-form-control",{key:"83e5beeaae1f7213af10131ab5a3087688c54002",label:(null===(o=this.product.variant_options.data)||void 0===o?void 0:o.length)?this.label:null},h("sc-choices",{key:"c84eb423473a4cafd097718c7577166f9f72f31c"},(this.product.prices.data||[]).sort(((t,i)=>(null==t?void 0:t.position)-(null==i?void 0:i.position))).map((t=>{var i,e,o;return h("sc-price-choice-container",{required:!0,price:t,label:(null==t?void 0:t.name)||(null===(i=this.product)||void 0===i?void 0:i.name),checked:(null===(o=null===(e=this.lineItem())||void 0===e?void 0:e.price)||void 0===o?void 0:o.id)===(null==t?void 0:t.id),onScChange:i=>{i.target.checked&&(this.selectedPrice=t)}})})))),h("input",{key:"fd9b4567e3423a4308ff42a31789ff02422fc4ba",class:"sc-checkout-product-price-variant-selector__hidden-input",ref:t=>this.input=t,value:null===(r=this.selectedVariant)||void 0===r?void 0:r.id}))}static get is(){return"sc-checkout-product-price-variant-selector"}static get originalStyleUrls(){return{$:["sc-checkout-product-price-variant-selector.scss"]}}static get styleUrls(){return{$:["sc-checkout-product-price-variant-selector.css"]}}static get properties(){return{product:{type:"unknown",mutable:!1,complexType:{original:"Product",resolved:"Product",references:{Product:{location:"import",path:"../../../../types",id:"src/types.ts::Product"}}},required:!1,optional:!1,docs:{tags:[],text:"The product."}},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The label for the price."},attribute:"label",reflect:!1},selectorTitle:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The title for price and variant selections"},attribute:"selector-title",reflect:!1}}}static get states(){return{selectedVariant:{},selectedPrice:{},option1:{},option2:{},option3:{}}}static get methods(){return{reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<boolean>"},docs:{text:"",tags:[]}}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"option1",methodName:"handleOptionChange"},{propName:"option2",methodName:"handleOptionChange"},{propName:"option3",methodName:"handleOptionChange"},{propName:"selectedVariant",methodName:"updateLineItems"},{propName:"selectedPrice",methodName:"updateLineItems"}]}}