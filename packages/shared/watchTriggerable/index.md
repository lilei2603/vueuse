---
category: Watch
---

# watchTriggerable

可手动触发的监听器

## Usage

一个支持手动触发 `WatchCallback` 的 `watch` 包装器，它返回一个额外的触发器来立即执行 `WatchCallback`。

```ts
import { watchTriggerable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref(0)

const { trigger, ignoreUpdates } = watchTriggerable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // logs: Changed to bar!

// Execution of WatchCallback via `trigger` does not require waiting
trigger() // logs: Changed to bar!
```

### `onCleanup`
当你想手动调用一个使用 `onCleanup` 参数的手表时；简单地取出 `WatchCallback` 并调用它并不容易实现 `onCleanup` 参数。

使用 `watchTriggerable` 将解决这个问题。

```ts
import { watchTriggerable } from '@vueuse/core'
import { ref } from 'vue'

const source = ref(0)

const { trigger } = watchTriggerable(
  source,
  async (v, _, onCleanup) => {
    let canceled = false
    onCleanup(() => canceled = true)

    await new Promise(resolve => setTimeout(resolve, 500))
    if (canceled)
      return

    console.log(`The value is "${v}"\n`)
  },
)

source.value = 1 // no log
await trigger() // logs (after 500 ms): The value is "1"
```
