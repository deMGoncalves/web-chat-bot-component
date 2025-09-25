import { attributeChanged } from "./attributeChanged";

describe("attributeChanged", () => {
  it("deve observar um atributo e atualizar a propriedade", () => {
    const target = {
      constructor: {},
      attributeChangedCallback: () => {},
    };
    attributeChanged("my-attribute")(target, "myProperty");
    target.attributeChangedCallback("my-attribute", "old", "new");
    expect(target.myProperty).toBe("new");
  });
});
