---
category: Browser
---

# useBluetooth

用于使用 [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) 的响应式，它提供了与蓝牙低功耗外围设备连接和交互的能力。

Web 蓝牙 API 允许网站使用通用属性配置文件 (GATT) 通过蓝牙 4 无线标准发现设备并与之通信。

注：它目前在 Android M、Chrome OS、Mac 和 Windows 10 中部分实现。有关浏览器兼容性的完整概述，请参阅 [Web Bluetooth API Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#browser_compatibility) 

注：网络蓝牙 API 规范有许多注意事项需要注意。请参阅 [Web Bluetooth W3C Draft Report](https://webbluetoothcg.github.io/web-bluetooth/)，了解有关设备检测和连接的大量注意事项。  

注：此 API 在 Web Workers 中不可用（未通过 WorkerNavigator 公开）。

## Usage Default

```ts
import { useBluetooth } from '@vueuse/core'

const {
  isSupported,
  isConnected,
  device,
  requestDevice,
  server,
} = useBluetooth({
  acceptAllDevices: true,
})
```

```vue
<template>
  <button @click="requestDevice()">
    Request Bluetooth Device
  </button>
</template>
```

设备配对并连接后，您可以根据需要使用服务器对象。

## Usage Battery Level Example

此示例说明了如何使用 Web 蓝牙 API 来读取电池电量，并在附近的蓝牙设备通过蓝牙低功耗广告电池信息时收到更改通知。

在这里，我们使用characteristicvaluechanged 事件监听器来处理读取电池电量特征值。这个事件监听器也可以选择处理即将到来的通知。

```ts
import { pausableWatch, useBluetooth } from '@vueuse/core'

const {
  isSupported,
  isConnected,
  device,
  requestDevice,
  server,
} = useBluetooth({
  acceptAllDevices: true,
  optionalServices: [
    'battery_service',
  ],
})

const batteryPercent = ref<undefined | number>()

const isGettingBatteryLevels = ref(false)

const getBatteryLevels = async () => {
  isGettingBatteryLevels.value = true

  // Get the battery service:
  const batteryService = await server.getPrimaryService('battery_service')

  // Get the current battery level
  const batteryLevelCharacteristic = await batteryService.getCharacteristic(
    'battery_level',
  )

  // Listen to when characteristic value changes on `characteristicvaluechanged` event:
  batteryLevelCharacteristic.addEventListener('characteristicvaluechanged', (event) => {
    batteryPercent.value = event.target.value.getUint8(0)
  })

  // Convert received buffer to number:
  const batteryLevel = await batteryLevelCharacteristic.readValue()

  batteryPercent.value = await batteryLevel.getUint8(0)
}

const { stop } = pausableWatch(isConnected, (newIsConnected) => {
  if (!newIsConnected || !server.value || isGettingBatteryLevels.value)
    return
  // Attempt to get the battery levels of the device:
  getBatteryLevels()
  // We only want to run this on the initial connection, as we will use a event listener to handle updates:
  stop()
})
```

```vue
<template>
  <button @click="requestDevice()">
    Request Bluetooth Device
  </button>
</template>
```

更多示例可以在 [Google Chrome's Web Bluetooth Samples](https://googlechrome.github.io/samples/web-bluetooth/) 中找到。
