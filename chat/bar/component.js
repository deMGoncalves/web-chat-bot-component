import { html } from "std/dom";

export const component = () => {
  return html`
    <form>
      <chat-input name="message"></chat-input>
      <button>
        <chat-icon use="arrow_upward" size="sm"></chat-icon>
      </button>
    </form>
  `;
};
