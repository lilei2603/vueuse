---
category: Watch
---

# until

基于 Promise 的单次修改监听器。

## Usage

#### 等待一些异步数据准备好

```js
import { until, useAsyncState } from '@vueuse/core'

const { state, ready } = useAsyncState(
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(t => t.json()),
  {},
)

;(async () => {
  await until(ready).toBe(true)

  console.log(state) // state is now ready!
})()
```

#### 等待自定义条件

> 您可以使用 `invoke` 来调用异步函数。

```js
import { invoke, until, useCounter } from '@vueuse/core'

const { count } = useCounter()

invoke(async () => {
  await until(count).toMatch(v => v > 7)

  alert('Counter is now larger than 7!')
})
```

#### 超时

```ts
// 将解析直到 ref.value === true 或 1000 毫秒通过
await until(ref).toBe(true, { timeout: 1000 })

// 如果超时将抛出
try {
  await until(ref).toBe(true, { timeout: 1000, throwOnTimeout: true })
  // ref.value === true
}
catch (e) {
  // timeout
}
```

#### 更多示例

```ts
await until(ref).toBe(true)
await until(ref).toMatch(v => v > 10 && v < 100)
await until(ref).changed()
await until(ref).changedTimes(10)
await until(ref).toBeTruthy()
await until(ref).toBeNull()

await until(ref).not.toBeNull()
await until(ref).not.toBeTruthy()
```
