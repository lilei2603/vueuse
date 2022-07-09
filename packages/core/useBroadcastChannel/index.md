---
category: Browser
---

# useBroadcastChannel

响应式 [BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel). 

关闭广播频道自动卸载组件。

## Usage

BroadcastChannel 接口表示给定来源的任何浏览上下文都可以订阅的命名频道。它允许同一来源的不同文档（在不同的窗口、选项卡、框架或 iframe 中）之间进行通信。

消息通过在所有侦听频道的 BroadcastChannel 对象上触发的消息事件进行广播。

```js
import { ref } from 'vue-demi'
import { useBroadcastChannel } from '@vueuse/core'

const {
  isSupported,
  channel,
  post,
  close,
  error,
  isClosed,
} = useBroadcastChannel({ name: 'vueuse-demo-channel' })

const message = ref('')

message.value = 'Hello, VueUse World!'

// Post the message to the broadcast channel:
post(message.value)

// Option to close the channel if you wish:
close()
```
