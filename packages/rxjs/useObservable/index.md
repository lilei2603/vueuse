---
category: '@RxJS'
---

# useObservable

使用 Observable，返回一个 ref 并在组件卸载时自动取消订阅。


## Usage

```ts
import { ref } from 'vue'
import { useObservable } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { mapTo, scan, startWith } from 'rxjs/operators'

// setup()
const count = useObservable(
  interval(1000).pipe(
    mapTo(1),
    startWith(0),
    scan((total, next) => next + total),
  ),
)
```

如果你想为一个可能出错的 observable 添加自定义错误处理，你可以提供一个可选的 `onError` 配置。如果没有这个，RxJS 会将提供的 observable 中的任何错误视为“未处理的错误”，并将其抛出到新的调用堆栈中并报告给 `window.onerror`（或 `process.on('error')` 如果你碰巧在节点）。

```ts
import { ref } from 'vue'
import { useObservable } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

// setup()
const count = useObservable(
  interval(1000).pipe(
    map((n) => {
      if (n === 10)
        throw new Error('oops')

      return n + n
    }),
  ),
  {
    onError: (err) => {
      console.log(err.message) // "oops"
    },
  },
)
```
