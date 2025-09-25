# Contexto: @site

## Visão Geral

O contexto `@site` é responsável por prover os pontos de entrada e integração do componente de chat em uma página web qualquer. Ele contém os elementos que "lançam" a experiência do chat, agindo como uma ponte entre a página hospedeira e o widget de chat.

## Componentes Principais

-   **`<site-laucher>`**: É o componente principal deste contexto. Ele renderiza um botão flutuante (Floating Action Button) no canto da tela, que serve como o gatilho inicial para o usuário abrir a janela do chat.

## Interação

Ao ser clicado, o `<site-laucher>` não abre o chat diretamente. Em vez disso, ele dispara um evento `click` genérico. A filosofia é manter o acoplamento baixo: a página ou aplicação que consome o componente deve escutar esse evento e então decidir como e quando instanciar e exibir o componente `<chat-bot>` do contexto `@chat`.

Isso torna a integração flexível, permitindo que o desenvolvedor controle a lógica de carregamento e visibilidade do chat.
