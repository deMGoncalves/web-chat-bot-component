import { vi } from "vitest";

// Exporta os mocks para que possamos acessá-los em nossos testes
export const makeHtml = vi.fn();
export const Converter = vi.fn(() => ({
  makeHtml,
}));

export default {
  Converter,
};
