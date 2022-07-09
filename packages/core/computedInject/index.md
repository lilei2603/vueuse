---
category: Component
---

# computedInject

结合计算和注入

## Usage

在提供者组件中
```ts
import type { InjectionKey, Ref } from 'vue-demi'
import { provide, ref } from 'vue-demi'

interface Item {
  key: number
  value: string
}

export const ArrayKey: InjectionKey<Ref<Item[]>> = Symbol('symbol-key')

const array = ref([{ key: 1, value: '1' }, { key: 2, value: '2' }, { key: 3, value: '3' }])

provide(ArrayKey, array)
```

在接收器组件中
```ts
import { computedInject } from '@vueuse/core'

import { ArrayKey } from './provider'

const computedArray = computedInject(ArrayKey, (source) => {
  const arr = [...source.value]
  arr.unshift({ key: 0, value: 'all' })
  return arr
})
```
