import { define } from "@bot/std/directive";
import Echo from "@bot/std/echo";
import logger from "@bot/std/logger";
import { Headless } from "@bot/std/mixin";
import { generateAnswer } from "./weblm.js";
import AI from "./ai";

@define("chat-agent")
class Agent extends Headless(Echo(HTMLElement)) {
  #ai = new AI();

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @logger
  async ask(token) {
    this.dispatchEvent(new CustomEvent("thinking", { detail: token }));
    const response = await this.#ai.ask(token?.message);
    this.dispatchEvent(
      new CustomEvent("responded", { detail: { message: response } }),
    );
    return this;
  }
}

export default Agent;
