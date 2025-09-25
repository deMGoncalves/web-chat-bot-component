/**
 * @fileoverview Hook para o ciclo de vida formAssociatedCallback.
 * @module @std/directive/formAssociated
 */

import { execute } from "./execute";

/**
 * Anexa um método ao ciclo de vida `formAssociatedCallback` de um web component.
 *
 * @param {Object} target - O protótipo da classe do web component.
 * @param {string} method - O nome do método a ser executado.
 * @returns {void}
 */
const formAssociated = (target, method) =>
  execute(method).on(target).after("formAssociatedCallback");

export { formAssociated };
