import {
  cssCallback,
  didPaintCallback,
  htmlCallback,
  isPainted,
  willPaintCallback,
} from "./interfaces";

const repaint = (target, _propertyKey, descriptor) => {
  const apply = (original, context, args) => {
    setImmediate(async () => {
      if (context[isPainted]) {
        const start = performance.now();

        await context[willPaintCallback]?.();
        await Promise.all([
          new Promise(context[htmlCallback]),
          new Promise(context[cssCallback]),
        ]);
        await context[didPaintCallback]?.();

        const end = performance.now();
        const duration = (end - start).toFixed(0);

        console.log(`[REPAINT] ${target.constructor.name}`);
        console.log(`└── Finished in ${duration}`);
      }
    });

    return original.apply(context, args);
  };

  if (descriptor.set) {
    descriptor.set = new Proxy(descriptor.set, { apply });
  }

  if (descriptor.value) {
    descriptor.value = new Proxy(descriptor.value, { apply });
  }
};

export default repaint;
