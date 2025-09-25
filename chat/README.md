# Contexto: @chat

## Visão Geral

O contexto `@chat` é o coração da aplicação. Ele contém todos os Web Components que compõem a interface do chat, gerencia a lógica de interação e orquestra o fluxo de dados entre o usuário e o agente de IA.

A arquitetura segue os padrões definidos no `GEMINI.md`, utilizando Web Components como base, decoradores para funcionalidades transversais (AOP) e um barramento de eventos para comunicação reativa (Dataflow).

## Componentes Principais

-   **`<chat-bot>`**: O componente raiz que encapsula toda a janela do chat. Ele gerencia os estados principais da interface (aberto, fechado, expandido) e coordena a interação entre as partes internas.

-   **`<chat-header>`**: O cabeçalho da janela do chat. Exibe o título e os botões de ação, como minimizar e expandir.

-   **`<chat-display>`**: A área onde as mensagens da conversa são renderizadas. É responsável por exibir tanto as perguntas do usuário (`<chat-question>`) quanto as respostas do bot (`<chat-answer>`).

-   **`<chat-bar>`**: A barra de entrada de texto onde o usuário digita suas mensagens. Contém o `<chat-input>` e o botão de envio.

-   **`<chat-agent>`**: Um componente "headless" (sem interface) que atua como um proxy para o motor de IA (WebLLM). Ele recebe as perguntas, envia para o modelo de linguagem e dispara eventos com as respostas.

-   **`<chat-icon>`**: Um componente utilitário para exibir ícones do [Material Symbols](https://fonts.google.com/icons), garantindo consistência visual.

-   **`<chat-on>`**: O pilar do nosso Dataflow. Este componente declarativo atua como um "controle de hipermídia", conectando eventos do barramento de eventos a métodos ou atributos de outros componentes, permitindo uma arquitetura desacoplada.

## Fluxo de Dados (Dataflow)

O fluxo de interação é orquestrado de forma reativa através de eventos:

1.  O usuário digita uma mensagem no `<chat-bar>` e clica em enviar.
2.  O `<chat-bar>` dispara um evento `sent` com a mensagem do usuário.
3.  Um `<chat-on>` dentro do `<chat-agent>` escuta o evento `sent` e aciona o método `ask()` do agente.
4.  O `<chat-agent>` processa a pergunta e dispara um evento `thinking` para notificar a UI que está aguardando uma resposta.
5.  Outros componentes, como `<chat-bar>` e `<chat-display>`, escutam o evento `thinking` (via `<chat-on>`) para desabilitar o input e mostrar um indicador de carregamento.
6.  Quando o modelo de IA responde, o `<chat-agent>` dispara um evento `responded`.
7.  O `<chat-display>` escuta o evento `responded` e renderiza a nova mensagem na tela. O `<chat-bar>` também escuta para reabilitar o input.
