import Pipe from "@chat/pipe";
import { attributeChanged, define } from "@std/directive";
import { paint, repaint, retouch } from "@std/dom";
import Echo from "@std/echo";
import on from "@std/event";
import logger from "@std/logger";
import { truthy } from "@std/spark";
import { component } from "./component";
import { formData } from "./formData";
import { ignite, sent } from "./interfaces";
import { prevent } from "./prevent";
import { style } from "./style";

@define("chat-bar")
@paint(component, style)
class Bar extends Echo(HTMLElement) {
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
  @repaint
  async [sent](data) {
    const processed = await Pipe[ignite]("ask", data);
    const detail = { ...processed, author: "user" };
    const init = { bubbles: true, cancelable: true, detail };
    const event = new CustomEvent("sent", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Bar;
