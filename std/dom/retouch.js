import { cssCallback, isPainted } from "./interfaces";

const retouch = (target, _propertyKey, descriptor) => {
  const apply = (original, context, args) => {
    setImmediate(async () => {
      if (context[isPainted]) {
        const start = performance.now();
        await new Promise(context[cssCallback]);
        const end = performance.now();
        const duration = (end - start).toFixed(0);

        console.log(`[RETOUCH] ${target.constructor.name}`);
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

export default retouch;
