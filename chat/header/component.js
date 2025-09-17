import { html } from "@bot/std/dom";

export const component = () => {
  return html`
    <h1>Bot Chat</h1>
    <actions>
      <slot></slot>
    </actions>
  `;
};
