import { describe, expect, it, vi } from "vitest";
import { connected } from "./connected";

describe("connected", () => {
  it("deve executar o método decorado quando connectedCallback é chamado", () => {
    class MyElement {
      constructor() {
        this.onConnected = vi.fn();
      }

      @connected
      onConnected() {
        // This will be replaced by the vi.fn() in the constructor
      }
    }

    const element = new MyElement();
    element.connectedCallback();
    expect(element.onConnected).toHaveBeenCalled();
  });
});
