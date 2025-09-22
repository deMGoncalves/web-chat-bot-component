import { css } from "std/dom";

export const style = () =>
  css`
    :host {
      box-sizing: border-box;
      position: fixed;
      bottom: var(--spacing-xxs);
      right: var(--spacing-xxs);
      z-index: 1000;
    }

    button {
      align-items: center;
      aspect-ratio: 1 / 1;
      background: var(--color-primary);
      border: none;
      border-radius: var(--border-radius-circular);
      box-shadow: var(--shadow-level-2);
      color: var(--color-pure-white);
      cursor: pointer;
      display: inline-flex;
      height: 42px;
      justify-content: center;
      transition: background 120ms ease-out, box-shadow 120ms ease-out;
      width: 42px;
    }

    button:hover {
      background: var(--color-primary-dark);
      box-shadow: var(--shadow-level-3);
    }
  `;
