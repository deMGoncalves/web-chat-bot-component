# @std/directive/disconnected

O decorator `@disconnected` anexa um método ao ciclo de vida `disconnectedCallback` de um web component.

## Instalação

```bash
bun add @std/directive
```

## Uso

```javascript
import { disconnected } from '@std/directive/disconnected'

class MyComponent extends HTMLElement {
  @disconnected
  disconnectedCallback() {
    // Lógica a ser executada quando o componente é removido no DOM.
  }
}
```
