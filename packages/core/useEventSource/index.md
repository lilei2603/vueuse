---
category: Network
---

# useEventSource

一个 [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) 或 [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) 的实例，打开与 HTTP 服务器的持久连接，该服务器以文本/事件流格式发送事件。

## Usage

```js
import { useEventSource } from '@vueuse/core'

const { status, data, error, close } = useEventSource('https://event-source-url')
```

| 状态 | 类型          | 描述                                                                                             |
| ----- | ------------- | ------------------------------------------------------------------------------------------------------- |
| status | `Ref<string>` | 表示连接状态的只读值。可能的值为 CONNECTING (0)、OPEN (1) 或 CLOSED (2)|
| data   | `Ref<string \| null>` | 引用通过 `EventSource` 接收到的最新数据，可以观察到响应传入的消息 |
| eventSource | `Ref<EventSource \| null>` | 对当前 `EventSource` 实例的引用 |

| 方法 | 签名                                  | 描述                            |
| ------ | ------------------------------------------ | ---------------------------------------|
| close  | `() => void` | 优雅地关闭 `EventSource` 连接。  |
