"use strict";const currency=require("./currency-71fce0f0.js"),convertAmount=(r,e)=>currency.zeroDecimalCurrencies.includes(e)?r:r/100,getHumanDiscount=r=>(null==r?void 0:r.amount_off)&&(null==r?void 0:r.currency)?getFormattedPrice({amount:r.amount_off,currency:r.currency}):(null==r?void 0:r.percent_off)?wp.i18n.sprintf(wp.i18n.__("%1d%% off","surecart"),0|r.percent_off):"",getFormattedPrice=({amount:r,currency:e})=>{const n=convertAmount(r,e);return`${new Intl.NumberFormat(void 0,{style:"currency",currency:e}).format(parseFloat(n.toFixed(2)))}`},getCurrencySymbol=(r="usd")=>{var e;return null===(e=new Intl.NumberFormat(void 0,{style:"currency",currency:r}).formatToParts().find((r=>"currency"===r.type)))||void 0===e?void 0:e.value},translateInterval=(r,e,n=wp.i18n.__("every","surecart"),t=wp.i18n.__("once","surecart"),a=!1)=>{switch(e){case"day":return`${n} ${wp.i18n.sprintf(a?wp.i18n._n("%d day","%d days",r,"surecart"):wp.i18n._n("day","%d days",r,"surecart"),r)}`;case"week":return`${n} ${wp.i18n.sprintf(a?wp.i18n._n("%d week","%d weeks",r,"surecart"):wp.i18n._n("week","%d weeks",r,"surecart"),r)}`;case"month":return`${n} ${wp.i18n.sprintf(a?wp.i18n._n("%d month","%d months",r,"surecart"):wp.i18n._n("month","%d months",r,"surecart"),r)}`;case"year":return`${n} ${wp.i18n.sprintf(a?wp.i18n._n("%d year","%d years",r,"surecart"):wp.i18n._n("year","%d years",r,"surecart"),r)}`;default:return t}},translateAbbreviatedInterval=(r,e,n=wp.i18n.__("once","surecart"),t=!1)=>{switch(e){case"day":return` / ${wp.i18n.sprintf(t?wp.i18n._n("%d day","%d days",r,"surecart"):wp.i18n._n("day","%d days",r,"surecart"),r)}`;case"week":return` / ${wp.i18n.sprintf(t?wp.i18n._n("%d wk","%d wks",r,"surecart"):wp.i18n._n("wk","%d wks",r,"surecart"),r)}`;case"month":return` / ${wp.i18n.sprintf(t?wp.i18n._n("%d mo","%d months",r,"surecart"):wp.i18n._n("mo","%d mos",r,"surecart"),r)}`;case"year":return` / ${wp.i18n.sprintf(t?wp.i18n._n("%d yr","%d yrs",r,"surecart"):wp.i18n._n("yr","%d yrs",r,"surecart"),r)}`;default:return n}},intervalString=(r,e={})=>{if(!r)return"";const{showOnce:n,labels:t,abbreviate:a}=e,{interval:i=wp.i18n.__("every","surecart")}=t||{};return`${intervalCountString(r,i,n?wp.i18n.__("once","surecart"):"",a)} ${periodCountString(r,a)}`},intervalCountString=(r,e,n=wp.i18n.__("once","surecart"),t=!1)=>r.recurring_interval_count&&r.recurring_interval&&1!==(null==r?void 0:r.recurring_period_count)?t?translateAbbreviatedInterval(r.recurring_interval_count,r.recurring_interval,n):translateInterval(r.recurring_interval_count,r.recurring_interval,` ${e}`,n):"",periodCountString=(r,e=!1)=>(null==r?void 0:r.recurring_period_count)&&1!==(null==r?void 0:r.recurring_period_count)?e?`x ${r.recurring_period_count}`:` (${wp.i18n.sprintf(wp.i18n._n("%d payment","%d payments",r.recurring_period_count,"surecart"),r.recurring_period_count)})`:"",translateRemainingPayments=r=>wp.i18n.sprintf(wp.i18n._n("%d payment remaining","%d payments remaining",r,"surecart"),r),productNameWithPrice=r=>{var e;return r?`${null===(e=null==r?void 0:r.product)||void 0===e?void 0:e.name} ${(null==r?void 0:r.name)?`— ${r.name}`:""}`:""},getHumanDiscountRedeemableStatus=r=>{switch(r){case"invalid":return wp.i18n.__("Not valid","surecart");case"expired":return wp.i18n.__("Expired","surecart");case"gone":return wp.i18n.__("Not available","surecart");case"less_than_min_subtotal_amount":return wp.i18n.__("Minimum not met","surecart");case"greater_than_max_subtotal_amount":return wp.i18n.__("Order too large","surecart");case"not_applicable":return wp.i18n.__("Product(s) not eligible","surecart");case"not_applicable_to_customer":return wp.i18n.__("Not eligible","surecart");case"":return"";default:return wp.i18n.__("Not redeemable","surecart")}};exports.getCurrencySymbol=getCurrencySymbol,exports.getFormattedPrice=getFormattedPrice,exports.getHumanDiscount=getHumanDiscount,exports.getHumanDiscountRedeemableStatus=getHumanDiscountRedeemableStatus,exports.intervalString=intervalString,exports.productNameWithPrice=productNameWithPrice,exports.translateInterval=translateInterval,exports.translateRemainingPayments=translateRemainingPayments;