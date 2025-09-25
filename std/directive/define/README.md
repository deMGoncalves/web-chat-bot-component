# @std/directive/define

O decorator `@define` define um custom element no registro de custom elements, se ainda não estiver definido.

## Instalação

```bash
bun add @std/directive
```

## Uso

```javascript
import { define } from '@std/directive/define'

@define('my-component')
class MyComponent extends HTMLElement {}
```
