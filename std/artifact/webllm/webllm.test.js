// Importa os mocks do mock manual. O Vitest redireciona isso para __mocks__/@mlc-ai/web-llm.js
import {
  CreateMLCEngine,
  createChatCompletion,
  prebuiltAppConfig,
} from "@mlc-ai/web-llm";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { WebLLM } from "./webllm.js";

// Informa ao Vitest para usar o mock manual
vi.mock("@mlc-ai/web-llm");

describe("WebLLM", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("initialize", () => {
    it("deve chamar CreateMLCEngine com os argumentos corretos", () => {
      const modelName = "test-model";
      WebLLM.initialize(modelName);

      expect(CreateMLCEngine).toHaveBeenCalledWith(modelName, {
        appConfig: prebuiltAppConfig,
      });
      expect(CreateMLCEngine).toHaveBeenCalledTimes(1);
    });
  });

  describe("ask", () => {
    beforeEach(() => {
      WebLLM.initialize("test-model");
    });

    it("deve chamar completions.create com as mensagens corretas", async () => {
      const systemPrompt = "sys";
      const userPrompt = "user";
      createChatCompletion.mockResolvedValue({
        choices: [{ message: { content: "ok" } }],
      });

      await WebLLM.ask(systemPrompt, userPrompt);

      expect(createChatCompletion).toHaveBeenCalledWith({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      });
    });

    it("deve retornar o conteúdo da resposta em caso de sucesso", async () => {
      const expected = "Paris";
      createChatCompletion.mockResolvedValue({
        choices: [{ message: { content: expected } }],
      });

      const response = await WebLLM.ask("sys", "user");
      expect(response).toBe(expected);
    });

    it("deve retornar a mensagem de erro em caso de falha na API", async () => {
      const errorMsg = "API Error";
      createChatCompletion.mockRejectedValue({ message: errorMsg });

      const response = await WebLLM.ask("sys", "user");
      expect(response).toBe(errorMsg);
    });

    it("deve retornar a mensagem de erro se a inicialização do motor falhar", async () => {
      const initErrorMsg = "Init Error";
      CreateMLCEngine.mockRejectedValue({ message: initErrorMsg });

      WebLLM.initialize("failing-model");

      const response = await WebLLM.ask("sys", "user");
      expect(response).toBe(initErrorMsg);
    });
  });
});
