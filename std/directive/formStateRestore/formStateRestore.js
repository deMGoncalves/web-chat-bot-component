/**
 * @fileoverview Hook para o ciclo de vida formStateRestoreCallback.
 * @module @std/directive/formStateRestore
 */

import { execute } from "@std/directive/execute";

/**
 * Anexa um método ao ciclo de vida `formStateRestoreCallback` de um web component.
 *
 * @param {Object} target - O protótipo da classe do web component.
 * @param {string} method - O nome do método a ser executado.
 * @returns {void}
 */
const formStateRestore = (target, method) =>
  execute(method).on(target).after("formStateRestoreCallback");

export { formStateRestore };
