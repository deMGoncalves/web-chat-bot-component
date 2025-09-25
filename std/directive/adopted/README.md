# @std/directive/adopted

O decorator `@adopted` anexa um método ao ciclo de vida `adoptedCallback` de um web component.

## Importação

```javascript
import { adopted } from '@std/directive/adopted'
```

## Uso

```javascript
import { adopted } from '@std/directive'

class MyComponent extends HTMLElement {
  @adopted
  onAdopted() {
    // Lógica a ser executada quando o componente é movido para um novo documento.
  }
}
```
