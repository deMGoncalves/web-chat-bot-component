import { css } from "std/dom";

export const style = () => {
  return css`
    :host {
      box-sizing: border-box;
      color: var(--color-master-dark);
      display: block;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      line-height: var(--line-height-lg);
      white-space: pre-wrap;
      width: 100%;
      word-wrap: break-word;

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    }
  `;
};
