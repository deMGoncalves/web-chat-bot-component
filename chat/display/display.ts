import { attributeChanged, define } from "@std/directive";
import { paint, retouch } from "@std/dom";
import Echo from "@std/echo";
import logger from "@std/logger";
import { truthy } from "@std/spark";
import { component } from "./component";
import { style } from "./style";
import Tools from "./tools";

@define("chat-display")
@paint(component, style)
class Display extends Echo(HTMLElement) {
  #waiting;

  get waiting() {
    return (this.#waiting ??= false);
  }

  @attributeChanged("waiting", truthy)
  @logger
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
    requestAnimationFrame(() => {
      this.shadowRoot.append(Tools.render(token));
    });
    return this;
  }
}

export default Display;
