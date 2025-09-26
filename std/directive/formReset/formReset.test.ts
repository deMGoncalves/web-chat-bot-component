import { describe, expect, it, vi } from "vitest";
import { formReset } from "./formReset";

describe("formReset", () => {
  it("deve executar o método decorado quando formResetCallback é chamado", () => {
    class MyElement {
      constructor() {
        this.onFormReset = vi.fn();
      }

      @formReset
      onFormReset() {
        // This will be replaced by the vi.fn() in the constructor
      }
    }

    const element = new MyElement();
    element.formResetCallback();
    expect(element.onFormReset).toHaveBeenCalled();
  });
});
