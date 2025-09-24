import {
  CreateMLCEngine,
  prebuiltAppConfig as appConfig,
} from "@mlc-ai/web-llm";
import Model from "./model";
import System from "./system";

class AI {
  static #engine;

  async ask(prompt) {
    try {
      const engine = await AI.#engine;
      const {
        choices: [
          {
            message: { content },
          },
        ],
      } = await engine.chat.completions.create({
        messages: [
          { role: "system", content: System.prompt },
          { role: "user", content: prompt },
        ],
      });
      return content;
    } catch ({ message }) {
      return message;
    }
  }

  static {
    AI.#engine = CreateMLCEngine(Model.name, {
      appConfig,
    });
  }
}

export default AI;
