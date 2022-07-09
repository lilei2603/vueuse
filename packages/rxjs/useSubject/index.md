---
category: '@RxJS'
---

# useSubject

将 Subject 绑定到 ref 并以两种方式传播值更改。


## Usage

```ts
import { useSubject } from '@vueuse/rxjs'
import { Subject } from 'rxjs'

const subject = new Subject()

// setup()
const subjectRef = useSubject(subject)
```

如果您想为可能出错的主题添加自定义错误处理，您可以提供可选的 `onError` 配置。如果没有这个，RxJS 会将提供的 observable 中的任何错误视为“未处理的错误”，并将其抛出到新的调用堆栈中并报告给 `window.onerror`（或 `process.on('error')` 如果你碰巧在节点）。

```ts
import { useSubject } from '@vueuse/rxjs'
import { Subject } from 'rxjs'

const subject = new Subject()

// setup()
const subjectRef = useSubject(subject,
  {
    onError: (err) => {
      console.log(err.message) // "oops"
    },
  },
)
```
