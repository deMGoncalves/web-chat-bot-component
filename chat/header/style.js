import { css } from "@bot/std/dom";

export const style = () => {
  return css`
    :host {
      align-items: center;
      background-color: var(--color-master-lightest);
      border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
      box-sizing: border-box;
      color: var(--color-master-dark);
      display: flex;
      gap: var(--spacing_inset-xs);
      height: 56px;
      justify-content: space-between;
      padding: var(--spacing_inset-xs);

      h1 {
        color: var(--color-master-darkest);
        font-family: var(--font-family-highlight);
        font-size: var(--font-size-sx);
        font-weight: var(--font-weight-regular);
      }

      actions {
        display: flex;
        gap: var(--spacing_inset-xs);
      }
    }
  `;
};
