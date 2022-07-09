---
category: Utilities
alias: asyncComputed
---

# computedAsync

异步计算属性

## Usage

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const name = ref('jack')

const userInfo = computedAsync(
  async () => {
    return await mockLookUp(name.value)
  },
  null, // initial state
)
```

### 评估状态

您需要传递一个 ref 来跟踪异步函数是否正在评估。

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const evaluating = ref(false)

const userInfo = computedAsync(
  async () => { /* your logic */ },
  null,
  evaluating,
)
```

### 取消

当计算源在前一个异步函数得到解析之前发生变化时，您可能希望取消前一个。这是一个展示如何与 fetch API 结合的示例。

```js
const packageName = ref('@vueuse/core')

const downloads = computedAsync(async (onCancel) => {
  const abortController = new AbortController()

  onCancel(() => abortController.abort())

  return await fetch(
    `https://api.npmjs.org/downloads/point/last-week/${packageName.value}`,
    { signal: abortController.signal },
  )
    .then(response => response.ok ? response.json() : { downloads: '—' })
    .then(result => result.downloads)
}, 0)
```

### 懒惰的

默认情况下，`computedAsync` 将在创建时立即开始解析，指定`lazy: true` 使其在第一次访问时开始解析。

```js
import { ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const evaluating = ref(false)

const userInfo = computedAsync(
  async () => { /* your logic */ },
  null,
  { lazy: true, evaluating },
)
```

## 注意事项

- 就像 Vue 内置的计算函数一样，`computedAsync` 但是请注意，仅考虑在第一个调用堆栈中引用的依赖项。换句话说：**异步访问的依赖项不会触发对异步计算值的重新评估**。

- 与 Vue 的内置计算函数相反，只要依赖关系发生变化，就会触发对异步计算值的重新评估，无论其结果当前是否正在被跟踪。
