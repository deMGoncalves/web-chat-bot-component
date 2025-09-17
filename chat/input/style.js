import { css } from "@bot/std/dom";

export const style = () => {
  return css`
    :host {
      background-color: transparent;
      padding: 8px;

      form {
        position: relative;

        textarea {
          background: var(--color-master-lightest);
          border: var(--border-width-hairline) solid var(--color-master-light);
          border-radius: var(--border-radius-lg);
          box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 2px 0px;
          box-sizing: border-box;
          height: 48px;
          overflow: hidden;
          padding: var(--spacing_inset-xs);
          padding-right: 48px;
          resize: none;
          width: 100%;

          &:active,
          &:focus,
          &:hover {
            outline: 0;
          }
        }

        button {
          aspect-ratio: 1 / 1;
          background-color: var(--color-primary);
          border: none;
          border-radius: var(--border-radius-circular);
          bottom: var(--spacing-nano);
          color: var(--color-master-lightest);
          cursor: pointer;
          height: 32px;
          position: absolute;
          right: var(--spacing-nano);
          width: 32px;
        }
      }
    }
  `;
};
