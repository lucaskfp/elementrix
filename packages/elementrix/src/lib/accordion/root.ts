import { LitElement, css, html } from "lit";
import {
	customElement,
	property,
	queryAssignedElements,
} from "lit/decorators.js";
import type { AccordionItem } from "./item";

@customElement("et-accordion")
export class AccordionRoot extends LitElement {
	@property({ type: Boolean }) singleOpen = false;

	@queryAssignedElements({
		selector: "et-accordion-item",
	})
	_items!: NodeListOf<AccordionItem>;

	static styles = css`
		:host {
            display: block;
		}
	`;

	render() {
		return html`
				<slot></slot>
		`;
	}

	closeOtherItems(except: AccordionItem) {
		for (const item of this._items) {
			if (item !== except) {
				item.open = false;
			}
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"et-accordion": AccordionRoot;
	}
}
