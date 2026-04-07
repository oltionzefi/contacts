/**
 * Contacts App — Custom Element
 *
 * Register the React app as a <contacts-app> web component.
 * Uses light DOM so FluentUI's CSS-in-JS (mergeStyleSets) works correctly.
 *
 * Usage:
 *   <contacts-app style="height: 600px; width: 100%;"></contacts-app>
 *
 * In an iframe, point src at the built index.html.
 */
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';
// Import global styles so they apply when used as standalone web component
import './index.css';

class ContactsApp extends HTMLElement {
	private _root: Root | undefined;

	connectedCallback(): void {
		const mount = document.createElement('div');
		mount.style.cssText =
			'display:flex;flex-direction:column;height:100%;width:100%;';
		this.appendChild(mount);
		this._root = createRoot(mount);
		this._root.render(React.createElement(App));
	}

	disconnectedCallback(): void {
		// Defer unmount so React can clean up async effects
		setTimeout(() => this._root?.unmount(), 0);
	}
}

if (!customElements.get('contacts-app')) {
	customElements.define('contacts-app', ContactsApp);
}

export { ContactsApp };
