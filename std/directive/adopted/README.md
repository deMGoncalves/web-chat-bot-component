# @std/directive/adopted

O decorator `@adopted` anexa um método ao ciclo de vida `adoptedCallback` de um web component.

## Instalação

```bash
bun add @std/directive
```

## Uso

```javascript
import { adopted } from '@std/directive/adopted'

@adopted
class MyComponent extends HTMLElement {
  adoptedCallback() {
    // Lógica a ser executada quando o componente é movido para um novo documento.
  }
}
```
