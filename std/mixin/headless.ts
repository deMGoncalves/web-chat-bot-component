import { connected } from "@bot/std/directive";
import { hideable } from "./interfaces";

export const Headless = (Super) => {
  class C extends Super {
    @connected
    [hideable]() {
      this.style.setProperty("display", "none");
      return this;
    }
  }

  return C;
};
