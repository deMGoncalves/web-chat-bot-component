import { formStateRestore } from "./formStateRestore";

describe("formStateRestore", () => {
  it("deve anexar um método ao ciclo de vida formStateRestoreCallback", () => {
    const target = {
      formStateRestoreCallback: jest.fn(),
    };
    const method = jest.fn();
    formStateRestore(target, "myMethod");
    target.myMethod = method;
    target.formStateRestoreCallback();
    expect(method).toHaveBeenCalled();
  });
});
