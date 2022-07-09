---
category: Browser
---

# useScreenOrientation

响应式的 [Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)。它为 Web 开发人员提供有关用户当前屏幕方向的信息。

## Usage

```ts
import { useScreenOrientation } from '@vueuse/core'

const {
  isSupported,
  orientation,
  angle,
  lockOrientation,
  unlockOrientation,
} = useScreenOrientation()
```

要锁定方向，您可以将 [OrientationLockType](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type) 传递给 `lockOrientation` 函数：

```ts
import { useScreenOrientation } from '@vueuse/core'

const {
  isSupported,
  orientation,
  angle,
  lockOrientation,
  unlockOrientation,
} = useScreenOrientation()

lockOrientation('primary-portrait')
```

然后再次解锁，使用以下内容：

```ts
unlockOrientation()
```

接受的方向类型是 `"landscape-primary"`，`"landscape-secondary"`，`"portrait-primary"`，`"portrait-secondary"`，`"any"`，`"landscape"`，`"natural"` 和 `"portrait"`的其中之一

[Screen Orientation API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)
