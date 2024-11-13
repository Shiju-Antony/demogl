import{h,Host}from"@stencil/core";import{sizeImage,getFeaturedProductMediaAttributes}from"../../../../functions/media";import{applyFilters}from"@wordpress/hooks";export class ScProductItemImage{constructor(){this.product=void 0,this.sizing=void 0}getSrc(){var t,e,i,r,o,d,s,c,u,l,a;return(null===(e=null===(t=this.product)||void 0===t?void 0:t.featured_product_media)||void 0===e?void 0:e.url)?null===(r=null===(i=this.product)||void 0===i?void 0:i.featured_product_media)||void 0===r?void 0:r.url:(null===(s=null===(d=null===(o=this.product)||void 0===o?void 0:o.featured_product_media)||void 0===d?void 0:d.media)||void 0===s?void 0:s.url)?sizeImage(null===(l=null===(u=null===(c=this.product)||void 0===c?void 0:c.featured_product_media)||void 0===u?void 0:u.media)||void 0===l?void 0:l.url,applyFilters("surecart/product-list/media/size",900)):`${null===(a=window.scData)||void 0===a?void 0:a.plugin_url}/images/placeholder.jpg`}render(){const{alt:t,title:e}=getFeaturedProductMediaAttributes(this.product);return h(Host,{key:"68eb931f6cd377b34fac464acc54dfb6c6bf8356",style:{borderStyle:"none"}},h("div",{key:"d01bdf8272b12817e2a26062f228d241d9fba232",class:{"product-img":!0,is_contained:"contain"===this.sizing,is_covered:"cover"===this.sizing}},this.getSrc()?h("img",{src:this.getSrc(),alt:t,...e?{title:e}:{}}):h("div",{class:"product-img_placeholder"})))}static get is(){return"sc-product-item-image"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-product-item-image.scss"]}}static get styleUrls(){return{$:["sc-product-item-image.css"]}}static get properties(){return{product:{type:"unknown",mutable:!1,complexType:{original:"Product",resolved:"Product",references:{Product:{location:"import",path:"../../../../types",id:"src/types.ts::Product"}}},required:!1,optional:!1,docs:{tags:[],text:""}},sizing:{type:"string",mutable:!1,complexType:{original:"'cover' | 'contain'",resolved:'"contain" | "cover"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"sizing",reflect:!1}}}}