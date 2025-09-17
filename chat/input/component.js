import { html } from "@bot/std/dom";

export const component = () => {
  return html`
    <form>
      <textarea name="message" placeholder="Send a message..."></textarea>
      <button>
        <chat-icon use="arrow_upward" size="sm"></chat-icon>
      </button>
    </form>
  `;
};
