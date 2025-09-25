# @std/directive/formStateRestore

O decorator `@formStateRestore` anexa um método ao ciclo de vida `formStateRestoreCallback` de um web component.

## Instalação

```bash
bun add @std/directive
```

## Uso

```javascript
import { formStateRestore } from '@std/directive/formStateRestore'

class MyComponent extends HTMLElement {
  @formStateRestore
  formStateRestoreCallback(state, mode) {
    // Lógica a ser executada quando o estado do formulário é restaurado.
  }
}
```
