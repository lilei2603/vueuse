---
category: Watch
alias: pausableWatch
---

# watchPausable

可暂停的监听器

## Usage

正常使用监听器，但返回额外的 `pause()` 和 `resume()` 函数来控制。

```ts
import { watchPausable } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const source = ref('foo')

const { stop, pause, resume } = watchPausable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // Changed to bar!

pause()

source.value = 'foobar'
await nextTick() // (nothing happend)

resume()

source.value = 'hello'
await nextTick() // Changed to hello!
```
