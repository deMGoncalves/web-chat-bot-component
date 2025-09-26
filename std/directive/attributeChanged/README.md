# @std/directive/attributeChanged

O decorator `@attributeChanged` observa mudanças em um atributo e atualiza uma propriedade da classe com o novo valor, opcionalmente aplicando uma sequência de funções de filtro.

## Importação

```javascript
import { attributeChanged } from '@std/directive'
```

## Uso

```javascript
import { attributeChanged } from '@std/directive'

class MyComponent extends HTMLElement {
  #_myProperty

  @attributeChanged('my-attribute')
  set myProperty(value) {
    this.#_myProperty = value
    // Lógica adicional do setter
  }

  get myProperty() {
    return this.#_myProperty
  }
}
```

## Parâmetros do Decorator

-   `attribute` (`{string}`): O nome do atributo HTML a ser observado.
-   `...filters` (`{...Function}`, opcional): Uma ou mais funções que serão aplicadas sequencialmente ao novo valor do atributo antes de atribuí-lo à propriedade (ou passá-lo para o setter).

## Comportamento (Detalhes da Modificação)

Este decorator configura o `observedAttributes` da classe para incluir o atributo especificado. Ele também intercepta o `attributeChangedCallback` do Web Component para que, quando o atributo observado mudar, o novo valor seja processado pelas funções de filtro (se houver) e então atribuído à propriedade decorada, invocando o setter correspondente se definido.
