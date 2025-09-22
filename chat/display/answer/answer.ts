import { Markdown } from "std/artifact";
import { define } from "std/directive";
import { paint } from "std/dom";
import { Reveal } from "std/mixin";
import { component } from "./component";
import { style } from "./style";

@define("chat-answer")
@paint(component, style)
class Answer extends Reveal(HTMLElement) {
  get content() {
    return Markdown.render(this.textContent);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static is(token) {
    return token?.author === "bot";
  }

  static render(token) {
    return `<chat-answer>${token?.message}</chat-answer>`;
  }
}

export default Answer;
