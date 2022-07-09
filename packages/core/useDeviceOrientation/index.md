---
category: Sensors
---

# useDeviceOrientation

响应式的 [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent)。为 Web 开发人员提供来自运行网页的设备的物理方向的信息。

## Usage

```js
import { useDeviceOrientation } from '@vueuse/core'

const {
  isAbsolute,
  alpha,
  beta,
  gamma,
} = useDeviceOrientation()
```

| 状态      | 类型     | 描述                                                                                                                |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| isAbsolute | `boolean` | 一个布尔值，指示设备是否绝对提供方向数据。                               |
| alpha      | `number` | 一个数字，表示设备围绕 z 轴的运动，以度数表示，值范围为 0 到 360。    |
| beta       | `number` | 一个数字，表示设备围绕 x 轴的运动，以度数表示，值范围为 -180 到 180。 |
| gamma      | `number` | 表示设备绕 y 轴运动的数字，以度数表示，值范围为 -90 到 90。   |

您可以在 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent#Properties) 上找到有关状态的更多信息。

## Component Usage

```html
<UseDeviceOrientation v-slot="{ alpha, beta, gamma }">
  Alpha: {{ alpha }}
  Beta: {{ beta }}
  Gamma: {{ gamma }}
</UseDeviceOrientation>
```
