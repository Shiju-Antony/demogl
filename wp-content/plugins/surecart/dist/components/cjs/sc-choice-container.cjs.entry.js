'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const formData = require('./form-data-0da9940f.js');
const pageAlign = require('./page-align-5a2ab493.js');

const scChoiceContainerCss = ":host{display:flex;flex-direction:column;align-items:stretch;justify-content:stretch;min-width:0;align-self:stretch;height:100%}[hidden]{border:0 !important;clip:rect(0 0 0 0) !important;height:1px !important;margin:-1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;width:1px !important}.choice{background:var(--sc-choice-background-color);font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);user-select:none;border:solid var(--sc-choice-border-width, var(--sc-input-border-width)) var(--sc-choice-border-color, var(--sc-input-border-color));border-radius:var(--sc-choice-border-radius, var(--sc-input-border-radius-large));box-shadow:var(--sc-choice-box-shadow);cursor:pointer;padding:var(--sc-choice-padding-top, 1.3em) var(--sc-choice-padding-right, 1.1em) var(--sc-choice-padding-bottom, 1.3em) var(--sc-choice-padding-left, 1.1em);position:relative;text-decoration:none;color:var(--sc-choice-text-color, var(--sc-input-color));height:100%;transition:background-color 150ms ease, border-color 150ms ease, color 150ms ease, box-shadow 150ms ease;box-sizing:border-box}.choice--is-rtl{text-align:right}.choice__content{cursor:pointer;display:flex;align-items:center;gap:0.75em;height:100%}.choice--checked{border-color:var(--sc-color-primary-500);box-shadow:0 0 0 1px var(--sc-color-primary-500);z-index:1}.choice__title{display:inline-block;font-weight:var(--sc-input-label-font-weight);font-size:var(--sc-input-label-font-size-medium)}.choice--size-small{padding:0.75em 0.9em}.choice--size-large{padding:1.3em 1.1em}.choice__icon{display:inline-flex;width:var(--sc-radio-size);height:var(--sc-radio-size)}.choice__icon svg{width:100%;height:100%}.choice__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;border:solid var(--sc-input-border-width) var(--sc-input-border-color);background-color:var(--sc-input-background-color);color:transparent;transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.choice__control.choice__radio{width:var(--sc-radio-size);height:var(--sc-radio-size);border-radius:50%}.choice__control.choice__checkbox{width:var(--sc-toggle-size);height:var(--sc-toggle-size);border-radius:4px}.choice__control input[type=radio],.choice__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.choice:not(.choice--checked):not(.choice--disabled) .choice__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.choice.choice--focused:not(.choice--checked):not(.choice--disabled) .choice__control{border-color:var(--var-sc-checked-focus-border-color, var(--sc-input-background-color));background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-primary-500)}.choice.choice--focused:not(.choice--checked):not(.choice--disabled){outline-style:solid;outline-color:var(--sc-color-primary-500);outline-width:var(--sc-focus-ring-width);outline-offset:2px}.choice--checked .choice__control{color:var(--var-sc-checked-color, var(--sc-input-background-color));border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.choice.choice--checked:not(.choice--disabled) .choice__control:hover{border-color:var(--var-sc-checked-hover-radio-border-color, var(--sc-input-background-color));background-color:var(--sc-color-primary-500)}.choice.choice--checked:not(.choice--disabled).choice--focused .choice__control{border-color:var(--var-sc-checked-focus-radio-border-color, var(--sc-input-background-color));background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.choice--disabled{opacity:0.5;cursor:not-allowed}.choice:not(.choice--checked) svg circle{opacity:0}.choice__label{width:100%;line-height:1;user-select:none}.choice--layout-columns .choice__label{display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.5em}.choice--layout-columns .choice__price{text-align:right;margin:0;display:flex;flex-direction:column;gap:var(--sc-spacing-xx-small)}.choice__description{display:inline-block;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-medium)}.choice__label-text{display:flex;flex-direction:column;justify-content:center;gap:0.2em;flex:1}.choice__price{display:block}";
const ScChoiceContainerStyle0 = scChoiceContainerCss;

let id = 0;
const ScChoiceContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scBlur = index.createEvent(this, "scBlur", 7);
        this.scChange = index.createEvent(this, "scChange", 7);
        this.scFocus = index.createEvent(this, "scFocus", 7);
        this.inputId = `choice-container-${++id}`;
        this.labelId = `choice-container-label-${id}`;
        this.hasFocus = false;
        this.name = undefined;
        this.size = 'medium';
        this.value = undefined;
        this.type = 'radio';
        this.disabled = false;
        this.checked = false;
        this.required = false;
        this.invalid = false;
        this.showControl = true;
        this.role = undefined;
    }
    /** Simulates a click on the choice. */
    async triggerClick() {
        this.input.click();
    }
    async triggerFocus() {
        this.input.focus();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    async reportValidity() {
        this.invalid = !this.input.checkValidity();
        if (this.required) {
            const choices = this.getAllChoices();
            if (!choices.some(c => c.checked)) {
                this.input.setCustomValidity(this.type === 'radio' ? wp.i18n.__('Please choose one.', 'surecart') : wp.i18n.__('Please choose at least one.', 'surecart'));
                this.invalid = !this.input.checkValidity();
            }
            else {
                this.input.setCustomValidity('');
                this.invalid = !this.input.checkValidity();
            }
        }
        return this.input.reportValidity();
    }
    handleCheckedChange() {
        this.input.setCustomValidity('');
        if (this.type === 'radio' && this.checked) {
            this.getSiblingChoices().map(choice => (choice.checked = false));
        }
        this.input.checked = this.checked;
    }
    handleBlur() {
        this.hasFocus = false;
        this.scBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.scFocus.emit();
    }
    /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
    async setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
    }
    getAllChoices() {
        const choiceGroup = this.el.closest('sc-choices') || this.el.parentElement;
        // Radios must be part of a radio group
        if (!choiceGroup) {
            return [];
        }
        return [...choiceGroup.querySelectorAll('sc-choice-container, sc-choice')];
    }
    getSiblingChoices() {
        return this.getAllChoices().filter(choice => choice !== this.el);
    }
    handleKeyDown(event) {
        if (event.target.contentEditable === 'true')
            return;
        // On arrow key press.
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
            const choices = this.getAllChoices().filter(choice => !choice.disabled);
            const incr = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
            let index = choices.indexOf(this.el) + incr;
            if (index < 0)
                index = choices.length - 1;
            if (index > choices.length - 1)
                index = 0;
            choices[index].triggerFocus();
            choices[index].checked = true;
            event.preventDefault();
        }
        // On space key press select the choice like handle mouse click.
        if (event.key === ' ') {
            event.preventDefault();
            this.checked = true;
            this.scChange.emit(this.input.checked);
        }
    }
    componentDidLoad() {
        this.formController = new formData.FormSubmitController(this.el, {
            value: (control) => (control.checked ? control.value : undefined),
        }).addFormData();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
    }
    handleClickEvent() {
        if (this.type === 'checkbox') {
            this.checked = !this.checked;
            this.scChange.emit(this.input.checked);
        }
        else if (!this.checked) {
            this.checked = true;
            this.scChange.emit(this.input.checked);
        }
    }
    render() {
        return (index.h("div", { key: 'a06564883b056ca07049f6d8396fac233b8253d9', part: "base", class: {
                'choice': true,
                'choice--checked': this.checked,
                'choice--disabled': this.disabled,
                'choice--focused': this.hasFocus,
                'choice--is-rtl': pageAlign.isRtl(),
                [`choice--size-${this.size}`]: true,
            }, role: "radio", "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', onKeyDown: e => this.handleKeyDown(e) }, index.h("slot", { key: 'cf4db18f5538f393bd37d7108aa7686d0277e5e7', name: "header" }), index.h("div", { key: '63a3354c9b6bf123a67e10ee6ed9ac24393b93e7', class: "choice__content", part: "content" }, index.h("span", { key: '3e8f750be28df707d7b7a10e8bfbc184924d415f', part: "control", class: {
                choice__control: true,
                choice__checkbox: this.type === 'checkbox',
                choice__radio: this.type === 'radio',
            }, hidden: !this.showControl }, index.h("span", { key: '3ada51909a21320e270f5397b1e697d38c75ec0a', part: "checked-icon", class: "choice__icon" }, this.type === 'checkbox' ? (index.h("svg", { viewBox: "0 0 16 16" }, index.h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round" }, index.h("g", { stroke: "currentColor", "stroke-width": "2" }, index.h("g", { transform: "translate(3.428571, 3.428571)" }, index.h("path", { d: "M0,5.71428571 L3.42857143,9.14285714" }), index.h("path", { d: "M9.14285714,0 L3.42857143,9.14285714" })))))) : (index.h("svg", { viewBox: "0 0 16 16" }, index.h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, index.h("g", { fill: "currentColor" }, index.h("circle", { cx: "8", cy: "8", r: "3.42857143" })))))), index.h("input", { key: 'da0dc17a1818c39d23c1fb40f67c5aee33ab738c', id: this.inputId, ref: el => (this.input = el), type: this.type, name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-labelledby": this.labelId, tabindex: "0",
            // required={this.required}
            onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus(), onChange: () => this.handleClickEvent(), role: this.role })), index.h("label", { key: '792e6a71b48b52fa95348ed56f109423edf2df38', part: "label", id: this.labelId, class: "choice__label" }, index.h("slot", { key: '7ee0c9b88f9adaf66fd96ee25d135e4d2b377650' })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
ScChoiceContainer.style = ScChoiceContainerStyle0;

exports.sc_choice_container = ScChoiceContainer;

//# sourceMappingURL=sc-choice-container.cjs.entry.js.map