import { css } from "@std/dom";

export const style = () => {
  return css`
    :host {
      box-sizing: border-box;
      padding: var(--spacing_inset-nano);

      form {
        position: relative;
        display: flex;
        align-items: center;

        button {
          align-items: center;
          aspect-ratio: 1 / 1;
          background: var(--color-primary);
          border: none;
          border-radius: var(--border-radius-circular);
          bottom: 5px;
          color: var(--color-master-lightest);
          cursor: pointer;
          display: flex;
          height: 36px;
          justify-content: center;
          position: absolute;
          right: var(--spacing_inset-quarck);
          width: 36px;

          &:hover {
            background: var(--color-primary-dark);
          }

          &:disabled {
            background: var(--color-master-light);
            color: var(--color-master);
            cursor: not-allowed;
          }
        }
      }
    }
  `;
};
