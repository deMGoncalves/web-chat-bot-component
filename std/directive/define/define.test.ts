import { describe, expect, it, vi } from "vitest";
import { define } from "./define";

describe("define", () => {
  it("deve definir um custom element", () => {
    const defineSpy = vi.spyOn(customElements, "define");

    @define("my-defined-component")
    class MyDefinedElement {}

    expect(defineSpy).toHaveBeenCalledWith(
      "my-defined-component",
      MyDefinedElement,
      undefined,
    );
  });

  it("deve definir um custom element com opções", () => {
    const defineSpy = vi.spyOn(customElements, "define");
    const options = { extends: "div" };

    @define("my-extended-component", options)
    class MyExtendedElement {}

    expect(defineSpy).toHaveBeenCalledWith(
      "my-extended-component",
      MyExtendedElement,
      options,
    );
  });

  it("não deve redefinir um custom element já existente", () => {
    const defineSpy = vi.spyOn(customElements, "define");
    vi.spyOn(customElements, "get").mockReturnValue(
      class ExistingElement extends HTMLElement {},
    );

    @define("existing-component")
    class ExistingElement {}

    expect(defineSpy).not.toHaveBeenCalled();
  });
});
