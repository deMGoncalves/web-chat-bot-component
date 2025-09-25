# @std/directive/formReset

O decorator `@formReset` anexa um método ao ciclo de vida `formResetCallback` de um web component.

## Instalação

```bash
bun add @std/directive
```

## Uso

```javascript
import { formReset } from '@std/directive/formReset'

class MyComponent extends HTMLElement {
  @formReset
  formResetCallback() {
    // Lógica a ser executada quando o formulário é resetado.
  }
}
```
