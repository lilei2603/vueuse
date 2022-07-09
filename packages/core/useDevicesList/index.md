---
category: Sensors
---

# useDevicesList

响应式的 [enumerateDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices)。列出可用的输入/输出设备。

## Usage

```js
import { useDevicesList } from '@vueuse/core'

const {
  devices,
  videoInputs: cameras,
  audioInputs: microphones,
  audioOutputs: speakers,
} = useDevicesList()
```

# Component
```html
<UseDevicesList v-slot="{ videoInputs, audioInputs, audioOutputs }">
  Cameras: {{ videoInputs }}
  Microphones: {{ audioInputs }}
  Speakers: {{ audioOutputs }}
</UseDevicesList>
```
