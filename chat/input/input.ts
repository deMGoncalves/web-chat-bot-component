import { attributeChanged, define } from "@bot/std/directive";
import { paint, retouch } from "@bot/std/dom";
import Echo from "@bot/std/echo";
import on from "@bot/std/event";
import logger from "@bot/std/logger";
import { truthy } from "@bot/std/spark";
import { component } from "./component";
import { formData } from "./formData";
import { sent } from "./interfaces";
import { prevent } from "./prevent";
import { style } from "./style";

@define("chat-input")
@paint(component, style)
class Input extends Echo(HTMLElement) {
  #waiting;

  get waiting() {
    return (this.#waiting ??= false);
  }

  @logger
  @attributeChanged("waiting", truthy)
  @retouch
  set waiting(value) {
    this.#waiting = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @logger
  @on.submit("form", prevent, formData)
  [sent](detail) {
    const event = new CustomEvent("sent", { detail });
    this.dispatchEvent(event);
    return this;
  }
}

export default Input;
