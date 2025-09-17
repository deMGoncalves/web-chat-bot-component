import { html } from "@bot/std/dom";

export const component = () => {
  return html`
    <chat-header>
      <chat-icon use="minimize"></chat-icon>
      <chat-icon use="expand_content"></chat-icon>
      <chat-icon use="collapse_content"></chat-icon>
    </chat-header>

    <chat-display>
      <!-- dataflows que afetam o display -->
      <chat-on value="chat-input/sent:method/push"></chat-on>
      <chat-on value="chat-agent/thinking:attribute/waiting|always=true"></chat-on>
      <chat-on value="chat-agent/responded:attribute/waiting|always=false"></chat-on>
      <chat-on value="chat-agent/responded:method/push"></chat-on>
    </chat-display>

    <chat-input>
      <!-- dataflows que afetam o input -->
      <chat-on value="chat-agent/thinking:attribute/waiting|always=true"></chat-on>
      <chat-on value="chat-agent/responded:attribute/waiting|always=false"></chat-on>
    </chat-input>

    <chat-agent>
      <!-- dataflows que afetam o agent -->
      <chat-on value="chat-input/sent:method/ask"></chat-on>
    </chat-agent>
  `;
};
