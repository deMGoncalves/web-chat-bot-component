/**
 * @fileoverview Hook para o ciclo de vida formResetCallback.
 * @module @std/directive/formReset
 */

import { execute } from "./execute";

/**
 * Anexa um método ao ciclo de vida `formResetCallback` de um web component.
 *
 * @param {Object} target - O protótipo da classe do web component.
 * @param {string} method - O nome do método a ser executado.
 * @returns {void}
 */
const formReset = (target, method) =>
  execute(method).on(target).after("formResetCallback");

export { formReset };
