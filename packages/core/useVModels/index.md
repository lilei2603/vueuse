---
category: Component
---

# useVModels

给props绑定v-model的简写。相当于 `toRefs(props)`，但更改也会触发发射。

## Usage

```js
import { useVModels } from '@vueuse/core'

export default {
  props: {
    foo: String,
    bar: Number,
  },
  setup(props, { emit }) {
    const { foo, bar } = useVModels(props, emit)

    console.log(foo.value) // props.foo
    foo.value = 'foo' // emit('update:foo', 'foo')
  },
}
```

## 相关功能

- `useVModel`
