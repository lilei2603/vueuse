---
category: Browser
---

# useVibrate

响应式的 [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)

大多数现代移动设备都包含振动硬件，它允许软件代码通过使设备振动来向用户提供物理反馈。

Vibration API 为 Web 应用程序提供了访问此硬件（如果存在）的能力，并且如果设备不支持它，则不执行任何操作。

## Usage

振动被描述为开关脉冲的模式，其长度可能不同。

该模式可以由描述振动的毫秒数的单个整数组成，也可以由描述振动和暂停模式的整数数组组成。

```ts
import { useVibrate } from '@vueuse/core'

// This vibrates the device for 300 ms
// then pauses for 100 ms before vibrating the device again for another 300 ms:
const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })

// Start the vibration, it will automatically stop when the pattern is complete:
vibrate()

// But if you want to stop it, you can:
stop()
```
