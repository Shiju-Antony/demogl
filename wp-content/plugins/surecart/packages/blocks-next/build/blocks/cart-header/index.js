!function(){"use strict";var e,t={6862:function(e,t,r){var n=window.wp.blocks,a=window.React,o=r.n(a),l=window.wp.primitives,c=(0,a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(l.Path,{d:"M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})),i=window.wp.i18n,u=window.wp.components,s=window.wp.blockEditor,d=({attributes:e})=>{if(!e)return{};const{border:t,textColor:r,backgroundColor:n,padding:a}=e;return{...t?{borderBottom:"var(--sc-drawer-border)"}:{},...n?{backgroundColor:n}:{},...r?{color:r,"--sc-input-label-color":r}:{},...a?.top?{paddingTop:a?.top}:{},...a?.bottom?{paddingBottom:a?.bottom}:{},...a?.left?{paddingLeft:a?.left}:{},...a?.right?{paddingRight:a?.right}:{}}};function m(e){let{name:t,...r}=e;const[n,l]=(0,a.useState)(null),c=window?.scData?.plugin_url+"/dist/icon-assets";if((0,a.useEffect)((()=>{fetch(`${c}/${t}.svg`).then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"image/svg+xml");l(t?.documentElement)})).catch(console.error)}),[t]),!n)return null;const i={...Array.from(n.attributes).reduce(((e,t)=>(e[t.name]=t.value,e)),{}),...r};return o().createElement(n.tagName,{...i,dangerouslySetInnerHTML:{__html:n.innerHTML}})}var g=e=>{let{attributes:t,setAttributes:r}=e;const{backgroundColor:n,textColor:a,padding:o,border:l}=t;return React.createElement(React.Fragment,null,React.createElement(s.PanelColorSettings,{title:(0,i.__)("Color Settings"),colorSettings:[{value:n,onChange:e=>r({backgroundColor:e}),label:(0,i.__)("Background Color","surecart")},{value:a,onChange:e=>r({textColor:e}),label:(0,i.__)("Text Color","surecart")}]}),React.createElement(u.PanelBody,{title:(0,i.__)("Spacing","surecart")},React.createElement(u.__experimentalBoxControl,{label:(0,i.__)("Padding","surecart"),values:o,resetValues:{top:"1.25em",right:"1.25em",bottom:"1.25em",left:"1.25em"},onChange:e=>r({padding:e})})),React.createElement(u.PanelBody,{title:(0,i.__)("Border","surecart")},React.createElement(u.PanelRow,null,React.createElement(u.ToggleControl,{label:(0,i.__)("Bottom Border","surecart"),checked:l,onChange:e=>r({border:e})}))))},p=JSON.parse('{"UU":"surecart/slide-out-cart-header"}');(0,n.registerBlockType)(p.UU,{icon:c,edit:e=>{let{attributes:t,setAttributes:r}=e;const{text:n}=t,a=(0,s.useBlockProps)({style:d({attributes:t})});return React.createElement(React.Fragment,null,React.createElement(s.InspectorControls,null,React.createElement(g,{attributes:t,setAttributes:r}),React.createElement(u.PanelBody,null,React.createElement(u.TextControl,{label:(0,i.__)("Header Text"),value:n,onChange:e=>r({text:e})}))),React.createElement("div",a,React.createElement(m,{name:"arrow-right",class:"wp-block-surecart-slide-out-cart-header__close"}),React.createElement(s.RichText,{"aria-label":(0,i.__)("Header Text"),placeholder:(0,i.__)("Add a title…"),value:n,onChange:e=>r({text:e}),withoutInteractiveFormatting:!0,allowedFormats:["core/bold","core/italic"]}),React.createElement("div",{class:"sc-tag sc-tag--default"},"2")))}})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,a,o){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],a=e[s][1],o=e[s][2];for(var c=!0,i=0;i<r.length;i++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(c=!1,o<l&&(l=o));if(c){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={7241:0,8237:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,l=r[0],c=r[1],i=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(i)var s=i(n)}for(t&&t(r);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=n.O(void 0,[8237],(function(){return n(6862)}));a=n.O(a)}();