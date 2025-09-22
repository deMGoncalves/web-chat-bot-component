import Answer from "./answer";
import Question from "./question";

class Tools {
  static render(token) {
    const html = [Question, Answer].find((h) => h.is(token)).render(token);
    const parsed = new DOMParser().parseFromString(html, "text/html");
    return parsed.body.firstElementChild;
  }
}

export default Tools;
