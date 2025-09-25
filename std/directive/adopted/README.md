# @std/directive/adopted

O decorator `@adopted` anexa um método ao ciclo de vida `adoptedCallback` de um web component.

## Importação

```javascript
import { adopted } from '@std/directive'
```

## Uso

```javascript
import { adopted } from '@std/directive'

class MyComponent extends HTMLElement {
  @adopted
  onAdopted() {
    // Lógica a ser executada quando o componente é movido para um novo documento.
  }
}
```

## Comportamento (Detalhes da Modificação)

Este decorator modifica o `adoptedCallback` do Web Component, garantindo que o método decorado seja executado após a chamada original do `adoptedCallback`. Ele permite que a lógica específica do componente seja executada no momento em que o componente é adotado por um novo documento.
