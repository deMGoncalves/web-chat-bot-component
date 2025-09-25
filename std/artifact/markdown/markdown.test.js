// Importa os mocks do mock manual. O Vitest redireciona isso para `__mocks__/showdown.js`
import { Converter, makeHtml } from "showdown";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Markdown } from "./markdown.js";

// Informa ao Vitest para usar o mock manual em __mocks__/showdown.js
vi.mock("showdown");

describe("Markdown", () => {
  // Testa a inicialização estática uma vez
  describe("Inicialização", () => {
    it("deve instanciar o Converter com as opções corretas na carga do módulo", () => {
      const expectedOptions = {
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
        sanitize: true,
        openLinksInNewWindow: true,
      };
      // O bloco estático é executado quando o módulo é importado, então o mock já deve ter sido chamado.
      expect(Converter).toHaveBeenCalledWith(expectedOptions);
      expect(Converter).toHaveBeenCalledTimes(1);
    });
  });

  // Testa o método render
  describe("render", () => {
    beforeEach(() => {
      makeHtml.mockClear();
    });

    it("deve chamar o método makeHtml do conversor com o texto fornecido", () => {
      const text = "Um texto markdown";
      Markdown.render(text);
      expect(makeHtml).toHaveBeenCalledWith(text);
      expect(makeHtml).toHaveBeenCalledTimes(1);
    });

    it("deve chamar makeHtml com uma string vazia quando nenhum texto é fornecido", () => {
      Markdown.render();
      expect(makeHtml).toHaveBeenCalledWith("");
      expect(makeHtml).toHaveBeenCalledTimes(1);
    });
  });
});
