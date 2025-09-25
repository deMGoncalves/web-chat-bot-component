import { formAssociated } from "./directive.js";

describe("formAssociated", () => {
  it("deve anexar um método ao ciclo de vida formAssociatedCallback", () => {
    const target = {
      formAssociatedCallback: jest.fn(),
    };
    const method = jest.fn();
    formAssociated(target, "myMethod");
    target.myMethod = method;
    target.formAssociatedCallback();
    expect(method).toHaveBeenCalled();
  });
});
