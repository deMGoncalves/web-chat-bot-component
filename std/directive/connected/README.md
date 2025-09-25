# @std/directive/connected

O decorator `@connected` anexa um método ao ciclo de vida `connectedCallback` de um web component.

## Importação

```javascript
import { connected } from '@std/directive/connected'
```

## Uso

```javascript
import { connected } from '@std/directive'

class MyComponent extends HTMLElement {
  @connected
  onConnected() {
    // Lógica a ser executada quando o componente é inserido no DOM.
  }
}
```
