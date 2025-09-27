import { define } from "@std/directive";
import { paint } from "@std/dom";
import Echo from "@std/echo";
import on from "@std/event";
import { component } from "./component";
import { style } from "./style";

@define("site-laucher")
@paint(component, style)
class Laucher extends Echo(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("*")
  click() {
    const init = { bubbles: true, cancelable: true };
    const event = new CustomEvent("click", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Laucher;
