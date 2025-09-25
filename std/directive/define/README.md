# @std/directive/define

O decorator `@define` define um custom element no registro de custom elements, se ainda não estiver definido.

## Importação

```javascript
import { define } from '@std/directive/define'
```

## Uso

```javascript
import { define } from '@std/directive'

@define('my-component')
class MyComponent extends HTMLElement {}
```
