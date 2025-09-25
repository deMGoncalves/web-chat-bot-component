/**
 * @fileoverview
 * Fornece uma classe estática `Markdown` para converter texto Markdown em HTML usando a biblioteca `showdown`.
 * Este módulo é pré-configurado com opções específicas adequadas para o projeto.
 *
 * @module @std/artifact/markdown
 */

import showdown from "showdown";

/**
 * Uma classe utilitária para renderizar texto Markdown em HTML.
 * Utiliza uma única instância pré-configurada do conversor `showdown`.
 *
 * @class Markdown
 */
export class Markdown {
  /**
   * A instância privada do conversor `showdown`.
   *
   * @static
   * @private
   * @type {showdown.Converter}
   */
  static #converter;

  /**
   * Renderiza uma string Markdown em HTML.
   *
   * @static
   * @param {string} [text=""] - O texto Markdown a ser convertido.
   * @returns {string} A string HTML resultante.
   */
  static render(text = "") {
    return Markdown.#converter.makeHtml(text);
  }

  /**
   * Inicializa o conversor estático `showdown` com as opções específicas do projeto.
   *
   * @static
   * @private
   */
  static {
    const converter = new showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
      sanitize: true,
      openLinksInNewWindow: true,
    });

    Markdown.#converter = converter;
  }
}
