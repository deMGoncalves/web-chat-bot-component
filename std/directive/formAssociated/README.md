# @std/directive/formAssociated

O decorator `@formAssociated` anexa um método ao ciclo de vida `formAssociatedCallback` de um web component.

## Importação

```javascript
import { formAssociated } from '@std/directive'
```

## Uso

```javascript
import { formAssociated } from '@std/directive'

class MyComponent extends HTMLElement {
  @formAssociated
  onFormAssociated(form) {
    // Lógica a ser executada quando o componente é associado a um formulário.
  }
}
```

## Comportamento (Detalhes da Modificação)

Este decorator modifica o `formAssociatedCallback` do Web Component, garantindo que o método decorado seja executado após a chamada original do `formAssociatedCallback`. Ele permite que a lógica específica do componente seja executada quando o componente é associado a um formulário.
