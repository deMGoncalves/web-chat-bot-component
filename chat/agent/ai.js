import {
  CreateMLCEngine,
  prebuiltAppConfig as appConfig,
} from "@mlc-ai/web-llm";
import System from "./system";
import Model from "./model";

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
    } catch (error) {
      return error.message;
    }
  }

  static {
    AI.#engine = CreateMLCEngine(Model.name, {
      appConfig,
    });
  }
}

export default AI;
