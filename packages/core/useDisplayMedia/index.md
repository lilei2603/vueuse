---
category: Sensors
related: useUserMedia
---

# useDisplayMedia

响应式的 [`mediaDevices.getDisplayMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) 流式传输。

## Usage

```ts
import { useDisplayMedia } from '@vueuse/core'

const { stream, start } = useDisplayMedia()

// start streaming

start()
```

```ts
const video = document.getElementById('video')

watchEffect(() => {
  // preview on a video element
  video.srcObject = stream.value
})
```
