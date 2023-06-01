import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@material/mwc-icon';

/**
 * @slot action - May contain up to eight icon buttons.
 * @slot icon - If filled overrides the icon property.
 * @slot - The default slot will be rendered into the pane body in a single column.
 * @cssprop [--oscd-action-icon-theme-primary=--oscd-theme-primary] - Border and hover color.
 * @cssprop [--oscd-action-icon-theme-on-primary=--oscd-theme-on-primary] - Font color inside hover field.
 * @cssprop [--oscd-action-icon-theme-secondary=--oscd-theme-secondary] - Secondary border and hover color.
 * @cssprop [--oscd-action-icon-theme-on-surface=--oscd-theme-on-surface] - Icon and label color.
 * @cssprop [--oscd-action-icon-theme-font=--oscd-theme-font] - Font for label and hover text.
 *
 * @summary A responsive container rendering actions in a header.
 * @tag oscd-action-icon
 */
export class OscdActionIcon extends LitElement {
  /** caption text, displayed in the header */
  @property({ type: String })
  label?: string;
  /** icon name, displayed unless the "icon" slot is filled */
  @property({ type: String })
  icon?: string;
  /** color header with secondary theme color while focus is within */
  @property({ type: Boolean })
  secondary = false;
  /** highlight pane with dotted outline */
  @property({ type: Boolean })
  highlighted = false;
  /** disables CSS adoption to action buttons */
  @property({ type: Boolean })
  hideActions = false;

  async firstUpdated(): Promise<void> {
    this.tabIndex = 0;
  }

  private renderIcon(): TemplateResult {
    return html`<span>
      <slot name="icon"
        >${this.icon ? html`<mwc-icon>${this.icon}</mwc-icon>` : nothing}</slot
      ></span
    > `;
  }

  render(): TemplateResult {
    return html`<header>${this.label ?? nothing}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? nothing}</footer>`;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      outline: none;
    }

    section {
      align-self: center;
    }

    ::slotted([slot='icon']),
    mwc-icon {
      display: block;
      color: var(
        --oscd-action-icon-theme-on-surface,
        var(--oscd-theme-on-surface)
      );
      transition: transform 150ms linear, box-shadow 200ms linear;
      outline-color: var(
        --oscd-action-icon-theme-primary,
        var(--oscd-theme-primary)
      );
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      width: 64px;
      height: 64px;
      --mdc-icon-size: 64px;
    }

    :host([secondary]) ::slotted([slot='icon']),
    :host([secondary]) mwc-icon {
      outline-color: var(
        --oscd-action-icon-theme-secondary,
        var(--oscd-theme-secondary)
      );
    }

    :host([highlighted]) ::slotted([slot='icon']),
    :host([highlighted]) mwc-icon {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) ::slotted([slot='icon']),
    :host(:focus-within) mwc-icon {
      outline-style: solid;
      outline-width: 4px;
    }

    :host(:focus-within:not([hideActions])) ::slotted([slot='icon']),
    :host(:focus-within:not([hideActions])) mwc-icon {
      transform: scale(0.8);
      transition: all 250ms linear;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }

    ::slotted([slot='icon']:hover),
    mwc-icon:hover {
      outline-style: dashed;
      outline-width: 2px;
      transition: transform 200ms linear, box-shadow 250ms linear;
    }

    ::slotted([slot='action']) {
      color: var(
        --oscd-action-icon-theme-on-surface,
        var(--oscd-theme-on-surface)
      );
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
      position: absolute;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      margin-top: -56px;
      margin-left: 8px;
    }

    :host(:focus-within) ::slotted([slot='action']) {
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
      pointer-events: auto;
      opacity: 1;
    }

    :host(:focus-within) ::slotted([slot='action']:nth-of-type(1)) {
      transform: translate(0px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(2)) {
      transform: translate(0px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(3)) {
      transform: translate(52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(4)) {
      transform: translate(-52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(5)) {
      transform: translate(52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(6)) {
      transform: translate(-52px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(7)) {
      transform: translate(-52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(8)) {
      transform: translate(52px, 52px);
    }

    footer {
      color: var(
        --oscd-action-icon-theme-on-surface,
        var(--oscd-theme-on-surface)
      );
      font-family: var(--oscd-action-icon-theme-font, var(--oscd-theme-font));
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      text-align: center;
      align-self: center;
      max-width: 100%;
      direction: rtl;
    }

    header {
      color: var(
        --oscd-action-icon-theme-on-primary,
        var(--oscd-theme-on-primary)
      );
      background-color: var(
        --oscd-action-icon-theme-primary,
        var(--oscd-theme-primary)
      );
      font-family: var(--oscd-action-icon-theme-font, var(--oscd-theme-font));
      font-weight: 500;
      font-size: 1.2em;
      position: absolute;
      text-align: center;
      align-self: center;
      max-width: 100vw;
      padding: 4px 8px;
      border-radius: 4px;
      opacity: 0;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
    }

    :host([secondary]) header {
      background-color: var(
        --oscd-action-icon-theme-secondary,
        var(--oscd-theme-secondary)
      );
    }

    :host(:hover) header {
      position: absolute;
      opacity: 1;
      transform: translate(0, -40px);
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within) header {
      position: absolute;
      opacity: 1;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within:not([hideActions])) header {
      transform: translate(0, -80px);
    }

    :host(:focus-within[hideActions]) header {
      transform: translate(0, -40px);
    }
  `;
}
