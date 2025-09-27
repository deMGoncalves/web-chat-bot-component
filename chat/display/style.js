import { css } from "@std/dom";

export const style = () => {
  return css`
    :host {
      flex: 1 1 auto;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      height: 100%;
      min-height: 0;
      padding: var(--spacing_inset-xs);
      overflow-y: auto;
      overscroll-behavior: contain;
      scroll-behavior: smooth;
      touch-action: pan-y;
      width: 100%;
    }
  `;
};
