import { describe, expect, it, vi } from "vitest";
import { formDisabled } from "./formDisabled";

describe("formDisabled", () => {
  it("deve executar o método decorado quando formDisabledCallback é chamado", () => {
    class MyElement {
      constructor() {
        this.onFormDisabled = vi.fn();
      }

      @formDisabled
      onFormDisabled() {
        // This will be replaced by the vi.fn() in the constructor
      }
    }

    const element = new MyElement();
    element.formDisabledCallback();
    expect(element.onFormDisabled).toHaveBeenCalled();
  });
});
