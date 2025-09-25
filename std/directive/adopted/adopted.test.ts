import { adopted } from "./adopted";

describe("adopted", () => {
  it("deve anexar um método ao ciclo de vida adoptedCallback", () => {
    const target = {
      adoptedCallback: jest.fn(),
    };
    const method = jest.fn();
    adopted(target, "myMethod");
    target.myMethod = method;
    target.adoptedCallback();
    expect(method).toHaveBeenCalled();
  });
});
