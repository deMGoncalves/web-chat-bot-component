# Arquivo de Configuração Gemini

Este arquivo fornece contexto, convenções e protocolos para a IA Gemini, garantindo consistência e qualidade no desenvolvimento do projeto.

## 1. Visão Geral do Projeto

Este projeto representa a vanguarda da tecnologia web, com o objetivo de criar um componente de chat de IA de alta performance, nativo e agnóstico de frameworks. A arquitetura é baseada em padrões web abertos, incluindo:

-   **Web Components:** Para criar uma tag HTML encapsulada e reutilizável.
-   **Web Workers:** Para garantir que a interface permaneça responsiva durante o processamento pesado.
-   **WebAssembly (Wasm) e WebLLM:** Para executar modelos de linguagem diretamente no navegador, oferecendo performance e privacidade.

O resultado final será uma biblioteca leve, distribuída como uma única tag, que pode ser facilmente integrada em qualquer aplicação web (seja com ou sem framework) sem impor uma stack de tecnologia específica. A filosofia é ser uma ferramenta, não um ecossistema fechado.

## 2. Arquitetura e Filosofia

A arquitetura do projeto é concebida sob a filosofia **HTML First** e implementa um padrão análogo à **Hypermedia Driven Architecture (HDA)** no frontend.

### 2.1. Pilares da Arquitetura

Para alcançar a modularidade, a arquitetura combina três pilares:

-   **Programação Orientada a Objetos (OOP):** A lógica principal de cada componente é encapsulada em uma classe (Web Component).
-   **Programação Orientada a Aspectos (AOP):** Funcionalidades transversais (renderização, eventos, logging) são aplicadas de forma declarativa com **Decorators** (ex: `@paint`, `@on.click`, `@logger`), mantendo a lógica do componente limpa e focada.
-   **Dataflow (Event Bus):** Os componentes são autônomos e suas interações são orquestradas por um barramento de eventos, em vez de acoplamento direto.

### 2.2. Reatividade e Dataflow

A reatividade do sistema emerge da sinergia desses padrões. Quando o estado de um componente é alterado, os aspectos de renderização `@repaint` (redesenha o HTML e CSS) e `@retouch` (reaplica apenas o CSS) são acionados automaticamente para atualizar a UI de forma eficiente. O decorador `@didPaint` permite executar lógicas que dependem da primeira renderização do componente.

Esse ciclo reativo é conectado ao fluxo de dados global pelo componente `<chat-on>`, que atua como o "controle de hipermídia", ligando os eventos do barramento às ações dos componentes de forma declarativa, diretamente no HTML.

## 3. Estrutura do Projeto

O projeto é organizado em contextos e diretórios padronizados.

### 3.1. Contextos Principais

O projeto é dividido em três contextos principais, cada um com sua própria responsabilidade:

-   **`@chat`**: O coração do projeto, onde todos os Web Components que formam a interface do chat são definidos. Inclui a lógica para a renderização de mensagens, a interação com o modelo de IA e o gerenciamento do estado do chat.
    -   *Veja mais em: `@./chat/README.md`*
-   **`@site`**: Contém os componentes responsáveis por "lançar" e integrar o chat em uma página web. Atualmente, inclui o `<site-laucher>`, o botão que inicia a interação do usuário.
    -   *Veja mais em: `@./site/README.md`*
-   **`@std`**: Nossa biblioteca padrão interna. É um conjunto de módulos e utilitários reutilizáveis que fornecem a base para a arquitetura do projeto (decoradores, DOM, eventos, tokens de design, etc.).
    -   *Veja mais em: `@./std/README.md`*

### 3.2. Estrutura de um Componente

Cada componente reside em seu próprio diretório e geralmente segue o padrão:

-   `component.js`: Define a classe do Web Component.
-   `style.js`: Contém o CSS do componente.
-   `index.js`: Ponto de entrada que exporta o componente.
-   `interfaces.js`: Agrupa os metadados (Symbols) para visibilidade de métodos (privados).
-   `*.ts`: Arquivos TypeScript com definições de tipos ou lógicas complexas.
-   `*.test.ts`: Testes unitários para o arquivo `.ts` correspondente.

## 4. Convenções de Código

Para manter a consistência, a legibilidade e a qualidade do projeto, seguimos as convenções abaixo.

### 4.1. Linguagem Ubíqua (Ubiquitous Language)

Para manter a consistência e clareza do domínio, todo o código (nomes de classes, funções, variáveis, etc.) deve aderir à linguagem ubíqua definida pelo projeto, contexto ou módulo.

### 4.2. Formatação e Linting

-   **Ferramenta:** Utilizamos o [Biome.js](https://biomejs.dev/) para formatação e linting.
-   **Aplicação:** As regras são verificadas automaticamente antes de cada commit através do `lint-staged` e `husky`.
-   **Comando:** É recomendado rodar `bunx @biomejs/biome check --write .` antes de commitar.

### 4.3. Organização de Código

-   **Ordem de Agrupamento em Classes:**
    1.  Membros (propriedades)
    2.  Getters e Setters
    3.  Getters e Setters Estáticos
    4.  Construtor
    5.  Métodos
    6.  Métodos Estáticos
    7.  Bloco de inicialização estático
-   **Ordem Alfabética em Classes:** Dentro de cada grupo (exceto o construtor), os itens devem ser declarados em ordem alfabética.
-   **Ordem Alfabética no CSS:** As propriedades CSS dentro de cada seletor devem ser declaradas em ordem alfabética.

### 4.4. Complexidade Ciclomática

Para garantir funções simples e de responsabilidade única, a complexidade de getters, setters, métodos, construtores e funções não deve ser superior a 1. Isso significa que não devem conter ramificações (ex: `if`, `for`, `switch`, `?`).

### 4.5. Mensagens de Commit

-   **Padrão:** Adotamos o [Conventional Commits](https://www.conventionalcommits.org/).
-   **Formato:** `<tipo>(<escopo>): <descrição>`
    -   *Exemplo:* `feat(bar): adiciona validação de formulário`
    -   *Exemplo:* `fix(display): corrige quebra de layout em telas menores`
-   **Regras:**
    -   O título do commit (`<descrição>`) deve ser escrito em letras minúsculas.
    -   A soma do título e do corpo do commit não deve exceder 100 caracteres.

## 5. Instruções para o Agente de IA (Protocolos)

Os protocolos a seguir governam o comportamento do agente de IA ao interagir com o projeto.

### 5.1. <PROTOCOL:INCLUDE>

-   **Gatilho:** Ao encontrar uma referência no formato `@./path/to/file.md` em qualquer arquivo de contexto.
-   **Ação:** O agente DEVE usar a ferramenta `read_file` para ler o conteúdo do arquivo referenciado.
-   **Comportamento:** O conteúdo do arquivo lido deve ser tratado como se fizesse parte do documento de contexto original, para fins de entendimento e resposta. O agente não deve mostrar o conteúdo do arquivo para o usuário, a menos que seja solicitado.

### 5.2. <PROTOCOL:EXPLAIN>

-   **Gatilho:** Quando o usuário solicitar uma explicação sobre um trecho de código, conceito ou arquitetura do projeto.
-   **Ação:** O agente DEVE analisar o código-fonte e a documentação para fornecer uma explicação clara e concisa, utilizando a **Linguagem Ubíqua** e os conceitos da arquitetura do projeto.
-   **Comportamento:**
    1.  **Análise de Contexto:** Utilizar `read_file` e `search_file_content` para examinar os arquivos relevantes.
    2.  **Linguagem Ubíqua:** A explicação deve, obrigatoriamente, utilizar a linguagem do projeto (ex: Web Component, Dataflow, AOP, `@paint`).
    3.  **Foco na Arquitetura:** Conectar o código aos padrões arquitetônicos (OOP, AOP, HDA).
    4.  **Clareza e Concisão:** A resposta deve ser direta e focada.
    5.  **Exemplos Práticos:** Ilustrar com exemplos de código curtos e relevantes do próprio projeto.

### 5.3. <PROTOCOL:PLAN>

-   **Gatilho:** Antes de iniciar qualquer tarefa que envolva modificação de código (bugs, features, refatoração).
-   **Ação:** O agente DEVE criar um plano de ação detalhado e apresentá-lo ao usuário para aprovação.
-   **Comportamento:**
    1.  **Fase de Compreensão:** Investigar o código com `glob`, `read_file`, e `search_file_content`.
    2.  **Plano Detalhado:** Apresentar um plano numerado e passo a passo.
    3.  **Adesão às Convenções:** Mencionar explicitamente a adesão às convenções do projeto.
    4.  **Estratégia de Verificação:** Incluir uma etapa de verificação com testes (`bun test`) e linting (`bunx @biomejs/biome check --write .`).
    5.  **Aprovação do Usuário:** Aguardar a aprovação explícita do usuário antes de prosseguir.

### 5.4. <PROTOCOL:IMPLEMENT>

-   **Gatilho:** Após o usuário aprovar um plano de ação.
-   **Ação:** O agente DEVE executar o plano utilizando as ferramentas disponíveis.
-   **Comportamento:**
    1.  **Execução Fiel:** Seguir estritamente os passos do plano aprovado.
    2.  **Uso Preciso das Ferramentas:** Usar `replace` com contexto amplo, `write_file` para novos arquivos, e sempre com caminhos absolutos.
    3.  **Atomicidade:** Realizar alterações em passos pequenos e atômicos.
    4.  **Verificação Pós-Implementação:** Executar os comandos de verificação (testes, linter) definidos no plano.
    5.  **Protocolo de Micro-Commit:** Seguir o `<PROTOCOL:MICRO_COMMIT>` após cada modificação bem-sucedida.

### 5.5. <PROTOCOL:MICRO_COMMIT>

-   **Gatilho:** Após a conclusão bem-sucedida de uma modificação de arquivo (`replace`, `write_file`, etc.) autorizada pelo usuário.
-   **Ação:** O agente DEVE iniciar imediatamente o processo de commit para a alteração realizada.
-   **Comportamento:** O agente irá gerar uma mensagem de commit concisa e compatível com as convenções do projeto, e executará o commit sem solicitar uma segunda confirmação. A aprovação da modificação do arquivo implica a aprovação do commit subsequente.

## 6. Configuração do Ambiente

(Forneça instruções sobre como configurar o projeto para desenvolvimento e teste.)