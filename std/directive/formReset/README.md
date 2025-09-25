# @std/directive/formReset

O decorator `@formReset` anexa um método ao ciclo de vida `formResetCallback` de um web component.

## Importação

```javascript
import { formReset } from '@std/directive/formReset'
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
