import { html } from "std/dom";

export const component = (question) => {
  return html`
    <bubble>${question.content}</bubble>
  `;
};
