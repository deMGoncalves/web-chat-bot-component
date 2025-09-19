import { attributeChanged, define } from "@bot/std/directive";
import { paint, retouch } from "@bot/std/dom";
import Echo from "@bot/std/echo";
import on from "@bot/std/event";
import logger from "@bot/std/logger";
import { truthy } from "@bot/std/spark";
import { component } from "./component";
import { formData } from "./formData";
import { ignite, sent } from "./interfaces";
import { prevent } from "./prevent";
import { style } from "./style";
import Pipe from "@bot/chat/pipe";

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
  async [sent](data) {
    const detail = await Pipe[ignite]("ask", data);
    const init = { bubbles: true, cancelable: true, detail };
    const event = new CustomEvent("sent", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Input;
