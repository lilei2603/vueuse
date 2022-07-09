---
category: '@RxJS'
---

# useSubscription

使用订阅而不用担心取消订阅或内存泄漏。


## Usage

```ts
import { useSubscription } from '@vueuse/rxjs'
import { interval } from 'rxjs'

const count = ref(0)

// useSubscription 在卸载组件前调用 unsubscribe 方法
useSubscription(
  interval(1000)
    .subscribe(() => {
      count.value++
      console.log(count)
    }),
)
```
