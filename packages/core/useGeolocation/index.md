---
category: Sensors
---

# useGeolocation

响应式的 [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)。如果愿意，它允许用户向 Web 应用程序提供他们的位置。出于隐私原因，要求用户允许报告位置信息。

## Usage

```js
import { useGeolocation } from '@vueuse/core'

const { coords, locatedAt, error } = useGeolocation()
```

| 状态     | 类型                                                                          | 描述                                                              |
| --------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| coords    | [`Coordinates`](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) | 有关检索到的位置的信息，例如纬度和经度 |
| locatedAt | `Date`                                                                        | The 上次地理定位调用的时间                                    |
| error     | `string`                                                                      | An 地理定位 API 失败时的错误消息。                          |

## Config

`useGeolocation` 函数 将 [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) 对象作为可选参数。


## Component Usage

```html
<UseGeolocation v-slot="{ coords: { latitude, longitude } }">
  Latitude: {{ latitude }}
  Longitude: {{ longitude }}
</UseGeolocation>
```
