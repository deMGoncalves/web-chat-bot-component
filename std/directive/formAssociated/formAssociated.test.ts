import { describe, expect, it, vi } from "vitest";
import { formAssociated } from "./formAssociated";

describe("formAssociated", () => {
  it("deve executar o método decorado quando formAssociatedCallback é chamado", () => {
    class MyElement {
      constructor() {
        this.onFormAssociated = vi.fn();
      }

      @formAssociated
      onFormAssociated() {
        // This will be replaced by the vi.fn() in the constructor
      }
    }

    const element = new MyElement();
    element.formAssociatedCallback();
    expect(element.onFormAssociated).toHaveBeenCalled();
  });
});
