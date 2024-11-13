import{h}from"@stencil/core";export class ScHeading{constructor(){this.size="medium"}render(){return h("div",{key:"5c4f4a709283b693c9b1ed65fb9225c7941b01c5",part:"base",class:{heading:!0,"heading--small":"small"===this.size,"heading--medium":"medium"===this.size,"heading--large":"large"===this.size}},h("div",{key:"a7cba0a1e0bf66c6b051437fd5e60cfc72523b24",class:{heading__text:!0}},h("div",{key:"57608f378899490eb0102dcb302714ed9cd0880f",class:"heading__title",part:"title"},h("slot",{key:"16ab29024968653c888832b2931b9730740028d7"})),h("div",{key:"b43f7c65bc9869afdf864e2f67e958cbdca94695",class:"heading__description",part:"description"},h("slot",{key:"ed06ac76e974ed5fe888be883806da8351d881f8",name:"description"}))),h("slot",{key:"0294ab027665f0d4d2fe14aa1ba4a27f0ff4d658",name:"end"}))}static get is(){return"sc-heading"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-heading.scss"]}}static get styleUrls(){return{$:["sc-heading.css"]}}static get properties(){return{size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"size",reflect:!1,defaultValue:"'medium'"}}}static get elementRef(){return"el"}}