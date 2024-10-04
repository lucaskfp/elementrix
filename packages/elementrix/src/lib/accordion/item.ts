import { provide } from "@lit/context";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { createContext } from "@lit/context";

export const isItemOpenContext = createContext<boolean>("isItemOpenContext");

@customElement("et-accordion-item")
export class AccordionItem extends LitElement {
	constructor() {
		super();
		this.addEventListener("toggle", this._handleToggle);
	}

	@provide({ context: isItemOpenContext })
	@property({ type: Boolean, reflect: true })
	open = false;

	private _handleToggle() {
		const accordion = this.closest("et-accordion");

		if (accordion?.singleOpen) {
			accordion.closeOtherItems(this);
		}

		this.open = !this.open;
	}

	render() {
		return html`
				<slot name="header"></slot>
				${this.open ? html`<slot name="panel"></slot>` : ""}
		`;
	}

	static styles = css`
	:host {
		display: block;
	}
`;
}

declare global {
	interface HTMLElementTagNameMap {
		"et-accordion-item": AccordionItem;
	}
}
