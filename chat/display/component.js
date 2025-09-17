import { html } from "@bot/std/dom";

export const component = (display) => {
  return html`
    <main>
      ${display.messages.map(
        (message) => html`
        <div>
          ${message}
        </div>
      `,
      )}
    </main>
  `;
};
