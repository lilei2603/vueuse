---
category: Browser
---

# useMediaControls

`音频` 和 `视频` 元素的反应式媒体控件

## Usage

### 基本用法
```html
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'

const video = ref()
const { playing, currentTime, duration, volume } = useMediaControls(video, { 
  src: 'video.mp4',
})

// Change initial media properties
onMounted(() => {
  volume.value = 0.5
  currentTime.value = 60
})
</script>

<template>
  <video ref="video" />
  <button @click="playing = !playing">Play / Pause</button>
  <span>{{ currentTime }} / {{ duration }}</span>
</template>
```

### Providing Captions, Subtitles, etc...
您可以在 `useMediaControls` 功能的 `轨道` 选项中提供字幕、字幕等。该函数将返回一个轨道数组以及用于控制它们的两个函数 `enableTrack`、`disableTrack` 和 `selectedTrack`。使用这些您可以管理当前选择的曲目。如果没有选定的轨道，则 `selectedTrack` 将为 `-1`。

```html
<script setup lang="ts">
const { tracks, enableTrack } = useMediaControls(video, { 
  src: 'video.mp4',
  tracks: [
    {
      default: true,
      src: './subtitles.vtt',
      kind: 'subtitles',
      label: 'English',
      srcLang: 'en',
    },
  ]
})
</script>

<template>
  <video ref="video" />
  <button v-for="track in tracks" :key="track.id" @click="enableTrack(track)">
    {{ track.label }}
  </button>
</template>
```
