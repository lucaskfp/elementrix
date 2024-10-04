import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("et-accordion-item-panel")
export class AccordionItemPanel extends LitElement {
	static styles = css`
		:host {
         display: block
		}
	`;

	render() {
		return html`
			<slot></slot>
		`;
	}

	createRenderRoot() {
		const renderRoot = super.createRenderRoot();
		this.setAttribute("slot", "panel");
		this.setAttribute("role", "region");
		return renderRoot;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"et-accordion-item-panel": AccordionItemPanel;
	}
}
