import { css } from "@bot/std/dom";
import background from "./background.png";

export const style = () => {
  return css`
    :host {
      background: var(--color-master-lightest);
      background: linear-gradient(135deg, var(--color-master-lightest) 50%, var(--color-master-lighter) 100%);
      border: var(--border-width-thin) solid var(--color-master-light);
      border-radius: var(--border-radius-md);
      bottom: var(--spacing-xxs);
      box-shadow: var(--shadow-level-3);
      box-sizing: border-box;
      display: none;
      flex-direction: column;
      height: 620px;
      position: fixed;
      right: var(--spacing-xxs);
      transition: all 0.2s ease-out;
      width: 340px;

      chat-icon {
        cursor: pointer;
      }
    }

    :host(:state(opened)) {
      display: flex;

      [use="collapse_content"] {
        display: none;
      }
    }

    :host(:state(expanded)) {
      display: flex;
      height: 780px;
      width: 560px;

      [use="expand_content"] {
        display: none;
      }
    }
  `;
};
