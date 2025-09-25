# @std/directive/disconnected

O decorator `@disconnected` anexa um método ao ciclo de vida `disconnectedCallback` de um web component.

## Importação

```javascript
import { disconnected } from '@std/directive/disconnected'
```

## Uso

```javascript
import { disconnected } from '@std/directive'

class MyComponent extends HTMLElement {
  @disconnected
  onDisconnected() {
    // Lógica a ser executada quando o componente é removido no DOM.
  }
}
```
