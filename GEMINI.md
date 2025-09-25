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

Para alcançar essa modularidade, a arquitetura combina três pilares:

*   **Programação Orientada a Objetos (OOP):** Cada parte da interface é um Web Component, uma classe que encapsula seu estado e sua lógica de negócio principal.
*   **Programação Orientada a Aspectos (AOP):** Funcionalidades transversais (*cross-cutting concerns*) como renderização, logging e gerenciamento de eventos são tratadas como "aspectos". Eles são aplicados de forma declarativa através de decoradores (`@paint`, `@on.click`, `@logger`), mantendo a lógica do componente limpa e focada.
*   **Dataflow (Event Bus):** Os componentes são autônomos e suas interações são orquestradas por um barramento de eventos, em vez de acoplamento direto. Isso permite uma arquitetura de frontend análoga à HDA (Hypermedia Driven Architecture).

A reatividade do sistema emerge da sinergia desses padrões. Quando o estado de um componente é alterado, os aspectos de renderização `@repaint` (redesenha o HTML e CSS) e `@retouch` (reaplica apenas o CSS) são acionados automaticamente para atualizar a UI de forma eficiente. O decorador `@didPaint` permite executar lógicas que dependem da primeira renderização do componente.

Esse ciclo reativo é conectado ao fluxo de dados global pelo componente `<chat-on>`, que atua como o "controle de hipermídia", ligando os eventos do barramento às ações dos componentes de forma declarativa, diretamente no HTML.

## Contexto

O projeto é organizado em três contextos principais, cada um com sua própria responsabilidade e escopo.

### @chat

Este é o coração do projeto, onde todos os Web Components que formam a interface do chat são definidos. Inclui a lógica para a renderização de mensagens, a interação com o modelo de IA e o gerenciamento do estado do chat.

-   Veja mais em: `@./chat/README.md`

### @site

Este contexto contém os componentes responsáveis por "lançar" e integrar o chat em uma página web. Atualmente, inclui o `<site-laucher>`, o botão que inicia a interação do usuário.

-   Veja mais em: `@./site/README.md`

### @std

A nossa biblioteca padrão interna. É um conjunto de módulos e utilitários reutilizáveis que fornecem a base para a arquitetura do projeto, incluindo decoradores, manipulação do DOM, sistema de eventos, tokens de design (pixel) e muito mais.

-   Veja mais em: `@./std/README.md`

## Instruções de Configuração

(Forneça instruções sobre como configurar o projeto para desenvolvimento e teste.)

## Convenções

Para manter a consistência e a qualidade do projeto, seguimos as convenções abaixo.

### Estilo de Código

-   **Ferramenta:** Utilizamos o [Biome.js](https://biomejs.dev/) para formatação e linting.
-   **Aplicação:** As regras são verificadas automaticamente antes de cada commit através do `lint-staged` e `husky`. É recomendado rodar `bunx @biomejs/biome check --write .` antes de commitar.
-   **Organização de Classes:** Para manter a legibilidade, as classes devem seguir uma ordem estrita de agrupamento e ordem alfabética.
    -   **Ordem de Agrupamento:**
        1.  Membros (propriedades)
        2.  Getters e Setters
        3.  Getters e Setters Estáticos
        4.  Construtor
        5.  Métodos
        6.  Métodos Estáticos
        7.  Bloco de inicialização estáticos
    -   **Ordem Alfabética:** Dentro de cada grupo (exceto o construtor), os itens devem ser declarados em ordem alfabética.
-   **Complexidade Ciclomática:** Para garantir funções simples e de responsabilidade única, a complexidade de getters, setters, métodos, construtores e funções não deve ser superior a 1. Isso significa que não devem conter ramificações (ex: `if`, `for`, `switch`, `?`).
-   **Linguagem Ubíqua (Ubiquos Language):** Para manter a consistência e clareza do domínio, todo o código (nomes de classes, funções, variáveis, etc.) deve aderir à linguagem ubíqua definida pelo projeto, contexto ou módulo.

### Mensagens de Commit

-   **Padrão:** Adotamos o [Conventional Commits](https://www.conventionalcommits.org/).
-   **Formato:** `<tipo>(<escopo>): <descrição>`
    -   **Exemplo:** `feat(bar): adiciona validação de formulário`
    -   **Exemplo:** `fix(display): corrige quebra de layout em telas menores`
-   **Regras:**
    -   O título do commit (`<descrição>`) deve ser escrito em letras minúsculas.
    -   A soma do título e do corpo do commit não deve exceder 100 caracteres.

### Arquitetura

-   **Filosofia:** "HTML First" e Arquitetura Orientada a Hipermídia (HDA), onde os componentes são autônomos.
-   **Padrões:**
    -   **OOP:** A lógica principal de cada componente é encapsulada em uma classe (Web Component).
    -   **AOP:** Funcionalidades transversais (renderização, eventos, etc.) são aplicadas de forma declarativa com **Decorators** (ex: `@paint`, `@on.click`, `@logger`).

### Estrutura de Arquivos

-   Cada componente reside em seu próprio diretório.
-   A estrutura interna de um diretório de componente geralmente segue o padrão:
    -   `component.js`: Define a classe do Web Component.
    -   `style.js`: Contém o CSS do componente.
    -   `index.js`: Ponto de entrada que exporta o componente.
    -   `interfaces.js`: Agrupa os metadados (Symbols) para visibilidade de métodos (privados).
    -   `*.ts`: Arquivos TypeScript com definições de tipos ou lógicas complexas.
    -   `*.test.ts`: Testes unitários para o arquivo `.ts` correspondente.

### Organização de Classes

Para manter a legibilidade e a previsibilidade do código, as classes devem seguir uma ordem estrita de organização, tanto para o agrupamento de membros quanto para a ordem alfabética.

-   **Ordem de Agrupamento:**
    1.  Membros (propriedades)
    2.  Getters e Setters
    3.  Getters e Setters Estáticos
    4.  Construtor
    5.  Métodos
    6.  Métodos Estáticos
    7.  Bloco de inicialização estáticos

-   **Ordem Alfabética:** Dentro de cada um dos grupos acima (exceto o construtor), os itens devem ser declarados em ordem alfabética.

## Protocolos

### <PROTOCOL:INCLUDE>

- **Gatilho:** Ao encontrar uma referência no formato `@./path/to/file.md` em qualquer arquivo de contexto.
- **Ação:** O agente DEVE usar a ferramenta `read_file` para ler o conteúdo do arquivo referenciado.
- **Comportamento:** O conteúdo do arquivo lido deve ser tratado como se fizesse parte do documento de contexto original, para fins de entendimento e resposta. O agente não deve mostrar o conteúdo do arquivo para o usuário, a menos que seja solicitado.

### <PROTOCOL:EXPLAIN>

- **Gatilho:** Quando o usuário solicitar uma explicação sobre um trecho de código, conceito ou arquitetura do projeto.
- **Ação:** O agente DEVE analisar o código-fonte e a documentação para fornecer uma explicação clara e concisa.
- **Comportamento:**
    1.  **Análise de Contexto:** Antes de responder, o agente deve utilizar as ferramentas (`read_file`, `search_file_content`) para examinar os arquivos relevantes e entender o contexto da pergunta.
    2.  **Linguagem Ubíqua:** A explicação deve, obrigatoriamente, utilizar a linguagem ubíqua do projeto (ex: Web Component, Dataflow, AOP, `@paint`, `@on.click`).
    3.  **Foco na Arquitetura:** As explicações devem conectar o código aos padrões arquitetônicos do projeto (OOP, AOP, HDA).
    4.  **Clareza e Concisão:** A resposta deve ser direta, evitando jargões desnecessários e focando nos aspectos mais importantes para o entendimento do usuário.
    5.  **Exemplos Práticos:** Sempre que possível, ilustrar a explicação com exemplos de código curtos e relevantes extraídos do próprio projeto.

### <PROTOCOL:PLAN>

- **Gatilho:** Antes de iniciar qualquer tarefa que envolva modificação de código (bugs, features, refatoração).
- **Ação:** O agente DEVE criar um plano de ação detalhado e apresentá-lo ao usuário para aprovação.
- **Comportamento:**
    1.  **Fase de Compreensão:** O plano deve começar com uma fase de investigação, utilizando `glob`, `read_file` e `search_file_content` para entender o código existente, as convenções e os arquivos de teste relevantes.
    2.  **Plano Detalhado:** Apresentar um plano numerado e passo a passo das ações que serão tomadas.
    3.  **Adesão às Convenções:** O plano deve mencionar explicitamente a adesão às convenções do projeto (estilo de código, arquitetura, estrutura de arquivos).
    4.  **Estratégia de Verificação:** O plano DEVE incluir uma etapa de verificação, como a execução de testes (`bun test`) e linting (`bunx @biomejs/biome check --write .`).
    5.  **Aprovação do Usuário:** O agente deve aguardar a aprovação explícita do usuário antes de prosseguir para a fase de implementação.

### <PROTOCOL:IMPLEMENT>

- **Gatilho:** Após o usuário aprovar um plano de ação.
- **Ação:** O agente DEVE executar o plano utilizando as ferramentas disponíveis para modificar o código.
- **Comportamento:**
    1.  **Execução Fiel:** O agente deve seguir estritamente os passos definidos no plano aprovado.
    2.  **Uso Preciso das Ferramentas:**
        -   Para modificações, usar `replace` com contexto suficiente (pelo menos 3 linhas antes e depois) para garantir a precisão.
        -   Para novos arquivos, usar `write_file`.
        -   Sempre usar caminhos absolutos para os arquivos.
    3.  **Atomicidade:** As alterações devem ser feitas em passos pequenos e atômicos, conforme definido no plano.
    4.  **Verificação Pós-Implementação:** Após a modificação, o agente deve executar os comandos de verificação (testes, linter) definidos no plano.
    5.  **Protocolo de Micro-Commit:** Após cada modificação de arquivo bem-sucedida e verificada, o agente DEVE seguir o `<PROTOCOL:MICRO_COMMIT>`.

### <PROTOCOL:MICRO_COMMIT>

-   **Gatilho:** Após a conclusão bem-sucedida de qualquer ferramenta que modifique o sistema de arquivos (`replace`, `write_file`, etc.) que tenha sido previamente autorizada pelo usuário.
-   **Ação:** O agente DEVE iniciar imediatamente o processo de commit para a alteração realizada.
-   **Comportamento:** O agente irá gerar uma mensagem de commit concisa e compatível com as convenções do projeto, e executará o commit sem solicitar uma segunda confirmação. A aprovação da modificação do arquivo implica a aprovação do commit subsequente. O agente informará o sucesso da operação de commit após a sua conclusão.
