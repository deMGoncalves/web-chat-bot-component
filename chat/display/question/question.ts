import { Markdown } from "std/artifact";
import { define } from "std/directive";
import { paint } from "std/dom";
import { Reveal } from "std/mixin";
import { component } from "./component";
import { style } from "./style";

@define("chat-question")
@paint(component, style)
class Question extends Reveal(HTMLElement) {
  get content() {
    return Markdown.render(this.textContent);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static is(token) {
    return token?.author === "user";
  }

  static render(token) {
    return `<chat-question>${token?.message}</chat-question>`;
  }
}

export default Question;
