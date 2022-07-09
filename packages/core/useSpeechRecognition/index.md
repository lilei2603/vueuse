---
category: Sensors
---

# useSpeechRecognition

响应式的 [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).

> [是否支持？](https://caniuse.com/mdn-api_speechrecognition)

## Usage

```ts
import { useSpeechRecognition } from '@vueuse/core'

const {
  isSupported,
  isListening,
  isFinal,
  result,
  start,
  stop,
} = useSpeechRecognition()
```

### Options

下面显示了选项的默认值，它们将直接传递给 [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)。

```ts
useSpeechRecognition({
  lang: 'en-US',
  interimResults: true,
  continuous: true,
})
```
