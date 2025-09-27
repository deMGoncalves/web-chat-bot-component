import { css } from "@std/dom";

export const style = () =>
  css`
    :host {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      width: 100%;
    }

    textarea {
      background: var(--color-master-lightest);
      border: var(--border-width-hairline) solid var(--color-master-light);
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-level-1);
      box-sizing: border-box;
      color: var(--color-master-dark);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      height: 44px;
      line-height: var(--line-height-lg);
      max-height: 200px;
      overflow: hidden;
      padding: 11px var(--spacing_inset-xs);
      padding-right: 52px;
      resize: none;
      width: inherit;
    }

    textarea:active,
    textarea:focus,
    textarea:hover {
      outline: 0;
      border-color: var(--color-primary-light);
    }

    textarea::placeholder {
      color: var(--color-master);
    }
  `;
