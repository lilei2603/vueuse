---
category: Sensors
---

# useNetwork

响应式的 [Network status](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)。网络信息 API 根据一般连接类型（例如，“wifi”、“蜂窝数据”等）提供有关系统连接的信息。这可用于根据用户的连接选择高清内容或低清晰度内容。整个 API 包括添加 `NetworkInformation` 接口和 `Navigator` 接口的单个​​属性：`Navigator.connection`。

## Usage

```js
import { useNetwork } from '@vueuse/core'

const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork()

console.log(isOnline.value)
```

要用作对象，请用 `reactive()` 包装它

```js
import { reactive } from 'vue'

const network = reactive(useNetwork())

console.log(network.isOnline)
```

## Component Usage

```html
<UseNetwork v-slot="{ isOnline, type }">
  Is Online: {{ isOnline }}
  Type: {{ type }}
<UseNetwork>
```
