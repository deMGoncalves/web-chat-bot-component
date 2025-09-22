import { define } from "std/directive";
import { didPaint, paint } from "std/dom";
import on from "std/event";
import { component } from "./component";
import { change, focus, resize, send } from "./interfaces";
import { style } from "./style";

@define("chat-input")
@paint(component, style)
class Input extends HTMLElement {
  #internals = this.attachInternals();

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open", delegatesFocus: true });
  }

  @on.input("textarea")
  [change](event) {
    this.#internals.setFormValue(event.target.value);
    return this;
  }

  @didPaint
  [focus]() {
    this.shadowRoot.querySelector("textarea").focus();
    return this;
  }

  @on.keydown("textarea")
  [send](event) {
    if (/enter/i.test(event.key)) {
      event.preventDefault();
      this.#internals.form.requestSubmit();
    }
    return this;
  }

  @on.input("textarea")
  [resize](event) {
    event.target.style.setProperty("height", "46px");
    event.target.style.setProperty("height", `${event.target.scrollHeight}px`);
    return this;
  }
}

export default Input;
