import { disconnected } from "./disconnected";

describe("disconnected", () => {
  it("deve anexar um método ao ciclo de vida disconnectedCallback", () => {
    const target = {
      disconnectedCallback: jest.fn(),
    };
    const method = jest.fn();
    disconnected(target, "myMethod");
    target.myMethod = method;
    target.disconnectedCallback();
    expect(method).toHaveBeenCalled();
  });
});
