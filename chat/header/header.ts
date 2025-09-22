import { define } from "std/directive";
import { paint } from "std/dom";
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
