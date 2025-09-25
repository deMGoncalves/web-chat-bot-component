import { describe, expect, it } from "vitest";
import { Markdown } from "./markdown.js";

describe("Markdown", () => {
  it("should render bold text correctly", () => {
    const text = "**bold text**";
    const expectedHtml = "<p><strong>bold text</strong></p>";
    expect(Markdown.render(text)).toBe(expectedHtml);
  });

  it("should render a table correctly", () => {
    const text = `
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
`;
    const expectedHtml =
      "<table><thead><tr><th>Header 1</th><th>Header 2</th></tr></thead><tbody><tr><td>Cell 1</td><td>Cell 2</td></tr></tbody></table>";
    expect(Markdown.render(text).replace(/\n/g, "")).toBe(expectedHtml);
  });

  it("should open links in a new window", () => {
    const text = "[Google](https://google.com)";
    const expectedHtml =
      '<p><a href="https://google.com" rel="noopener noreferrer" target="_blank">Google</a></p>';
    expect(Markdown.render(text)).toBe(expectedHtml);
  });

  it("should handle an empty string", () => {
    const text = "";
    const expectedHtml = "";
    expect(Markdown.render(text)).toBe(expectedHtml);
  });
});
