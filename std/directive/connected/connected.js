/**
 * @fileoverview Hook para o ciclo de vida connectedCallback.
 * @module @std/directive/connected
 */

import { execute } from "@std/directive/execute";

/**
 * Anexa um método ao ciclo de vida `connectedCallback` de um web component.
 *
 * @param {Object} target - O protótipo da classe do web component.
 * @param {string} method - O nome do método a ser executado.
 * @returns {void}
 */
const connected = (target, method) =>
  execute(method).on(target).after("connectedCallback");

export { connected };
