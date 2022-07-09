---
category: Sensors
---

# useDevicePixelRatio

响应式跟踪 [`window.devicePixelRatio`](https://developer.mozilla.org/ru/docs/Web/API/Window/devicePixelRatio)
>
> 注意：`window.devicePixelRatio` 更改没有事件侦听器。 因此，此函数使用[`以编程方式测试媒体查询 (window.matchMedia)`](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries) ，如[本示例](https://stackoverflow.com/questions/28905420/window-devicepixelratio-change-listener/29653772#29653772)中所述，但与示例不同的是，此函数订阅了**几个** pixelRatio 比例（取自 [mydevice.io](https://www.mydevice.io/)）以检测任何 `window.devicePixelRatio` 更改。

## Usage

```js
import { useDevicePixelRatio } from '@vueuse/core'

export default {
  setup() {
    const { pixelRatio } = useDevicePixelRatio()

    return { pixelRatio }
  },
}
```

## Component Usage

```html
<UseDevicePixelRatio v-slot="{ pixelRatio }">
  Pixel Ratio: {{ pixelRatio }}
</UseDevicePixelRatio>
```
