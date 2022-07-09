---
category: Sensors
---

# useDeviceMotion

响应式的 [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)。为 Web 开发人员提供有关设备位置和方向变化速度的信息。

## Usage

```js
import { useDeviceMotion } from '@vueuse/core'

const {
  acceleration,
  accelerationIncludingGravity,
  rotationRate,
  interval,
} = useDeviceMotion()
```

| 状态                        | 类型     | 描述                                                                                                          |
| ---------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| acceleration                 | `object` | 在 X、Y 和 Z 三个轴上给出设备加速度的对象。                                        |
| accelerationIncludingGravity | `object` | 一个物体在重力的影响下给出了设备在 X、Y 和 Z 三个轴上的加速度。             |
| rotationRate                 | `object` | 给出设备在三个方向轴 alpha、beta 和 gamma 上的方向变化率的对象。 |
| interval                     | `Number` | 表示从设备获取数据的时间间隔（以毫秒为单位）的数字。             |

您可以在 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent#Properties) 上找到有关状态的更多信息。


## Component Usage

```html
<UseDeviceMotion v-slot="{ acceleration }">
  Acceleration: {{ acceleration }}
</UseDeviceMotion>
```
