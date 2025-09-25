# @std/directive/formReset

O decorator `@formReset` anexa um método ao ciclo de vida `formResetCallback` de um web component.

## Importação

```javascript
import { formReset } from '@std/directive'
```

## Uso

```javascript
import { formReset } from '@std/directive'

class MyComponent extends HTMLElement {
  @formReset
  onFormReset() {
    // Lógica a ser executada quando o formulário é resetado.
  }
}
```

## Comportamento (Detalhes da Modificação)

Este decorator modifica o `formResetCallback` do Web Component, garantindo que o método decorado seja executado após a chamada original do `formResetCallback`. Ele permite que a lógica específica do componente seja executada quando o formulário é resetado.
