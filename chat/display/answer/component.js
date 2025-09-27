import { html } from "@std/dom";

export const component = (answer) => {
  return html`${answer.content}`;
};
