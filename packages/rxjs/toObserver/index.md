---
category: '@RxJS'
---

# toObserver

用于在观察者中转换 ref 的糖函数


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
      withLatestFrom(from(count).pipe(startWith(0))),
      map(([total, curr]) => curr + total),
    )
    .subscribe(toObserver(count)), // same as ).subscribe(val => (count.value = val))
)
```
