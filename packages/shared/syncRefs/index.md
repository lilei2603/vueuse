---
category: Utilities
related: syncRef
---

# syncRefs

使引用的目标数据与源数据保持同步

## Usage

```ts
import { syncRefs } from '@vueuse/core'

const source = ref('hello')
const target = ref('target')

const stop = syncRefs(source, target)

console.log(target.value) // hello

source.value = 'foo'

console.log(target.value) // foo
```

## 监听选项

`syncRefs` 的选项类似于 `watch` 的 `WatchOptions`，但默认值不同。

```ts
export interface SyncRefOptions {
  /**
   * Timing for syncing, same as watch's flush option
   *
   * @default 'sync'
   */
  flush?: WatchOptions['flush']
  /**
   * Watch deeply
   *
   * @default false
   */
  deep?: boolean
  /**
   * Sync values immediately
   *
   * @default true
   */
  immediate?: boolean
}
```

设置 `{ flush: 'pre' }` 时，目标引用将在渲染开始前在[当前“tick”结束时](https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing)更新。

```ts
import { syncRefs } from '@vueuse/core'

const source = ref('hello')
const target = ref('target')

syncRefs(source, target, { flush: 'pre' })

console.log(target.value) // hello

source.value = 'foo'

console.log(target.value) // hello <- still unchanged, because of flush 'pre'

await nextTick()

console.log(target.value) // foo <- changed!
```
