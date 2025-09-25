# @std/directive/formAssociated

O decorator `@formAssociated` anexa um método ao ciclo de vida `formAssociatedCallback` de um web component.

## Instalação

```bash
bun add @std/directive
```

## Uso

```javascript
import { formAssociated } from '@std/directive/formAssociated'

class MyComponent extends HTMLElement {
  @formAssociated
  formAssociatedCallback(form) {
    // Lógica a ser executada quando o componente é associado a um formulário.
  }
}
```
