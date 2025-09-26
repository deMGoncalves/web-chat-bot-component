# Documento de Governança do Projeto Gemini

Este documento estabelece as diretrizes, convenções e protocolos que regem o desenvolvimento do projeto Gemini, visando assegurar consistência, qualidade e eficiência. Para uma visão geral do produto, consulte o `@./README.md`.

## I. Introdução

### A. Propósito do Documento

Este documento serve como a fonte autoritária para todas as normas técnicas e operacionais do projeto Gemini. Ele detalha a arquitetura, a estrutura do código, as convenções de desenvolvimento e os protocolos de interação para agentes de inteligência artificial, garantindo um ambiente de desenvolvimento unificado e de alta qualidade.

### B. Visão Geral do Projeto

O projeto Gemini visa desenvolver um componente de chat de IA de alta performance, nativo e agnóstico de frameworks, utilizando padrões web abertos como Web Components, Web Workers e WebAssembly (Wasm) com WebLLM. O objetivo é entregar uma biblioteca leve e facilmente integrável em qualquer aplicação web.

## II. Princípios Fundamentais da Arquitetura

### A. Filosofia HTML First e Arquitetura Orientada a Hipermídia (HDA)

A arquitetura do projeto é fundamentada na filosofia **HTML First**, implementando um padrão análogo à **Hypermedia Driven Architecture (HDA)** no frontend. Esta abordagem prioriza o HTML como a principal fonte de verdade para a estrutura e o comportamento da interface, com a lógica de aplicação enriquecendo progressivamente a experiência do usuário.

### B. Pilares da Modularidade

A modularidade e a manutenibilidade são alcançadas através da combinação de três pilares arquitetônicos:

1.  **Programação Orientada a Objetos (OOP):** A lógica central de cada componente é encapsulada em classes (Web Components), promovendo encapsulamento e estrutura.
2.  **Programação Orientada a Aspectos (AOP):** Funcionalidades transversais (e.g., renderização, tratamento de eventos, logging) são aplicadas de forma declarativa através de **Decorators** (e.g., `@paint`, `@on.click`, `@logger`), mantendo a lógica de negócio dos componentes limpa e focada.
3.  **Dataflow (Barramento de Eventos):** Componentes são autônomos e interagem de forma desacoplada, orquestrados por um barramento de eventos. Isso minimiza dependências diretas e facilita a escalabilidade.

### C. Reatividade e Dataflow

A reatividade do sistema é uma consequência da sinergia dos padrões arquitetônicos. Alterações no estado de um componente acionam automaticamente aspectos de renderização como `@repaint` (redesenha HTML e CSS) e `@retouch` (reaplica apenas CSS), garantindo atualizações eficientes da UI. O decorador `@didPaint` permite a execução de lógicas pós-renderização. O componente `<chat-on>` atua como o "controle de hipermídia", conectando eventos do barramento a ações de componentes de forma declarativa no HTML, fechando o ciclo reativo do fluxo de dados global.

## III. Estrutura e Organização do Projeto

### A. Contextos Principais

O projeto é logicamente dividido em três contextos principais, cada um com responsabilidades distintas:

-   **`@chat`**: Contém todos os Web Components que compõem a interface do chat, incluindo lógica de renderização de mensagens, interação com modelos de IA e gerenciamento de estado. (Ver: `@./chat/README.md`)
-   **`@site`**: Abriga os componentes responsáveis por integrar e lançar o chat em uma página web, como o `<site-laucher>`. (Ver: `@./site/README.md`)
-   **`@std`**: A biblioteca padrão interna, fornecendo módulos e utilitários reutilizáveis que formam a base arquitetônica do projeto (e.g., decoradores, DOM, eventos, tokens de design). (Ver: `@./std/README.md`)

### B. Estrutura Padrão de um Componente

Cada componente reside em seu próprio diretório e adere à seguinte estrutura padrão:

-   `README.md`: Documentação específica do componente.
-   `component.js`: Definição da classe do Web Component.
-   `style.js`: Estilos CSS do componente.
-   `index.js`: Ponto de entrada que exporta o componente.
-   `interfaces.js`: Agrupa metadados (Symbols) para visibilidade de métodos (privados).
-   `*.ts`: Arquivos TypeScript para definições de tipos ou lógicas complexas.
-   `*.test.ts`: Testes unitários correspondentes aos arquivos `.ts`.

### C. Grafo de Documentação (`README.md`s)

O arquivo `GEMINI.md` é o ponto de entrada unificado para toda a documentação do projeto. Todos os arquivos `README.md` devem ser acessíveis a partir de `GEMINI.md` através de referências no formato `@./path/to/readme.md`, garantindo uma estrutura de documentação conectada e navegável.

### D. Co-localização de Módulos/Componentes

Arquivos que possuem uma relação funcional direta e trabalham em conjunto (e.g., um módulo/componente, seu `index.js`, `README.md` e arquivos de teste) DEVEM ser mantidos no mesmo diretório. Esta prática promove a coesão e simplifica a manutenção e a compreensão do código.

## IV. Convenções de Código

### A. Linguagem Ubíqua (Ubiquitous Language)

Todo o código (nomes de classes, funções, variáveis, etc.) DEVE aderir estritamente à linguagem ubíqua definida pelo domínio do projeto, contexto ou módulo. É proibido o uso de notação húngara ou prefixos/sufixos que indiquem o tipo ou a natureza técnica de uma variável (e.g., `sNome`, `iIdade`, `ConverterMock`). Os nomes devem refletir o significado conceitual no domínio.

### B. Paradigma de Programação

O paradigma de programação padrão é **Programação Orientada a Objetos (OOP)**. Novos códigos DEVE-SE, preferencialmente, ser implementados utilizando classes. Exceções são permitidas para abordagens funcionais (funções puras) em contextos de simplicidade evidente e responsabilidade única (e.g., definições de UI sem estado, funções utilitárias puras em `@std/spark`).

### C. Formatação e Linting

A formatação e o linting são gerenciados pelo [Biome.js](https://biomejs.dev/). As regras são aplicadas automaticamente via `lint-staged` e `husky` antes de cada commit. É mandatório executar `bunx @biomejs/biome check --write .` antes de commitar para garantir a conformidade.

### D. Organização de Código

1.  **Ordem de Agrupamento em Classes:**
    -   Membros (propriedades)
    -   Getters e Setters
    -   Getters e Setters Estáticos
    -   Construtor
    -   Métodos
    -   Métodos Estáticos
    -   Bloco de inicialização estático
2.  **Ordem Alfabética em Classes:** Dentro de cada grupo (exceto o construtor), os itens DEVEM ser declarados em ordem alfabética.
3.  **Ordem Alfabética no CSS:** As propriedades CSS dentro de cada seletor DEVEM ser declaradas em ordem alfabética.

### E. Convenções de Export

A convenção padrão é o uso de **exportações nomeadas** (`export { ... }`). O uso de `export default` é permitido APENAS no arquivo `index.js` de um módulo, e somente quando este agrega múltiplas exportações, representando a exportação principal do módulo. Se um módulo expõe apenas um item, ele DEVE ser exportado de forma nomeada.

### F. Convenções de Nomenclatura e Importação

1.  **Nomenclatura de Arquivos de Módulo/Componente:** O arquivo principal de um módulo ou componente DEVE ter o mesmo nome da pasta que o contém. O arquivo de teste correspondente DEVE seguir a mesma convenção (e.g., `foo/foo.js` e `foo/foo.test.ts`).
2.  **Importação de Módulos JavaScript/TypeScript:** A extensão do arquivo NÃO DEVE ser incluída em importações de módulos JavaScript ou TypeScript (e.g., `import { meuModulo } from './meuModulo'`, não `./meuModulo.js`).
3.  **Uso de Aliases para Importação:** Imports NÃO DEVEM subir níveis de diretório (`../path/to/`). Em vez disso, DEVE-SE usar aliases que começam de um contexto raiz (e.g., `import { execute } from '@std/directive/execute'`).

### G. Complexidade Ciclomática

A complexidade ciclomática de getters, setters, métodos, construtores e funções NÃO DEVE ser superior a 1. Isso implica que essas unidades não DEVEM conter ramificações (e.g., `if`, `for`, `switch`, `?`), garantindo funções simples e de responsabilidade única.

### H. Mensagens de Commit

Adota-se o padrão [Conventional Commits](https://www.conventionalcommits.org/). O formato DEVE ser `<tipo>(<escopo>): <descrição>`, com o título em letras minúsculas e a soma do título e corpo não excedendo 100 caracteres.

### I. Idioma da Documentação

Toda a documentação do projeto, incluindo JSDoc, comentários de código e arquivos `README.md`, DEVE ser escrita em Português (Brasil), mantendo consistência terminológica alinhada à Linguagem Ubíqua.

### J. Documentação com JSDoc

Todo o código (`.js`, `.ts`) DEVE ser documentado com JSDoc para classes, métodos, funções, propriedades e módulos, utilizando marcações padrão como `@fileoverview`, `@module`, `@class`, `@function`, `@param`, `@returns`, `@type`, `@private`, `@public`, `@static` e `@example`.

### K. Princípio da Unidade Única

Cada arquivo (`.js` ou `.ts`) DEVE definir apenas uma única unidade construtiva (uma classe OU uma função). Múltiplas classes, múltiplas funções ou combinações não são permitidas no mesmo arquivo, promovendo responsabilidade única, alta coesão e baixo acoplamento.

### L. Convenções de Web Components e Ciclo de Vida

1.  **Uso Mandatório de Decorators para Ciclo de Vida:** A construção de qualquer Web Component DEVE utilizar exclusivamente os decorators fornecidos pelo módulo `@std/directive` para gerenciar seus callbacks de ciclo de vida (e.g., `connectedCallback`, `adoptedCallback`, `attributeChangedCallback`).
2.  **Proibição de Callbacks Nativos Diretos:** É estritamente proibido implementar diretamente os métodos de callback nativos do ciclo de vida dos Web Components. A preferência DEVE ser sempre pelos decorators correspondentes, que encapsulam e padronizam essa funcionalidade, promovendo um código mais limpo e declarativo.

## V. Convenções de Testes

### A. Filosofia de Testes

Os testes DEVEM focar na validação do fluxo de chamadas e interações entre unidades, utilizando mocks para simular dependências e verificar a correta invocação de métodos. A implementação interna de bibliotecas de terceiros NÃO DEVE ser testada; o foco é garantir que o código do projeto as utilize corretamente. Os testes DEVEM validar a correção do processo ("como"), não apenas o resultado final ("o quê").

### B. Idioma dos Testes

Todos os textos em arquivos de teste, incluindo blocos `describe` e `it` e comentários, DEVEM ser escritos em Português (Brasil).

## VI. Protocolos para o Agente de IA

Os protocolos a seguir governam o comportamento do agente de IA ao interagir com o projeto.

### A. <PROTOCOL:INCLUDE>

-   **Gatilho:** Referência no formato `@./path/to/file.md` em qualquer arquivo de contexto.
-   **Ação:** O agente DEVE usar `read_file` para ler o conteúdo do arquivo referenciado.
-   **Comportamento:** O conteúdo lido é integrado ao contexto original para entendimento, sem ser exibido ao usuário, a menos que solicitado.

### B. <PROTOCOL:EXPLAIN>

-   **Gatilho:** Solicitação do usuário para explicação de código, conceito ou arquitetura.
-   **Ação:** O agente DEVE analisar o código-fonte e a documentação para fornecer uma explicação clara e concisa.
-   **Comportamento:** A explicação DEVE utilizar a Linguagem Ubíqua, conectar o código aos padrões arquitetônicos (OOP, AOP, HDA), ser direta e focada, e incluir exemplos práticos do projeto.

### C. <PROTOCOL:PLAN>

-   **Gatilho:** Início de qualquer tarefa de modificação de código.
-   **Ação:** O agente DEVE criar e apresentar um plano de ação detalhado ao usuário para aprovação.
-   **Comportamento:** O plano DEVE ser numerado, passo a passo, mencionar a adesão às convenções, incluir estratégia de verificação (testes, linting) e aguardar aprovação explícita.

### D. <PROTOCOL:IMPLEMENT>

-   **Gatilho:** Aprovação do plano de ação pelo usuário.
-   **Ação:** O agente DEVE executar o plano utilizando as ferramentas disponíveis.
-   **Comportamento:** A execução DEVE ser fiel ao plano, usar ferramentas com precisão (`replace` com contexto amplo, `write_file` para novos arquivos, caminhos absolutos), realizar alterações atômicas, e incluir um ciclo de refinamento pós-alteração (JSDoc, READMEs, Testes, Linguagem Ubíqua). A verificação pós-implementação (testes, linter) é obrigatória, seguida pelo `<PROTOCOL:MICRO_COMMIT>`.

### E. <PROTOCOL:MICRO_COMMIT>

-   **Gatilho:** Conclusão bem-sucedida de uma modificação de arquivo autorizada.
-   **Ação:** O agente DEVE iniciar imediatamente o processo de commit.
-   **Comportamento:** O agente gerará uma mensagem de commit concisa e compatível com as convenções, executando o commit sem segunda confirmação, pois a aprovação da modificação implica a aprovação do commit.

### F. <PROTOCOL:LANGUAGE>

-   **Gatilho:** Interação com o usuário.
-   **Ação:** O agente DEVE utilizar exclusivamente o Português (Brasil) em todas as comunicações.
-   **Comportamento:** Todas as respostas, perguntas, explicações e textos direcionados ao usuário DEVEM ser formulados em Português (Brasil), mantendo um tom profissional e claro.

## VII. Configuração do Ambiente

(Instruções detalhadas sobre como configurar o projeto para desenvolvimento e teste serão fornecidas nesta seção.)