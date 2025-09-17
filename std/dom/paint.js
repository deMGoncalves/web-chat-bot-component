import {
  cssCallback,
  didPaintCallback,
  htmlCallback,
  isPainted,
  willPaintCallback,
} from "./interfaces";

const paint =
  (component, ...styles) =>
  (target) => {
    target.prototype.connectedCallback = new Proxy(
      target.prototype.connectedCallback || (() => {}),
      {
        async apply(original, context, args) {
          await original.apply(context, args);

          context[htmlCallback] = (resolve) => {
            requestAnimationFrame(async () => {
              (context.shadowRoot ?? context).innerHTML =
                await component(context);
              resolve();
            });
          };

          context[cssCallback] = (resolve) => {
            requestAnimationFrame(async () => {
              const styleSheets = styles.map((style) => style(context));
              (context.shadowRoot ?? document).adoptedStyleSheets =
                await Promise.all(styleSheets);
              resolve();
            });
          };

          const start = performance.now();

          await context[willPaintCallback]?.();
          await Promise.all([
            new Promise(context[htmlCallback]),
            new Promise(context[cssCallback]),
          ]);
          context[isPainted] = true;
          await context[didPaintCallback]?.();

          const end = performance.now();
          const duration = (end - start).toFixed(0);

          console.log(`[PAINT] ${target.name}`);
          console.log(`└── Finished in ${duration}`);
        },
      },
    );
  };

export default paint;
