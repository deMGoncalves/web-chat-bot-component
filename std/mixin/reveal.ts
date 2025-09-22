import { didPaint } from "std/dom";
import { revealable } from "./interfaces";

export const Reveal = (Super) => {
  class C extends Super {
    @didPaint
    [revealable]() {
      requestAnimationFrame(() => {
        this.scrollIntoView({ behavior: "smooth", block: "end" });
      });
      return this;
    }
  }

  return C;
};

export default Reveal;
