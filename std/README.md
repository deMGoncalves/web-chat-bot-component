# Contexto: @std (Standard Library)

## Visão Geral

`@std` é a biblioteca padrão interna do projeto. Ela é a fundação sobre a qual toda a arquitetura é construída, fornecendo um conjunto de módulos, utilitários e decoradores reutilizáveis que abstraem complexidades e promovem a consistência do código.

Esta biblioteca é a principal ferramenta para implementar os padrões de **Programação Orientada a Aspectos (AOP)** e **Dataflow** que definem o projeto.

## Módulos Principais

A `@std` é organizada em módulos, cada um com uma responsabilidade clara:

-   **`artifact`**: Utilitários para manipulação de artefatos de dados complexos. Atualmente, contém um wrapper para a biblioteca `showdown`, facilitando a conversão de Markdown para HTML.

-   **`directive`**: Um conjunto de decoradores que simplificam o ciclo de vida de Web Components e a definição de custom elements. Inclui `@define`, `@connected`, `@attributeChanged`, etc.

-   **`dom`**: Funções e decoradores para manipulação do DOM. É o coração do nosso sistema de renderização reativa, com os decoradores `@paint`, `@repaint` e `@retouch`, além de `html` e `css` para templates literais.

-   **`echo`**: A implementação do nosso barramento de eventos (Event Bus). Permite a comunicação desacoplada entre componentes, sendo a base do padrão Dataflow/HDA no frontend.

-   **`event`**: Fornece o decorador `@on` (ex: `@on.click`), que permite adicionar listeners de eventos de forma declarativa no código do componente.

-   **`logger`**: Expõe o decorador `@logger`, uma ferramenta de AOP para depuração que intercepta e imprime informações sobre chamadas de métodos e alterações de propriedades.

-   **`middleware`**: Decoradores de AOP (`@before`, `@after`, `@around`) que permitem interceptar e encapsular a lógica em torno da execução de métodos e setters.

-   **`mixin`**: Classes de alta ordem (Mixins) que podem ser combinadas com classes de componentes para adicionar funcionalidades reusáveis, como `@Headless` (para componentes sem UI) e `@Reveal` (para animações de surgimento).

-   **`pixel`**: O Design System do projeto. Contém um reset de CSS e todos os tokens de design (cores, espaçamento, tipografia, etc.) como variáveis CSS, garantindo uma UI consistente.

-   **`polyfill`**: Garante a compatibilidade com funcionalidades que não são universalmente suportadas em todos os navegadores, como `setImmediate`.

-   **`result`**: Um tipo de dado para programação funcional que permite tratar operações que podem falhar (sucesso/erro) de forma elegante.

-   **`spark`**: Uma coleção de pequenas funções puras e utilitárias, usadas principalmente para transformar dados no sistema de Dataflow (`echo`).
