# Contexto: @std/artifact

## Visão Geral

O módulo `@std/artifact` funciona como uma **Camada Anticorrupção (Anti-Corruption Layer - ACL)** para o projeto. Sua principal responsabilidade é encapsular bibliotecas de terceiros, evitando que o restante do código tenha acoplamento direto com dependências externas.

Ao criar um "artefato" para cada biblioteca, garantimos que o projeto interaja apenas com interfaces definidas e controladas por nós. Isso nos dá flexibilidade para trocar uma dependência no futuro, centraliza a configuração e protege o domínio do projeto de ser influenciado por estruturas de dados ou APIs de terceiros.

## Módulos Disponíveis

-   **`@std/artifact/markdown`**: Encapsula a biblioteca `showdown`, fornecendo uma interface única e pré-configurada para a conversão de Markdown para HTML.
    -   *Veja mais em: `@./markdown/README.md`*
