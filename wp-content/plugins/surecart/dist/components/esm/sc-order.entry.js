import { r as registerInstance, h, F as Fragment, a as getElement } from './index-745b6bec.js';
import { a as apiFetch } from './fetch-2032d11d.js';
import { o as onFirstVisible } from './lazy-deb42890.js';
import { i as intervalString } from './price-d5770168.js';
import { f as formatTaxDisplay } from './tax-d4911dbc.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';
import './currency-a0c9bff4.js';

const scOrderCss = ":host{display:block}.order__row{padding:var(--sc-spacing-large);display:grid;gap:var(--sc-spacing-small)}";
const ScOrderStyle0 = scOrderCss;

const ScOrder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.orderId = undefined;
        this.customerIds = undefined;
        this.heading = undefined;
        this.order = undefined;
        this.purchases = undefined;
        this.loading = undefined;
        this.busy = undefined;
        this.error = undefined;
    }
    /** Only fetch if visible */
    componentDidLoad() {
        onFirstVisible(this.el, () => {
            this.fetchOrder();
            this.fetchDownloads();
        });
    }
    async fetchOrder() {
        try {
            this.loading = true;
            await this.getOrder();
        }
        catch (e) {
            console.error(this.error);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.loading = false;
        }
    }
    async fetchDownloads() {
        try {
            this.busy = true;
            this.purchases = (await apiFetch({
                path: addQueryArgs(`surecart/v1/purchases`, {
                    expand: ['product', 'product.downloads', 'download.media'],
                    order_ids: [this.orderId],
                    customer_ids: this.customerIds,
                    downloadable: true,
                }),
            }));
        }
        catch (e) {
            console.error(this.error);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.busy = false;
        }
    }
    /** Get order */
    async getOrder() {
        this.order = (await apiFetch({
            path: addQueryArgs(`surecart/v1/orders/${this.orderId}`, {
                expand: [
                    'checkout',
                    'checkout.line_items',
                    'line_item.price',
                    'line_item.fees',
                    'line_item.variant',
                    'variant.image',
                    'price.product',
                    'checkout.manual_payment_method',
                    'checkout.payment_method',
                    'checkout.selected_shipping_choice',
                    'shipping_choice.shipping_method',
                    'payment_method.card',
                    'payment_method.payment_instrument',
                    'payment_method.paypal_account',
                    'payment_method.bank_account',
                    'checkout.discount',
                    'discount.promotion',
                    'checkout.charge',
                ],
            }),
        }));
    }
    renderLoading() {
        return (h("sc-flex", { flexDirection: "column", style: { gap: '1em' } }, h("sc-skeleton", { style: { width: '20%', display: 'inline-block' } }), h("sc-skeleton", { style: { width: '60%', display: 'inline-block' } }), h("sc-skeleton", { style: { width: '40%', display: 'inline-block' } })));
    }
    renderEmpty() {
        return h("sc-empty", { icon: "shopping-bag" }, wp.i18n.__('Order not found.', 'surecart'));
    }
    renderContent() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.loading) {
            return this.renderLoading();
        }
        if (!((_a = this.order) === null || _a === void 0 ? void 0 : _a.id)) {
            return this.renderEmpty();
        }
        const checkout = (_b = this.order) === null || _b === void 0 ? void 0 : _b.checkout;
        const shippingMethod = (_c = checkout === null || checkout === void 0 ? void 0 : checkout.selected_shipping_choice) === null || _c === void 0 ? void 0 : _c.shipping_method;
        const shippingMethodName = shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.name;
        return (h(Fragment, null, (((_d = checkout === null || checkout === void 0 ? void 0 : checkout.line_items) === null || _d === void 0 ? void 0 : _d.data) || []).map(item => {
            var _a, _b, _c, _d, _e, _f, _g;
            return (h("sc-product-line-item", { key: item.id, image: item === null || item === void 0 ? void 0 : item.image, name: (_b = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.name, priceName: (_c = item === null || item === void 0 ? void 0 : item.price) === null || _c === void 0 ? void 0 : _c.name, variantLabel: ((item === null || item === void 0 ? void 0 : item.variant_options) || []).filter(Boolean).join(' / ') || null, editable: false, removable: false, quantity: item.quantity, amount: item.subtotal_amount, currency: (_d = item === null || item === void 0 ? void 0 : item.price) === null || _d === void 0 ? void 0 : _d.currency, trialDurationDays: (_e = item === null || item === void 0 ? void 0 : item.price) === null || _e === void 0 ? void 0 : _e.trial_duration_days, interval: intervalString(item === null || item === void 0 ? void 0 : item.price), scratchAmount: item === null || item === void 0 ? void 0 : item.scratch_amount, setupFeeTrialEnabled: (_f = item === null || item === void 0 ? void 0 : item.price) === null || _f === void 0 ? void 0 : _f.setup_fee_trial_enabled, fees: (_g = item === null || item === void 0 ? void 0 : item.fees) === null || _g === void 0 ? void 0 : _g.data }));
        }), h("sc-divider", { style: { '--spacing': 'var(--sc-spacing-x-small)' } }), h("sc-line-item", null, h("span", { slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), h("sc-format-number", { slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.subtotal_amount })), !!(checkout === null || checkout === void 0 ? void 0 : checkout.proration_amount) && (h("sc-line-item", null, h("span", { slot: "description" }, wp.i18n.__('Proration', 'surecart')), h("sc-format-number", { slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.proration_amount }))), !!(checkout === null || checkout === void 0 ? void 0 : checkout.applied_balance_amount) && (h("sc-line-item", null, h("span", { slot: "description" }, wp.i18n.__('Applied Balance', 'surecart')), h("sc-format-number", { slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.applied_balance_amount }))), !!(checkout === null || checkout === void 0 ? void 0 : checkout.discounts) && (h("sc-line-item", null, h("span", { slot: "description" }, wp.i18n.__('Discount', 'surecart')), h("sc-format-number", { slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.discounts }))), !!((_f = (_e = checkout === null || checkout === void 0 ? void 0 : checkout.discount) === null || _e === void 0 ? void 0 : _e.promotion) === null || _f === void 0 ? void 0 : _f.code) && (h("sc-line-item", null, h("span", { slot: "description" }, wp.i18n.__('Discount', 'surecart'), h("br", null), h("sc-tag", { type: "success" }, wp.i18n.__('Coupon:', 'surecart'), " ", (_h = (_g = checkout === null || checkout === void 0 ? void 0 : checkout.discount) === null || _g === void 0 ? void 0 : _g.promotion) === null || _h === void 0 ? void 0 :
            _h.code)), h("sc-format-number", { slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.discount_amount }))), !!(checkout === null || checkout === void 0 ? void 0 : checkout.shipping_amount) && (h("sc-line-item", null, h("span", { slot: "description" }, `${wp.i18n.__('Shipping', 'surecart')} ${shippingMethodName ? `(${shippingMethodName})` : ''}`), h("sc-format-number", { slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.shipping_amount }))), !!(checkout === null || checkout === void 0 ? void 0 : checkout.tax_amount) && (h("sc-line-item", null, h("span", { slot: "description" }, formatTaxDisplay(checkout === null || checkout === void 0 ? void 0 : checkout.tax_label), " (", checkout === null || checkout === void 0 ? void 0 :
            checkout.tax_percent, "%)"), h("sc-format-number", { slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.tax_amount }))), h("sc-divider", { style: { '--spacing': 'var(--sc-spacing-x-small)' } }), h("sc-line-item", { style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { slot: "title" }, wp.i18n.__('Total', 'surecart')), h("span", { slot: "price" }, h("sc-format-number", { type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.total_amount })), h("span", { slot: "currency" }, checkout === null || checkout === void 0 ? void 0 : checkout.currency)), (checkout === null || checkout === void 0 ? void 0 : checkout.amount_due) !== (checkout === null || checkout === void 0 ? void 0 : checkout.total_amount) && (h("sc-line-item", { style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { slot: "title" }, wp.i18n.__('Amount Due', 'surecart')), h("span", { slot: "price" }, h("sc-format-number", { type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.amount_due })), h("span", { slot: "currency" }, checkout === null || checkout === void 0 ? void 0 : checkout.currency))), !!(checkout === null || checkout === void 0 ? void 0 : checkout.charge) && (h("sc-line-item", { style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { slot: "title" }, wp.i18n.__('Amount Paid', 'surecart')), h("span", { slot: "price" }, h("sc-format-number", { type: "currency", currency: (_j = checkout === null || checkout === void 0 ? void 0 : checkout.charge) === null || _j === void 0 ? void 0 : _j.currency, value: ((_k = checkout === null || checkout === void 0 ? void 0 : checkout.charge) === null || _k === void 0 ? void 0 : _k.amount) ? ((_l = checkout === null || checkout === void 0 ? void 0 : checkout.charge) === null || _l === void 0 ? void 0 : _l.amount) - ((_m = checkout === null || checkout === void 0 ? void 0 : checkout.charge) === null || _m === void 0 ? void 0 : _m.refunded_amount) : 0 })), h("span", { slot: "currency" }, (_o = checkout === null || checkout === void 0 ? void 0 : checkout.charge) === null || _o === void 0 ? void 0 : _o.currency)))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        const checkout = (_a = this === null || this === void 0 ? void 0 : this.order) === null || _a === void 0 ? void 0 : _a.checkout;
        const manualPaymentMethod = checkout === null || checkout === void 0 ? void 0 : checkout.manual_payment_method;
        return (h("sc-spacing", { key: 'f30f303da962c74dd8063c735778d2382d47adff', style: { '--spacing': 'var(--sc-spacing-large)' } }, h("sc-dashboard-module", { key: 'f82144bdeb656fdec807316bebd148d916f85cf5', error: this.error }, h("span", { key: '4256723f791af274690abcd1fde4fb11326bfbef', slot: "heading" }, this.loading ? h("sc-skeleton", { style: { width: '120px' } }) : `#${(_b = this === null || this === void 0 ? void 0 : this.order) === null || _b === void 0 ? void 0 : _b.number}`), !this.loading && !(checkout === null || checkout === void 0 ? void 0 : checkout.live_mode) && (h("sc-tag", { key: '88ef8c8e577312aebcac6d6498459b283660c6bb', type: "warning", slot: "end" }, wp.i18n.__('Test Mode', 'surecart'))), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (h("sc-order-manual-instructions", { key: '6423a24c150df588af232cbdd9a6cdf93dd35269', manualPaymentTitle: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name, manualPaymentInstructions: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions })), h("sc-card", { key: '7a29107523ace5bff9680c4401317cff2d862485', "no-padding": !this.loading }, this.loading ? (this.renderLoading()) : (h(Fragment, null, h("sc-stacked-list", null, h("sc-stacked-list-row", { style: { '--columns': '2' } }, h("div", null, wp.i18n.__('Order Status', 'surecart')), h("sc-order-status-badge", { status: (_c = this === null || this === void 0 ? void 0 : this.order) === null || _c === void 0 ? void 0 : _c.status })), h("sc-stacked-list-row", { style: { '--columns': '2' } }, h("div", null, wp.i18n.__('Date', 'surecart')), h("sc-format-date", { type: "timestamp", date: (_d = this.order) === null || _d === void 0 ? void 0 : _d.created_at, month: "short", day: "numeric", year: "numeric" })), h("sc-stacked-list-row", { style: { '--columns': '2' } }, h("div", null, wp.i18n.__('Payment Method', 'surecart')), h("sc-payment-method", { paymentMethod: checkout === null || checkout === void 0 ? void 0 : checkout.payment_method })), h("div", { class: "order__row" }, this.renderContent())))))), ((_e = this.order) === null || _e === void 0 ? void 0 : _e.statement_url) && (h("sc-button", { key: 'f26b63dcf3c0776d09fc0176739d1b05bc84fc52', type: "primary", href: (_f = this.order) === null || _f === void 0 ? void 0 : _f.statement_url, target: "_blank" }, h("sc-icon", { key: '08c6716a5f39a255651bcf4e7b85ab3d00b36705', name: "inbox", slot: "prefix" }), wp.i18n.__('Download Receipt/Invoice', 'surecart'))), !!((_g = this.purchases) === null || _g === void 0 ? void 0 : _g.length) && h("sc-purchase-downloads-list", { key: '8d5532c9dc2dc55a61e5841604e764a31b7d80a3', heading: wp.i18n.__('Downloads', 'surecart'), purchases: this.purchases })));
    }
    get el() { return getElement(this); }
};
ScOrder.style = ScOrderStyle0;

export { ScOrder as sc_order };

//# sourceMappingURL=sc-order.entry.js.map