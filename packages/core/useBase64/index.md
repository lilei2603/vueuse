---
category: Utilities
---

# useBase64

响应式的 base64 转换。支持纯文本、缓冲区、文件、画布、对象、地图、集合和图像。

## Usage

```ts
import { Ref, ref } from 'vue'
import { useBase64 } from '@vueuse/core'

const text = ref('')

const { base64 } = useBase64(text)
```

如果您使用对象、数组、映射或集合，您可以在选项中提供序列化程序。否则，您的数据将被默认序列化程序序列化。
对象和数组将由 `JSON.stringify` 转换为字符串。 `map` 和 `set` 在 `stringify` 之前将分别转换为 `object` 和 `array`。
