/**
 * @fileoverview Hook para o ciclo de vida attributeChangedCallback.
 * @module @std/directive/attributeChanged
 */

/**
 * Observa mudanças em um atributo e atualiza uma propriedade (ou invoca um setter)
 * da classe com o novo valor, opcionalmente aplicando uma sequência de funções de filtro.
 *
 * @param {string} attribute - O nome do atributo a ser observado.
 * @param {...Function} filters - Uma sequência de funções para processar o valor do atributo.
 * @returns {Function} - Um decorador que pode ser aplicado a uma propriedade ou setter de classe.
 */
const attributeChanged =
  (attribute, ...filters) =>
  (target, property) => {
    target.constructor.observedAttributes = [
      ...new Set([...(target.constructor.observedAttributes || []), attribute]),
    ];

    target.attributeChangedCallback = new Proxy(
      target.attributeChangedCallback || (() => {}),
      {
        apply(original, context, [name, oldValue, newValue]) {
          original.apply(context, [name, oldValue, newValue]);
          if (name === attribute) {
            context[property] = filters.reduce((v, fn) => fn(v), newValue);
          }
        },
      },
    );
  };

export { attributeChanged };
