import { define } from "@bot/std/directive";
import { paint } from "@bot/std/dom";
import { component } from "./component";
import { style } from "./style";

@define("chat-header")
@paint(component, style)
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Header;
