import { define } from "@bot/std/directive";
import Echo from "@bot/std/echo";
import logger from "@bot/std/logger";
import { Headless } from "@bot/std/mixin";
import { generateAnswer } from "./weblm.js";
import AI from "./ai";
import { ignite } from "./interfaces";
import Pipe from "@bot/chat/pipe";

@define("chat-agent")
class Agent extends Headless(Echo(HTMLElement)) {
  #ai = new AI();

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @logger
  async ask(token) {
    {
      const init = { bubbles: true, cancelable: true, detail: token };
      const event = new CustomEvent("thinking", init);
      this.dispatchEvent(event);
    }

    const response = await this.#ai.ask(token?.message);
    const processed = await Pipe[ignite]("respond", { message: response });

    {
      const init = { bubbles: true, cancelable: true, detail: processed };
      const event = new CustomEvent("responded", init);
      this.dispatchEvent(event);
    }

    return this;
  }
}

export default Agent;
