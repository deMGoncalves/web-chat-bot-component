import { attributeChanged, define } from "@bot/std/directive";
import { paint, repaint, retouch } from "@bot/std/dom";
import Echo from "@bot/std/echo";
import logger from "@bot/std/logger";
import { truthy } from "@bot/std/spark";
import { component } from "./component";
import { style } from "./style";

@define("chat-display")
@paint(component, style)
class Display extends Echo(HTMLElement) {
  #messages;
  #waiting;

  get messages() {
    return [...(this.#messages ??= [])];
  }

  @repaint
  set messages(value) {
    this.#messages = value;
  }

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
  push(token) {
    this.messages = [...this.messages, token.message];
    return this;
  }
}

export default Display;
