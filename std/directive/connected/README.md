# @std/directive/connected

O decorator `@connected` anexa um método ao ciclo de vida `connectedCallback` de um web component.

## Instalação

```bash
bun add @std/directive
```

## Uso

```javascript
import { connected } from '@std/directive/connected'

@connected
class MyComponent extends HTMLElement {
  connectedCallback() {
    // Lógica a ser executada quando o componente é inserido no DOM.
  }
}
```
