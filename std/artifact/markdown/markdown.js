/**
 * @fileoverview
 * Provides a static class `Markdown` for converting Markdown text to HTML using the `showdown` library.
 * This module is pre-configured with specific options suitable for the project.
 *
 * @module @std/artifact/markdown
 */

import showdown from "showdown";

/**
 * A utility class for rendering Markdown text to HTML.
 * It uses a single, pre-configured instance of the `showdown` converter.
 *
 * @class Markdown
 */
class Markdown {
  /**
   * The private `showdown` converter instance.
   *
   * @static
   * @private
   * @type {showdown.Converter}
   */
  static #converter;

  /**
   * Renders a Markdown string into HTML.
   *
   * @static
   * @param {string} [text=""] - The Markdown text to convert.
   * @returns {string} The resulting HTML string.
   */
  static render(text = "") {
    return Markdown.#converter.makeHtml(text);
  }

  /**
   * Initializes the static `showdown` converter with project-specific options.
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

export default Markdown;
