import { WebLLM } from "@std/artifact/webllm";
import Model from "./model";
import System from "./system";

class AI {
  async ask(prompt) {
    return WebLLM.ask(System.prompt, prompt);
  }

  static {
    WebLLM.initialize(Model.name);
  }
}

export default AI;
