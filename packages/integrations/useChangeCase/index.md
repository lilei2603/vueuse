---
category: '@Integrations'
---

# useChangeCase

[`change-case`](https://github.com/blakeembrey/change-case) 的封装

## Install

```bash
npm i change-case
```

## Usage

```ts
import { useChangeCase } from '@vueuse/integrations/useChangeCase'

// `changeCase` will be a computed
const changeCase = useChangeCase('hello world', 'camelCase')
changeCase.value // helloWorld
changeCase.value = 'vue use'
changeCase.value // vueUse
// Supported methods
// export {
//   camelCase,
//   capitalCase,
//   constantCase,
//   dotCase,
//   headerCase,
//   noCase,
//   paramCase,
//   pascalCase,
//   pathCase,
//   sentenceCase,
//   snakeCase,
// } from 'change-case'
```

或将 ref 传递给它，返回的计算值将随着源 ref 的变化而变化。

可以传递给自定义选项

```ts
import { ref } from 'vue-demi'
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
const input = ref('helloWorld')
const changeCase = useChangeCase(input, 'camelCase', {
  delimiter: '-',
})
changeCase.value // hello-World
ref.value = 'vue use'
changeCase.value // vue-Use
```
