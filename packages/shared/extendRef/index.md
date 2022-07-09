---
category: Utilities
---

# extendRef

为 ref 添加额外的属性

## Usage

> 此功能与 Vue 2 **不兼容**。

> 请注意，在 Vue 的模板中将无法访问额外的属性。

```ts
import { ref } from 'vue'
import { extendRef } from '@vueuse/core'

const myRef = ref('content')

const extended = extendRef(myRef, { foo: 'extra data' })

extended.value === 'content'
extended.foo === 'extra data'
```

Refs 将被解包并且是响应式的

```ts
const myRef = ref('content')
const extraRef = ref('extra')

const extended = extendRef(myRef, { extra: extraRef })

extended.value === 'content'
extended.extra === 'extra'

extended.extra = 'new data' // will trigger update
extraRef.value === 'new data'
```
