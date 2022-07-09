---
category: Sensors
---

# useBattery

响应式的 [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)。 通常称为电池 API，它提供有关系统电池电量的信息，并让您在电池电量或充电状态发生变化时收到发送的事件通知。这可用于调整应用程序的资源使用情况，以在电池电量不足时减少电池消耗，或在电池耗尽之前保存更改以防止数据丢失。

## Usage

```js
import { useBattery } from '@vueuse/core'

const { charging, chargingTime, dischargingTime, level } = useBattery()
```

| 状态             | 类型      | 描述                                                               |
| --------------- | --------- | ----------------------------------------------------------------- |
| charging        | `Boolean` | 如果设备当前正在充电。                                                |
| chargingTime    | `Number`  | 设备充满电之前的秒数。                                                |
| dischargingTime | `Number`  | 设备完全放电前的秒数。                                                |
| level           | `Number`  | 一个介于 0 和 1 之间的数字，表示当前充电水平。                           |

## Use-cases

我们的应用程序通常不会对电池电量产生同理心，我们可以对我们的应用程序进行一些调整，这将对电池电量不足的用户更加友好。

- 触发特殊的“暗黑模式”节电主题设置。
- 停止在新闻提要中自动播放视频。
- 禁用一些不重要的后台工作人员。
- 限制网络调用并减少 CPU/内存消耗。


## Component Usage
```html
<UseBattery v-slot="{ charging }">
  Is Charging: {{ charging }}
</UseBattery>
```
