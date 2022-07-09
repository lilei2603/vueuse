---
category: Utilities
---

# reactifyObject

将 `reactify` 应用于对象

## Usage

```ts
import { reactifyObject } from '@vueuse/core'

const reactifiedConsole = reactifyObject(console)

const a = ref('42')

reactifiedConsole.log(a) // 不再需要`.value`
```
