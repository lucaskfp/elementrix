import { consume } from "@lit/context";
import { LitElement, type PropertyValues, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { isItemOpenContext } from "./item";

@customElement("et-accordion-item-header")
export class AccordionItemHeader extends LitElement {
	constructor() {
		super();
		this.addEventListener("click", this._handleHostClick);
	}

	@consume({ context: isItemOpenContext, subscribe: true })
	_isItemOpen = false;

	private _handleHostClick() {
		this.dispatchEvent(
			new CustomEvent("toggle", { bubbles: true, composed: true }),
		);
	}

	protected updated(_changedProperties: PropertyValues): void {
		this.setAttribute("aria-expanded", String(this._isItemOpen));
	}

	render() {
		return html`
			<slot></slot>
		`;
	}

	createRenderRoot() {
		const renderRoot = super.createRenderRoot();
		this.setAttribute("slot", "header");
		this.setAttribute("tabindex", "0");
		this.setAttribute("role", "button");

		this.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				this._handleHostClick();
			}
		});
		return renderRoot;
	}

	static styles = css`
	:host {
	 display: block;
	}
`;
}

declare global {
	interface HTMLElementTagNameMap {
		"et-accordion-item-header": AccordionItemHeader;
	}
}
