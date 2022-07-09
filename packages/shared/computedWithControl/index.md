---
category: Utilities
alias: controlledComputed
---

# computedWithControl

明确定义计算的依赖关系

## Usage

```ts
import { computedWithControl } from '@vueuse/core'

const source = ref('foo')
const counter = ref(0)

const computedRef = computedWithControl(
  () => source.value, // watch source, same as `watch`
  () => counter.value, // computed getter, same as `computed`
)
```

这样，计数器的更改不会触发 `computedRef` 更新，但源 ref 会。

```ts
console.log(computedRef.value) // 0

counter.value += 1

console.log(computedRef.value) // 0

source.value = 'bar'

console.log(computedRef.value) // 1
```

### 手动触发

> 仅适用于 Vue 3

您还可以通过以下方式手动触发计算的更新：

```ts
const computedRef = computedWithControl(
  () => source.value,
  () => counter.value,
)

computedRef.trigger()
```
