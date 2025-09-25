# @std/directive/disconnected

O decorator `@disconnected` anexa um método ao ciclo de vida `disconnectedCallback` de um web component.

## Importação

```javascript
import { disconnected } from '@std/directive'
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
}
```

## Comportamento (Detalhes da Modificação)

Este decorator modifica o `disconnectedCallback` do Web Component, garantindo que o método decorado seja executado após a chamada original do `disconnectedCallback`. Ele permite que a lógica específica do componente seja executada no momento em que o componente é removido do DOM.
