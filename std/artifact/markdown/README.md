# Markdown Module

Este módulo fornece uma interface simples para renderizar texto em Markdown para HTML.

## Visão Geral

O módulo encapsula a biblioteca `showdown` em uma classe estática `Markdown`, pré-configurada para as necessidades do projeto.

### Funcionalidades

- Renderização de Markdown para HTML.
- Configurações padrão, como criação de tabelas, links automáticos e sanitização.
- Abertura de links em uma nova aba.

## Como Usar

Importe a classe e use o método `render` para converter uma string Markdown em HTML.

```javascript
import { Markdown } from '@std/artifact/markdown';

const markdownText = '# Olá, Mundo!\n\nIsso é um teste.';
const html = Markdown.render(markdownText);

console.log(html); // <h1 id="olámundo">Olá, Mundo!</h1><p>Isso é um teste.</p>
```

