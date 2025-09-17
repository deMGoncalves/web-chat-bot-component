import { attributeChanged, define } from "@bot/std/directive";
import { paint, repaint, retouch } from "@bot/std/dom";
import { component } from "./component";
import { style } from "./style";

@define("chat-icon")
@paint(component, style)
class Icon extends HTMLElement {
  #size;
  #use;

  get size() {
    return (this.#size ??= "md");
  }

  @attributeChanged("size")
  @retouch
  set size(value) {
    this.#size = value;
  }

  get use() {
    return (this.#use ??= "");
  }

  @attributeChanged("use")
  @repaint
  set use(value) {
    this.#use = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Icon;
