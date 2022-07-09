---
category: Network
---

# useWebSocket

响应式的 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) 客户端

## Usage

```js
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket('ws://websocketurl')
```

有关更多选项，请参阅[类型声明](#type-declarations)。

### 及时性

自动连接（默认启用）。

这将自动为您调用 `open()` ，您无需自己调用它。

### 自动关闭

自动关闭连接（默认启用）。

当触发 `beforeunload` 事件或停止相关的效果范围时，这将自动调用 `close()`。

### 自动重连

自动重新连接错误（默认禁用）。

```js
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: true,
})
```

或者对其行为进行更多控制：

```js
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: {
    retries: 3,
    delay: 1000,
    onFailed() {
      alert('Failed to connect WebSocket after 3 retries')
    },
  },
})
```

显式调用 `close()` 不会触发自动重新连接。

### 心跳

通常的做法是为每个给定的时间发送一条小消息（心跳）以保持连接处于活动状态。在这个函数中，我们提供了一个方便的助手来做到这一点：

```js
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: true,
})
```

或使用更多控件：

```js
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: {
    message: 'ping',
    interval: 1000,
  },
})
```

### 子协议

要使用的一个或多个子协议的列表，在本例中为 soap 和 wamp。

```js
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket('ws://websocketurl', {
  protocols: ['soap'], // ['soap', 'wamp']
})
```
