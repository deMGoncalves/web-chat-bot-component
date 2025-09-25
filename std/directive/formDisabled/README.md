# @std/directive/formDisabled

O decorator `@formDisabled` anexa um método ao ciclo de vida `formDisabledCallback` de um web component.

## Importação

```javascript
import { formDisabled } from '@std/directive'
```

## Uso

```javascript
import { formDisabled } from '@std/directive'

class MyComponent extends HTMLElement {
  @formDisabled
  onFormDisabled(disabled) {
    // Lógica a ser executada quando o estado de desabilitado do formulário muda.
  }
}
```

## Comportamento (Detalhes da Modificação)

Este decorator modifica o `formDisabledCallback` do Web Component, garantindo que o método decorado seja executado após a chamada original do `formDisabledCallback`. Ele permite que a lógica específica do componente seja executada quando o estado de desabilitado do formulário muda.
