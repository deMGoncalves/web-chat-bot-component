import { html } from "@std/dom";

export const component = () => {
  return html`
    <heading>
      <chat-icon use="smart_toy"></chat-icon>
      <h1>Bot Chat</h1>
    </heading>
    <actions>
      <slot></slot>
    </actions>
  `;
};
