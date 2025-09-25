# Contexto: @std/directive

## Visão Geral

O módulo `@std/directive` fornece um conjunto de decorators que atuam como "aspectos" para Web Components, permitindo a aplicação de lógicas de ciclo de vida de forma declarativa e não invasiva. Inspirado pela Programação Orientada a Aspectos (AOP), ele ajuda a manter as classes de componentes limpas e focadas em suas responsabilidades principais.

Cada diretiva encapsula um hook de ciclo de vida específico (ex: `connectedCallback`, `adoptedCallback`), tornando o código mais legível e organizado.

## Diretivas Disponíveis

-   **`@std/directive/adopted`**: Anexa um método ao ciclo de vida `adoptedCallback`.
    -   *Veja mais em: `@./adopted/README.md`*
-   **`@std/directive/attributeChanged`**: Observa mudanças em um atributo e atualiza uma propriedade da classe.
    -   *Veja mais em: `@./attributeChanged/README.md`*
-   **`@std/directive/connected`**: Anexa um método ao ciclo de vida `connectedCallback`.
    -   *Veja mais em: `@./connected/README.md`*
-   **`@std/directive/define`**: Define um custom element no registro de custom elements.
    -   *Veja mais em: `@./define/README.md`*
-   **`@std/directive/disconnected`**: Anexa um método ao ciclo de vida `disconnectedCallback`.
    -   *Veja mais em: `@./disconnected/README.md`*
-   **`@std/directive/formAssociated`**: Anexa um método ao ciclo de vida `formAssociatedCallback`.
    -   *Veja mais em: `@./formAssociated/README.md`*
-   **`@std/directive/formDisabled`**: Anexa um método ao ciclo de vida `formDisabledCallback`.
    -   *Veja mais em: `@./formDisabled/README.md`*
-   **`@std/directive/formReset`**: Anexa um método ao ciclo de vida `formResetCallback`.
    -   *Veja mais em: `@./formReset/README.md`*
-   **`@std/directive/formStateRestore`**: Anexa um método ao ciclo de vida `formStateRestoreCallback`.
    -   *Veja mais em: `@./formStateRestore/README.md`*
