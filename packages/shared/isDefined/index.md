---
category: Utilities
---

# isDefined

响应式数据的非空值检查类型保护

## Usage

```ts
import { isDefined } from '@vueuse/core'

const example = ref(Math.random() ? 'example' : undefined) // Ref<string | undefined>

if (isDefined(example))
  example // Ref<string>
```
