# @std/directive/formDisabled

O decorator `@formDisabled` anexa um método ao ciclo de vida `formDisabledCallback` de um web component.

## Instalação

```bash
bun add @std/directive
```

## Uso

```javascript
import { formDisabled } from '@std/directive/formDisabled'

class MyComponent extends HTMLElement {
  @formDisabled
  formDisabledCallback(disabled) {
    // Lógica a ser executada quando o estado de desabilitado do formulário muda.
  }
}
```
