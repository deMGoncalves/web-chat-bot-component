# @std/directive/formDisabled

O decorator `@formDisabled` anexa um método ao ciclo de vida `formDisabledCallback` de um web component.

## Importação

```javascript
import { formDisabled } from '@std/directive/formDisabled'
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
