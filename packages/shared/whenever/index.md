---
category: Watch
---

# whenever

监听真实值的简写形式

## Usage

```js
import { useAsyncState, whenever } from '@vueuse/core'

const { state, isReady } = useAsyncState(
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(t => t.json()),
  {},
)

whenever(isReady, () => console.log(state))
```

```ts
// this
whenever(ready, () => console.log(state))

// is equivalent to:
watch(ready, (isReady) => {
  if (isReady)
    console.log(state)

})
```

### 回调函数

和 `watch` 一样，回调会被调用 `cb(value`, `oldValue`, `onInvalidate`)。

```ts
whenever(height, (current, lastHeight) => {
  if (current > lastHeight)
    console.log(`Increasing height by ${current - lastHeight}`)

})
```

### 计算

与 `watch` 一样，您可以传递一个 getter 函数来计算每次更改。

```ts
// this
whenever(
  () => counter.value === 7,
  () => console.log('counter is 7 now!'),
)
```

### 选项

选项和默认值与 `watch` 相同。

```ts
// this
whenever(
  () => counter.value === 7,
  () => console.log('counter is 7 now!'),
  { flush: 'sync' },
)
```
