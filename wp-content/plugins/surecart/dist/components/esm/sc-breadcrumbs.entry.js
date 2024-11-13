import { r as registerInstance, h, F as Fragment, a as getElement } from './index-745b6bec.js';

const scBreadcrumbsCss = ":host{display:block}.breadcrumb{display:flex;align-items:center;flex-wrap:wrap}";
const ScBreadcrumbsStyle0 = scBreadcrumbsCss;

const ScBreadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = 'Breadcrumb';
    }
    // Generates a clone of the separator element to use for each breadcrumb item
    getSeparator() {
        const slotted = this.el.shadowRoot.querySelector('slot[name=separator]');
        const separator = slotted.assignedElements({ flatten: true })[0];
        // Clone it, remove ids, and slot it
        const clone = separator.cloneNode(true);
        [clone, ...clone.querySelectorAll('[id]')].forEach(el => el.removeAttribute('id'));
        clone.slot = 'separator';
        return clone;
    }
    handleSlotChange() {
        const slotted = this.el.shadowRoot.querySelector('.breadcrumb slot');
        const items = slotted.assignedElements().filter(node => {
            return node.nodeName === 'CE-BREADCRUMB';
        });
        items.forEach((item, index) => {
            // Append separators to each item if they don't already have one
            const separator = item.querySelector('[slot="separator"]');
            if (separator === null) {
                item.append(this.getSeparator());
            }
            // The last breadcrumb item is the "current page"
            if (index === items.length - 1) {
                item.setAttribute('aria-current', 'page');
            }
            else {
                item.removeAttribute('aria-current');
            }
        });
    }
    render() {
        return (h(Fragment, { key: '4697a760a225f46ae1c1443db465700ee354b24b' }, h("nav", { key: '816ec0970aeae38e88481805e11fefb44eb71cd0', part: "base", class: "breadcrumb", "aria-label": this.label }, h("slot", { key: 'be7c1cf912c27728e5fa5a27eb0033381e260960', onSlotchange: () => this.handleSlotChange() })), h("div", { key: '47590415fe474d485f2b95ffc22bb613596d626c', part: "separator", hidden: true, "aria-hidden": "true" }, h("slot", { key: '85f8f4e26b90ca738f0a8e77a6cc8fdfa3a8c005', name: "separator" }, h("sc-icon", { key: '77dd9d0df730bebf2344746ee874236e56d990b2', name: "chevron-right" })))));
    }
    get el() { return getElement(this); }
};
ScBreadcrumbs.style = ScBreadcrumbsStyle0;

export { ScBreadcrumbs as sc_breadcrumbs };

//# sourceMappingURL=sc-breadcrumbs.entry.js.map