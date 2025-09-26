import { describe, expect, it, vi } from "vitest";
import { adopted } from "./adopted";

describe("adopted", () => {
  it("deve executar o método decorado quando adoptedCallback é chamado", () => {
    class MyElement {
      constructor() {
        this.onAdopted = vi.fn();
      }

      @adopted
      onAdopted() {
        // This will be replaced by the jest.fn() in the constructor
      }
    }

    const element = new MyElement();
    element.adoptedCallback();
    expect(element.onAdopted).toHaveBeenCalled();
  });
});
