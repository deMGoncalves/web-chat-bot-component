# @std/directive/connected

O decorator `@connected` anexa um método ao ciclo de vida `connectedCallback` de um web component.

## Importação

```javascript
import { connected } from '@std/directive'
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

## Comportamento (Detalhes da Modificação)

Este decorator modifica o `connectedCallback` do Web Component, garantindo que o método decorado seja executado após a chamada original do `connectedCallback`. Ele permite que a lógica específica do componente seja executada no momento em que o componente é inserido no DOM.
