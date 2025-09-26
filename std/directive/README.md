# Contexto: @std/directive

## Visão Geral

O módulo `@std/directive` é um pilar fundamental na construção de Web Components no projeto Gemini. Ele fornece um conjunto de decorators que atuam como "aspectos" para Web Components, permitindo a aplicação de lógicas de ciclo de vida de forma declarativa e não invasiva. Inspirado pela Programação Orientada a Aspectos (AOP), seu propósito é manter as classes de componentes limpas, focadas em suas responsabilidades principais e livres da verbosidade e complexidade inerente à manipulação direta dos callbacks nativos do ciclo de vida.

Cada diretiva encapsula um hook de ciclo de vida específico (ex: `connectedCallback`, `adoptedCallback`), tornando o código mais legível, organizado e padronizado.

## Princípios de Uso

Para garantir a consistência e a manutenibilidade dos Web Components no projeto Gemini, as seguintes regras são mandatórias:

1.  **Obrigatoriedade das Diretivas:** A construção de qualquer Web Component DEVE utilizar as diretivas fornecidas por `@std/directive` para gerenciar seus ciclos de vida.
2.  **Preferência por Decorators:** É estritamente proibido o uso direto dos métodos de callback nativos do ciclo de vida (e.g., `connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`) dentro das classes dos componentes. Em vez disso, DEVE-SE dar preferência exclusiva aos decorators correspondentes, que encapsulam e estendem essa funcionalidade de forma declarativa.

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
