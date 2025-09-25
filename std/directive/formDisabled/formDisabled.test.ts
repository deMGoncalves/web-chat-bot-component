import { formDisabled } from "./directive.js";

describe("formDisabled", () => {
  it("deve anexar um método ao ciclo de vida formDisabledCallback", () => {
    const target = {
      formDisabledCallback: jest.fn(),
    };
    const method = jest.fn();
    formDisabled(target, "myMethod");
    target.myMethod = method;
    target.formDisabledCallback();
    expect(method).toHaveBeenCalled();
  });
});
