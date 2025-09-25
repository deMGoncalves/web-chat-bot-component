/**
 * @fileoverview Hook para o ciclo de vida disconnectedCallback.
 * @module @std/directive/disconnected
 */

import { execute } from "./execute.js";

/**
 * Anexa um método ao ciclo de vida `disconnectedCallback` de um web component.
 *
 * @param {Object} target - O protótipo da classe do web component.
 * @param {string} method - O nome do método a ser executado.
 * @returns {void}
 */
const disconnected = (target, method) =>
  execute(method).on(target).after("disconnectedCallback");

export { disconnected };
