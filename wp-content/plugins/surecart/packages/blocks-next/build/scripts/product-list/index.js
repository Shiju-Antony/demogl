import*as e from"@wordpress/interactivity";var t,r,n={d:function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},o=(t={getContext:function(){return e.getContext},getElement:function(){return e.getElement},store:function(){return e.store}},r={},n.d(r,t),r);const i=e=>e&&e instanceof window.HTMLAnchorElement&&e.href&&(!e.target||"_self"===e.target)&&e.origin===window.location.origin;let a=null;const{state:s}=(0,o.store)("surecart/product-list",{state:{loading:!1,searching:!1},actions:{*navigate(e){const{ref:t}=(0,o.getElement)(),r=t.closest("[data-wp-router-region]");if(i(t)&&(e=>!(0!==e.button||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented))(e)&&r){e.preventDefault();const{actions:n}=yield import("@wordpress/interactivity-router");s.loading=!0,yield n.navigate(t.href),s.loading=!1;const o=r.querySelector(".sc-product-item a[href]");o?.focus()}},*prefetch(){const{ref:e}=(0,o.getElement)();if(i(e)){const{actions:t}=yield import("@wordpress/interactivity-router");yield t.prefetch(e.href)}},*onSearchInput(e){e.preventDefault();const{value:t}=e.target,r=(0,o.getContext)();if(t===r.search)return;r.search=t,s.searching=!0,a?.();const{promise:n,resolve:i,reject:c}=Promise.withResolvers(),l=setTimeout(i,500);a=()=>{clearTimeout(l),c()};try{yield n}catch{return}const d=new URL(window.location.href);d.searchParams.delete(`${r.urlPrefix}-page`),t?d.searchParams.set(`${r.urlPrefix}-search`,t):d.searchParams.delete(`${r.urlPrefix}-search`),s.loading=!0,s.searching=!0;const{actions:u}=yield import("@wordpress/interactivity-router");u.navigate(d.href);const{products:g}=(0,o.getContext)(),h=new CustomEvent("scSearched",{detail:{searchString:t,searchResultCount:g?.length,searchResultIds:g?.map((e=>e.id))},bubbles:!0});document.dispatchEvent(h),s.loading=!1,s.searching=!1},*clearSearch(e){if("keydown"===e?.type&&!["Enter","Space"].includes(e.key))return!0;e.preventDefault();const t=(0,o.getContext)();t.search="",s.loading=!0,s.searching=!0;const r=new URL(window.location.href);r.searchParams.delete(`${t.urlPrefix}-page`),r.searchParams.delete(`${t.urlPrefix}-search`);const{actions:n}=yield import("@wordpress/interactivity-router");n.navigate(r.href),s.loading=!1,s.searching=!1}},callbacks:{*onChangeProducts(){(window?.dataLayer||window?.gtag)&&(yield import("@surecart/google-events")),window?.fbq&&(yield import("@surecart/facebook-events"));const{products:e}=(0,o.getContext)();document.dispatchEvent(new CustomEvent("scProductsViewed",{detail:{products:e,pageTitle:document.title},bubbles:!0}))},*prefetch(){const{url:e}=(0,o.getContext)(),{ref:t}=(0,o.getElement)();if(e&&i(t)){const{actions:e}=yield import("@wordpress/interactivity-router");yield e.prefetch(t.href)}}}});