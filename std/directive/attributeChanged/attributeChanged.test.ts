import { describe, expect, it, vi } from "vitest";
import { attributeChanged } from "./attributeChanged";

describe("attributeChanged", () => {
  it("deve observar um atributo e atualizar a propriedade via setter", () => {
    class MyElement {
      #_myProperty;
      constructor() {
        this.#_myProperty = undefined;
      }

      @attributeChanged("my-attribute")
      set myProperty(value) {
        this.#_myProperty = value;
      }

      get myProperty() {
        return this.#_myProperty;
      }
    }

    const element = new MyElement();
    element.attributeChangedCallback("my-attribute", "old", "new");
    expect(element.myProperty).toBe("new");
    expect(MyElement.observedAttributes).toContain("my-attribute");
  });

  it("deve aplicar filtros ao valor do atributo via setter", () => {
    const toUpperCase = (value) => value.toUpperCase();
    class MyElementWithFilter {
      #_myProperty;
      constructor() {
        this.#_myProperty = undefined;
      }

      @attributeChanged("filtered-attribute", toUpperCase)
      set myProperty(value) {
        this.#_myProperty = value;
      }

      get myProperty() {
        return this.#_myProperty;
      }
    }

    const element = new MyElementWithFilter();
    element.attributeChangedCallback("filtered-attribute", "old", "value");
    expect(element.myProperty).toBe("VALUE");
    expect(MyElementWithFilter.observedAttributes).toContain(
      "filtered-attribute",
    );
  });
});
