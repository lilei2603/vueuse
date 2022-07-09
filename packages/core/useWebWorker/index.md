---
category: Misc
---

# useWebWorker

简单的 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) 注册和通信。


## 相关功能

试试高级 `useWebWorkerFn`

## Usage

```js
import { useWebWorker } from '@vueuse/core'

const { data, post, terminate } = useWebWorker('/path/to/worker.js')
```

| 状态 | 类型       | 描述                                                                                          |
| ----- | ---------- | ---------------------------------------------------------------------------------------------------- |
| data  | `Ref<any>` | 参考通过worker接收到的最新数据，可以观察到响应传入的消息 |


| 方法    | 签名             | 描述                      |
| --------- | --------------------- | -------------------------------- |
| post      | `(data: any) => void` | 将数据发送到工作线程。 |
| terminate | `() => void`          | 停止并终止工作人员。 |
