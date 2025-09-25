# @std/directive/attributeChanged

O decorator `@attributeChanged` observa mudanças em um atributo e atualiza uma propriedade da classe com o novo valor, opcionalmente aplicando uma sequência de funções de filtro.

## Importação

```javascript
import { attributeChanged } from '@std/directive/attributeChanged'
```

## Uso

```javascript
import { attributeChanged } from '@std/directive'

class MyComponent extends HTMLElement {
  @attributeChanged('my-attribute')
  myProperty
}
```
