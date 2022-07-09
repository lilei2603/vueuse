---
category: State
---

# useRefHistory

跟踪 ref 的更改历史，还提供撤消和重做功能

## Usage

```ts {5}
import { ref } from 'vue'
import { useRefHistory } from '@vueuse/core'

const counter = ref(0)
const { history, undo, redo } = useRefHistory(counter)
```

在内部，`watch` 用于在修改 ref 值时触发历史点。这意味着历史点是在同一个“tick”中异步触发的批量修改。

```ts
counter.value += 1

await nextTick()
console.log(history.value)
/* [
  { snapshot: 1, timestamp: 1601912898062 },
  { snapshot: 0, timestamp: 1601912898061 }
] */
```

您可以使用 `undo` 将 ref 值重置为最后一个历史记录点。

```ts
console.log(counter.value) // 1
undo()
console.log(counter.value) // 0
```

### 对象 / 数组

使用对象或数组时，由于更改其属性不会更改引用，因此不会触发提交。要跟踪属性更改，您需要传递 `deep: true`。它将为每个历史记录创建克隆。

```ts
const state = ref({
  foo: 1,
  bar: 'bar',
})

const { history, undo, redo } = useRefHistory(state, {
  deep: true,
})

state.value.foo = 2

await nextTick()
console.log(history.value)
/* [
  { snapshot: { foo: 2, bar: 'bar' } },
  { snapshot: { foo: 1, bar: 'bar' } }
] */
```

#### 自定义克隆功能

`useRefHistoryonly` 嵌入了最小的克隆函数 `x => JSON.parse(JSON.stringify(x))`。要使用全功能或自定义克隆功能，您可以通过 `转储` 选项进行设置。

例如，使用 [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone):

```ts
import { useRefHistory } from '@vueuse/core'

const refHistory = useRefHistory(target, { dump: structuredClone })
```

或者使用 [lodash's `cloneDeep`](https://lodash.com/docs/4.17.15#cloneDeep):

```ts
import { cloneDeep } from 'lodash-es'
import { useRefHistory } from '@vueuse/core'

const refHistory = useRefHistory(target, { dump: cloneDeep })
```

或者使用更轻量级的 [`klona`](https://github.com/lukeed/klona):

```ts
import { klona } from 'klona'
import { useRefHistory } from '@vueuse/core'

const refHistory = useRefHistory(target, { dump: klona })
```

#### 自定义转储和解析功能

您可以传递自定义函数来控制序列化和解析，而不是使用 `clone` 参数。如果您不需要历史值作为对象，这可以在撤消时节省额外的克隆。例如，如果您希望将已字符串化的快照保存到本地存储，它也很有用。

```ts
import { useRefHistory } from '@vueuse/core'

const refHistory = useRefHistory(target, {
  dump: JSON.stringify,
  parse: JSON.parse,
})
```

### 历史容量

我们将默认保留所有历史记录（无限制），直到您明确清除它们，您可以设置 `capacity` 选项保留的最大历史记录数量。

```ts
const refHistory = useRefHistory(target, {
  capacity: 15, // limit to 15 history records
})

refHistory.clear() // explicitly clear all the history
```

### 历史刷新时间

来自 [Vue官方文档](https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing)：当在同一个“tick”中发生许多状态突变时，Vue 的反应系统缓冲无效效果并异步刷新它们以避免不必要的重复调用。

与 `watch` 一样，您可以使用 `flush` 选项修改刷新时间。

```ts
const refHistory = useRefHistory(target, {
  flush: 'sync', // options 'pre' (default), 'post' and 'sync'
})
```

默认值为“pre”，以将此可组合与 Vue 观察者的默认值对齐。这也有助于避免常见问题，例如在对 ref 值进行多步更新时生成的多个历史记录点可能会破坏应用程序状态的不变量。如果您需要在同一个“tick”中创建多个历史记录点，您可以使用 `commit()`

```ts
const r = ref(0)
const { history, commit } = useRefHistory(r)

r.value = 1
commit()

r.value = 2
commit()

console.log(history.value)
/* [
  { snapshot: 2 },
  { snapshot: 1 },
  { snapshot: 0 },
] */
```

另一方面，当使用 flush `'sync'` 时，您可以使用 `batch(fn)` 为多个同步操作生成单个历史记录点

```ts
const r = ref({ names: [], version: 1 })
const { history, batch } = useRefHistory(r, { flush: 'sync' })

batch(() => {
  r.names.push('Lena')
  r.version++
})

console.log(history.value)
/* [
  { snapshot: { names: [ 'Lena' ], version: 2 },
  { snapshot: { names: [], version: 1 },
] */
```

如果使用 `{ flush: 'sync', deep: true }` ，`batch` 在数组中进行可变拼接时也很有用。 `splice` 最多可以生成三个将被推送到 ref 历史记录的原子操作。

```ts
const arr = ref([1, 2, 3])
const { history, batch } = useRefHistory(r, { deep: true, flush: 'sync' })

batch(() => {
  arr.value.splice(1, 1) // batch ensures only one history point is generated
})
```

另一种选择是避免使用 `arr.value = [...arr.value].splice(1,1)` 改变原始 ref 值。

## 相关功能

- `useManualRefHistory`

## 推荐读物

- [History and Persistence](https://patak.dev/vue/history-and-persistence.html) - by [@matias-capeletto](https://github.com/matias-capeletto)
