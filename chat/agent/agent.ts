import Pipe from "chat/pipe";
import { define } from "std/directive";
import Echo from "std/echo";
import logger from "std/logger";
import { Headless } from "std/mixin";
import AI from "./ai";
import { ignite } from "./interfaces";

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
      const detail = { ...processed, author: "bot" };
      const init = { bubbles: true, cancelable: true, detail };
      const event = new CustomEvent("responded", init);
      this.dispatchEvent(event);
    }

    return this;
  }
}

export default Agent;
