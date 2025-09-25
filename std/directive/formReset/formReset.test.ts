import { formReset } from "./formReset";

describe("formReset", () => {
  it("deve anexar um método ao ciclo de vida formResetCallback", () => {
    const target = {
      formResetCallback: jest.fn(),
    };
    const method = jest.fn();
    formReset(target, "myMethod");
    target.myMethod = method;
    target.formResetCallback();
    expect(method).toHaveBeenCalled();
  });
});
