import { attributeChanged, define } from "@bot/std/directive";
import { paint, retouch } from "@bot/std/dom";
import Echo from "@bot/std/echo";
import logger from "@bot/std/logger";
import { component } from "./component";
import { style } from "./style";
import { status } from "./status";
import { activate, deactivate, notify } from "./interfaces";
import { after, before } from "@bot/std/middleware";
import on from "@bot/std/event";

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

  @on.sent("[input]")
  @on.thinking("[agent]")
  @on.responded("[agent]")
  [notify]({ type, detail }) {
    this.dispatchEvent(new CustomEvent(type, { detail }));
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
