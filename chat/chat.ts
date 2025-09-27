import { attributeChanged, define } from "@std/directive";
import { paint, retouch } from "@std/dom";
import Echo from "@std/echo";
import on from "@std/event";
import logger from "@std/logger";
import { after, before } from "@std/middleware";
import { component } from "./component";
import { activate, deactivate, notify } from "./interfaces";
import { status } from "./status";
import { stop } from "./stop";
import { style } from "./style";

@define("chat-bot")
@paint(component, style)
class Chat extends Echo(HTMLElement) {
  #internals;
  #state;

  get state() {
    return (this.#state ??= status.CLOSED);
  }

  @attributeChanged("state")
  @logger
  @before(deactivate)
  @after(activate)
  set state(value) {
    this.#state = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.click('[use^="minimize"]')
  @logger
  close() {
    this.state = status.CLOSED;
    return this;
  }

  @on.click('[use^="expand"]')
  @logger
  expand() {
    this.state = status.EXPANDED;
    return this;
  }

  @on.sent('[name="input"]', stop)
  @on.thinking('[name="agent"]', stop)
  @on.responded('[name="agent"]', stop)
  [notify]({ type, detail }) {
    const init = { bubbles: true, cancelable: true, detail };
    const event = new CustomEvent(type, init);
    this.dispatchEvent(event);
    return this;
  }

  @on.click('[use^="collapse"]')
  @logger
  open() {
    this.state = status.OPENED;
    return this;
  }

  @logger
  [activate]() {
    this.#internals.states.add(this.state);
    return this;
  }

  @logger
  [deactivate](value) {
    this.#internals.states.delete(this.state);
    return value;
  }
}

export default Chat;
