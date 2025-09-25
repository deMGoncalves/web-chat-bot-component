/**
 * @fileoverview Decorator para definir um custom element.
 * @module @std/directive/define
 */

/**
 * Define um custom element no registro de custom elements, se ainda não estiver definido.
 *
 * @param {string} name - O nome do custom element.
 * @param {ElementDefinitionOptions} [options] - Opções para a definição do elemento.
 * @returns {Function} - Um decorador de classe.
 */
const define = (name, options) => (target) =>
  customElements.get(name) ?? customElements.define(name, target, options);

export { define };
