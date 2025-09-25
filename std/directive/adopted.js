/**
 * @fileoverview Hook para o ciclo de vida adoptedCallback.
 * @module @std/directive/adopted
 */

import { execute } from "./execute.js";

/**
 * Anexa um método ao ciclo de vida `adoptedCallback` de um web component.
 *
 * @param {Object} target - O protótipo da classe do web component.
 * @param {string} method - O nome do método a ser executado.
 * @returns {void}
 */
const adopted = (target, method) =>
  execute(method).on(target).after("adoptedCallback");

export { adopted };
