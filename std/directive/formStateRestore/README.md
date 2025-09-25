# @std/directive/formStateRestore

O decorator `@formStateRestore` anexa um método ao ciclo de vida `formStateRestoreCallback` de um web component.

## Importação

```javascript
import { formStateRestore } from '@std/directive/formStateRestore'
```

## Uso

```javascript
import { formStateRestore } from '@std/directive'

class MyComponent extends HTMLElement {
  @formStateRestore
  onFormStateRestore(state, mode) {
    // Lógica a ser executada quando o estado do formulário é restaurado.
  }
}
```
