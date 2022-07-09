---
category: '@RxJS'
---

# from / fromEvent

> 原始函数的两个包装器以允许使用 ref 对象


## Usage

```ts
import { ref } from 'vue'
import { from, fromEvent, toObserver, useSubscription } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { map, mapTo, takeUntil, withLatestFrom } from 'rxjs/operators'

const count = ref(0)
const button = ref<HTMLButtonElement>(null)

useSubscription(
  interval(1000)
    .pipe(
      mapTo(1),
      takeUntil(fromEvent(button, 'click')),
      withLatestFrom(from(count, {
        immediate: true,
        deep: false,
      })),
      map(([total, curr]) => curr + total),
    )
    .subscribe(toObserver(count)), // same as ).subscribe(val => (count.value = val))
)
```
