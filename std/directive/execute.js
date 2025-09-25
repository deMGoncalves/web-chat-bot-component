/**
 * @fileoverview Utilitário para criar hooks de ciclo de vida.
 * @module @std/directive/execute
 */

/**
 * Cria um proxy para um método de ciclo de vida de um web component,
 * permitindo que um método da classe seja executado após o evento de ciclo de vida.
 *
 * @param {string} method - O nome do método da classe a ser executado.
 * @returns {Object} - Um objeto com métodos `on` e `after` para configurar o hook.
 */
const execute = (method) => ({
  on: (target) => ({
    after: (event) => {
      target[event] = new Proxy(target[event] || (() => {}), {
        apply(original, context, args) {
          original.apply(context, args);
          context[method](...args);
        },
      });
    },
  }),
});

export { execute };
