class Messages {
  #data = [];

  push(message) {
    this.#data = [message, ...this.#data];
    return this;
  }

  [Symbol.toPrimitive](hint) {
    return /string|default/.test(hint)
      ? this.#data.join("")
      : this.#data.length;
  }
}

export default Messages;
