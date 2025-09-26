import { describe, expect, it, vi } from "vitest";
import { disconnected } from "./disconnected";

describe("disconnected", () => {
  it("deve executar o método decorado quando disconnectedCallback é chamado", () => {
    class MyElement {
      constructor() {
        this.onDisconnected = vi.fn();
      }

      @disconnected
      onDisconnected() {
        // This will be replaced by the vi.fn() in the constructor
      }
    }

    const element = new MyElement();
    element.disconnectedCallback();
    expect(element.onDisconnected).toHaveBeenCalled();
  });
});
