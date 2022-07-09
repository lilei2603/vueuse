---
category: Misc
---

# useWebWorkerFn

在不阻塞 UI 的情况下运行的函数，使用使用 `Promise` 的简单语法。 [alewin/useWorker](https://github.com/alewin/useWorker) 的一个端口。

## Usage

### 基本示例

```js
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn } = useWebWorkerFn(() => {
  // some heavy works to do in web worker
})
```

### 有依赖关系

```ts {7-9}
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(
  dates => dates.sort(dateFns.compareAsc),
  {
    timeout: 50000,
    dependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.js', // dateFns
    ],
  },
)
```

## Web Worker

在开始使用此功能之前，我们建议您阅读 [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) 文档。

## Credit

该功能是 Alessio Koci 的 https://github.com/alewin/useWorker 的 Vue 端口，在 [@Donskelle](https://github.com/Donskelle) 的帮助下进行迁移。
