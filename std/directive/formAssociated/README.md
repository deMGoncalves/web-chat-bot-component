# @std/directive/formAssociated

O decorator `@formAssociated` anexa um método ao ciclo de vida `formAssociatedCallback` de um web component.

## Importação

```javascript
import { formAssociated } from '@std/directive/formAssociated'
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
