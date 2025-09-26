import { describe, expect, it, vi } from "vitest";
import { formStateRestore } from "./formStateRestore";

describe("formStateRestore", () => {
  it("deve executar o método decorado quando formStateRestoreCallback é chamado", () => {
    class MyElement {
      constructor() {
        this.onFormStateRestore = vi.fn();
      }

      @formStateRestore
      onFormStateRestore() {
        // This will be replaced by the vi.fn() in the constructor
      }
    }

    const element = new MyElement();
    element.formStateRestoreCallback();
    expect(element.onFormStateRestore).toHaveBeenCalled();
  });
});
