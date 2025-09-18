import { ignite } from "./interfaces";

class Pipe {
  static #sparks;

  static add(name, callback) {
    (Pipe.#sparks[name.toLowerCase()] ??= []).push(callback);
    return Pipe;
  }

  static [ignite](name, payload) {
    const sparks = (Pipe.#sparks[name.toLowerCase()] ??= []);

    return new Promise((resolve) => {
      const chain = sparks.reduceRight(
        (chain, spark) => (payload) => spark(payload, chain),
        resolve,
      );

      chain(payload);
    });
  }

  static {
    Pipe.#sparks = {};
  }
}

export default Pipe;
