/**
 * @fileoverview
 * Encapsula a biblioteca WebLLM (@mlc-ai/web-llm) como uma Camada Anticorrupção (ACL).
 *
 * @module @std/artifact/webllm
 */

import {
  CreateMLCEngine,
  prebuiltAppConfig as appConfig,
} from "@mlc-ai/web-llm";

/**
 * Representa uma interface controlada para o motor de IA do WebLLM.
 *
 * @class WebLLM
 */
export class WebLLM {
  /**
   * A instância privada do motor WebLLM.
   *
   * @static
   * @private
   * @type {Promise<import("@mlc-ai/web-llm").MLCEngine>}
   */
  static #engine;

  /**
   * Envia uma pergunta para o motor de IA e retorna a resposta.
   *
   * @static
   * @param {string} system - A instrução do sistema.
   * @param {string} user - A pergunta do usuário.
   * @returns {Promise<string>} O conteúdo da resposta da IA.
   */
  static async ask(system, user) {
    try {
      const engine = await WebLLM.#engine;
      const {
        choices: [
          {
            message: { content },
          },
        ],
      } = await engine.chat.completions.create({
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      });
      return content;
    } catch ({ message }) {
      return message;
    }
  }

  /**
   * Inicializa o motor WebLLM com um modelo específico.
   *
   * @static
   * @param {string} modelName - O nome do modelo a ser carregado.
   */
  static initialize(modelName) {
    WebLLM.#engine = CreateMLCEngine(modelName, {
      appConfig,
    });
  }
}
