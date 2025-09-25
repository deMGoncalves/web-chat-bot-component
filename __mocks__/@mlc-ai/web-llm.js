import { vi } from "vitest";

// Este é o spy que queremos acessar no nosso teste
export const createChatCompletion = vi.fn();

// Mockamos a função principal da biblioteca para retornar um objeto
// que contém nosso spy no lugar do método real.
export const CreateMLCEngine = vi.fn(() =>
  Promise.resolve({
    chat: {
      completions: {
        create: createChatCompletion,
      },
    },
  }),
);

// Mockamos outras exportações que o módulo real possui
export const prebuiltAppConfig = {};
