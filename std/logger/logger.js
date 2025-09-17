const logger = (target, propertyKey, descriptor) => {
  if (descriptor.set) {
    descriptor.set = new Proxy(descriptor.set, {
      apply(original, context, [value]) {
        console.log(
          `[SET] ${target.constructor.name}.${propertyKey.toString()} = ${JSON.stringify(value)}`,
        );

        return original.apply(context, [value]);
      },
    });
  }

  if (descriptor.value) {
    descriptor.value = new Proxy(descriptor.value, {
      apply(original, context, args) {
        const start = performance.now();
        const output = original.apply(context, args);
        const end = performance.now();
        const duration = (end - start).toFixed(0);

        console.log(
          `[CALL] ${target.constructor.name}.${propertyKey.toString()}(${args.map(JSON.stringify).join(", ")})`,
        );
        console.log(`├── Returned: ${JSON.stringify(output)}`);
        console.log(`└── Finished in ${duration}`);

        return output;
      },
    });
  }
};

export default logger;
