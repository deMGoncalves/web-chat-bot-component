# Arquivo de Configuração Gemini

Este arquivo fornece contexto e instruções para a IA Gemini.

## Visão Geral do Projeto

"Este projeto representa a vanguarda da tecnologia web, com o objetivo de criar um componente de chat de IA de alta performance, nativo e agnóstico de frameworks. A arquitetura é baseada em padrões web abertos, incluindo:

*   **Web Components:** Para criar uma tag HTML encapsulada e reutilizável.
*   **Web Workers:** Para garantir que a interface permaneça responsiva durante o processamento pesado.
*   **WebAssembly (Wasm) e WebLLM:** Para executar modelos de linguagem diretamente no navegador, oferecendo performance e privacidade.

O resultado final será uma biblioteca leve, distribuída como uma única tag, que pode ser facilmente integrada em qualquer aplicação web (seja com ou sem framework) sem impor uma stack de tecnologia específica. A filosofia é ser uma ferramenta, não um ecossistema fechado."

## Arquitetura

A arquitetura do projeto é concebida sob a filosofia **HTML First**, onde a estrutura semântica do HTML é a espinha dorsal. Ela implementa um padrão análogo à **Hypermedia Driven Architecture (HDA)** no frontend, no qual os componentes são autônomos e suas interações são orquestradas por um **Dataflow** reativo (Event Bus), em vez de acoplamento direto.

Para alcançar essa modularidade, a arquitetura combina dois paradigmas de programação:

*   **Programação Orientada a Objetos (OOP):** Cada parte da interface é um Web Component, uma classe que encapsula seu estado e sua lógica de negócio principal.
*   **Programação Orientado a Aspectos (AOP):** Funcionalidades transversais (*cross-cutting concerns*) como renderização, logging e gerenciamento de eventos são tratadas como "aspectos". Eles são aplicados de forma declarativa através de decoradores (`@paint`, `@on.click`, `@logger`), mantendo a lógica do componente limpa e focada.

A reatividade do sistema emerge da sinergia desses padrões. Quando o estado de um componente é alterado, os aspectos de renderização—`@repaint` (redesenha o HTML e CSS) e `@retouch` (reaplica apenas o CSS)—são acionados automaticamente para atualizar a UI de forma eficiente. O decorador `@didPaint` permite executar lógicas que dependem da primeira renderização do componente.

Esse ciclo reativo é conectado ao fluxo de dados global pelo componente `<chat-on>`, que atua como o "controle de hipermídia", ligando os eventos do barramento às ações dos componentes de forma declarativa, diretamente no HTML.

## Arquivos Chave

@./std/artifact/README.md
@./std/directive/README.md
@./std/dom/README.md
@./std/echo/README.md
@./std/event/README.md
@./std/logger/README.md
@./std/middleware/README.md
@./std/mixin/README.md
@./std/pixel/README.md
@./std/polyfill/README.md
@./std/result/README.md
@./std/spark/README.md

## Instruções de Configuração

(Forneça instruções sobre como configurar o projeto para desenvolvimento e teste.)

## Convenções

(Descreva quaisquer convenções de codificação, guias de estilo ou outras convenções específicas do projeto.)

## Protocolos

### <PROTOCOL:INCLUDE>

- **Gatilho:** Ao encontrar uma referência no formato `@./path/to/file.md` em qualquer arquivo de contexto.
- **Ação:** O agente DEVE usar a ferramenta `read_file` para ler o conteúdo do arquivo referenciado.
- **Comportamento:** O conteúdo do arquivo lido deve ser tratado como se fizesse parte do documento de contexto original, para fins de entendimento e resposta. O agente não deve mostrar o conteúdo do arquivo para o usuário, a menos que seja solicitado.

### <PROTOCOL:EXPLAIN>;

(Instruções de como a IA deve explicar códigos ou conceitos.)

### <PROTOCOL:PLAN>;

(Instruções de como a IA deve criar planos para tarefas.)

### <PROTOCOL:IMPLEMENT>;

(Instruções de como a IA deve implementar mudanças no código.)
