---
category: State
---

# useManualRefHistory

在调用 `commit()` 时手动跟踪 ref 的更改历史，还提供撤消和重做功能

## Usage

```ts {5}
import { ref } from 'vue'
import { useManualRefHistory } from '@vueuse/core'

const counter = ref(0)
const { history, commit, undo, redo } = useManualRefHistory(counter)

counter.value += 1
commit()

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

#### 可变对象的历史

如果要更改源，则需要传递自定义克隆函数或使用 `clone` `true` 作为参数，这是最小克隆函数 `x => JSON.parse(JSON.stringify(x))` 的快捷方式，它将用于 `转储` 和 `解析`。

```ts {5}
import { ref } from 'vue'
import { useManualRefHistory } from '@vueuse/core'

const counter = ref({ foo: 1, bar: 2 })
const { history, commit, undo, redo } = useManualRefHistory(counter, { clone: true })

counter.value.foo += 1
commit()
```

#### 自定义克隆功能

要使用全功能或自定义克隆功能，您可以通过 `转储` 选项进行设置。

例如, 使用 [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone):

```ts
import { cloneDeep } from 'lodash-es'

const refHistory = useManualRefHistory(target, { clone: structuredClone })
```

或者使用 [lodash's `cloneDeep`](https://lodash.com/docs/4.17.15#cloneDeep):

```ts
import { cloneDeep } from 'lodash-es'
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, { clone: cloneDeep })
```

或者使用更轻量级的 [`klona`](https://github.com/lukeed/klona):

```ts
import { klona } from 'klona'
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, { clone: klona })
```

#### 自定义转储和解析功能

您可以传递自定义函数来控制序列化和解析，而不是使用 `clone` 参数。如果您不需要历史值作为对象，这可以在撤消时节省额外的克隆。例如，如果您希望将已字符串化的快照保存到本地存储，它也很有用。

```ts
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, {
  dump: JSON.stringify,
  parse: JSON.parse,
})
```

### 历史容量

我们将默认保留所有历史记录（无限制），直到您明确清除它们，您可以设置 `capacity` 选项保留的最大历史记录数量。

```ts
const refHistory = useManualRefHistory(target, {
  capacity: 15, // limit to 15 history records
})

refHistory.clear() // explicitly clear all the history
```

## 相关功能

- `useRefHistory`
