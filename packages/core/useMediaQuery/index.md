---
category: Browser
---

# useMediaQuery

响应式 [媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)。创建 `MediaQueryList` 对象后，您可以检查查询结果或在结果更改时接收通知。


## Usage

```js
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
```
