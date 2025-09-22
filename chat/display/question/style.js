import { css } from "std/dom";

export const style = () => {
  return css`
    :host {
      box-sizing: border-box;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      justify-content: flex-end;
      line-height: var(--line-height-lg);
      margin: 0;
      padding: 0;
      white-space: pre-wrap;
      width: 100%;
      word-wrap: break-word;
    }

    bubble {
      background: var(--color-pure-white);
      border-radius: var(--border-radius-md);
      border-bottom-right-radius: var(--border-radius-none);
      box-shadow: var(--shadow-level-1);
      color: var(--color-master-dark);
      display: inline-block;
      max-width: 75%;
      width: auto;
      margin-left: auto;
      padding: var(--spacing_inset-nano) var(--spacing_inset-xs);

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    }
  `;
};
