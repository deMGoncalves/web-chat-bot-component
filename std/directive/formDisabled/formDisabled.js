/**
 * @fileoverview Hook para o ciclo de vida formDisabledCallback.
 * @module @std/directive/formDisabled
 */

import { execute } from "../execute";

/**
 * Anexa um método ao ciclo de vida `formDisabledCallback` de um web component.
 *
 * @param {Object} target - O protótipo da classe do web component.
 * @param {string} method - O nome do método a ser executado.
 * @returns {void}
 */
const formDisabled = (target, method) =>
  execute(method).on(target).after("formDisabledCallback");

export { formDisabled };
