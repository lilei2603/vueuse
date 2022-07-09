---
category: Sensors
---

# useSpeechSynthesis

响应式的 [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

> [是否支持？](https://caniuse.com/mdn-api_speechsynthesis)

## Usage

```ts
import { useSpeechSynthesis } from '@vueuse/core'

const {
  isSupported,
  isPlaying,
  status,
  voiceInfo,
  utterance,
  error,

  toggle,
  speak,
} = useSpeechSynthesis()
```

### Options

下面显示了选项的默认值，它们将直接传递给 [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)。

```ts
useSpeechSynthesis({
  lang: 'en-US',
  pitch: 1,
  rate: 1,
  volume: 1,
})
```
