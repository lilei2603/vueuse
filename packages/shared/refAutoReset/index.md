---
category: Utilities
alias: autoResetRef
---

# refAutoReset

响应式数据在一段时间后将重置为默认值

## Usage

```ts
import { refAutoReset } from '@vueuse/core'

const message = refAutoReset('default message', 1000)

const setMessage = () => {
  // 此处的值将更改为“消息已设置”，但在 1000 毫秒后，它将更改为“默认消息”
  message.value = 'message has set'
}
```
