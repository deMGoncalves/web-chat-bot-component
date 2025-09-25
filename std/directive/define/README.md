# @std/directive/define

O decorator `@define` define um custom element no registro de custom elements, se ainda não estiver definido.

## Importação

```javascript
import { define } from '@std/directive'
```

## Uso

```javascript
import { define } from '@std/directive'

@define('my-component', { extends: 'div' })
class MyComponent extends HTMLElement {}
```

## Parâmetros do Decorator

-   `name` (`{string}`): O nome da tag HTML para o custom element (ex: `'my-component'`).
-   `options` (`{ElementDefinitionOptions}`, opcional): Um objeto de opções para a definição do elemento, como `extends` para elementos customizados estendidos.

## Comportamento (Detalhes da Modificação)

Este decorator intercepta a definição de uma classe e a registra como um custom element usando `customElements.define()`. Ele verifica se o elemento já foi definido para evitar erros de redefinição.
