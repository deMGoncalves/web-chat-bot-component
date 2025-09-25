import { define } from "./define";

describe("define", () => {
  it("deve definir um custom element", () => {
    const defineSpy = jest.spyOn(customElements, "define");
    define("my-component")(class {});
    expect(defineSpy).toHaveBeenCalledWith(
      "my-component",
      expect.any(Function),
      undefined,
    );
  });
});
