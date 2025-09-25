import { connected } from "./connected";

describe("connected", () => {
  it("deve anexar um método ao ciclo de vida connectedCallback", () => {
    const target = {
      connectedCallback: jest.fn(),
    };
    const method = jest.fn();
    connected(target, "myMethod");
    target.myMethod = method;
    target.connectedCallback();
    expect(method).toHaveBeenCalled();
  });
});
