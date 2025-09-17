import { attributeChanged, connected, define } from "@bot/std/directive";
import { Headless } from "@bot/std/mixin";
import { connectArc, setter } from "./interfaces";

@define("chat-on")
class On extends Headless(HTMLElement) {
  #value;

  get value() {
    return (this.#value ??= "");
  }

  @attributeChanged("value")
  set value(value) {
    this.#value = value;
  }

  @connected
  async [setter]() {
    await customElements.whenDefined(this.parentElement?.localName);
    this.parentElement?.[connectArc]?.(this.value);
    return this;
  }
}

export default On;
