---
category: Browser
---

# useWakeLock

响应式的 [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API)。提供了一种在应用程序需要继续运行时防止设备变暗或锁定屏幕的方法。

## Usage

```js
import { useWakeLock } from '@vueuse/core'

const { isSupported, isActive, request, release } = useWakeLock()
```

如果调用 `request`，`isActive` 为 **true**，如果调用 `release`，或者显示其他tab，或者窗口最小化，`isActive` 为**false**。
