---
category: Sensors
---

# useMagicKeys

响应式的键盘按键状态，具有神奇的组合键支持。

<RequiresProxy />

## Usage

```js
import { useMagicKeys } from '@vueuse/core'

const { shift, space, a /* keys you want to monitor */ } = useMagicKeys()

watch(space, (v) => {
  if (v)
    console.log('space has been pressed')
})

watchEffect(() => {
  if (shift.value && a.value)
    console.log('Shift + A have been pressed')
})
```

Check out [all the possible keycodes](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values).

### Combinations

您可以通过使用 `+` 或 `_` 连接键来神奇地使用组合（快捷键/热键）。

```ts
import { useMagicKeys } from '@vueuse/core'

const keys = useMagicKeys()
const shiftCtrlA = keys['Shift+Ctrl+A']

watch(shiftCtrlA, (v) => {
  if (v)
    console.log('Shift + Ctrl + A have been pressed')
})
```

```ts
import { useMagicKeys } from '@vueuse/core'

const { Ctrl_A_B, space, alt_s /* ... */ } = useMagicKeys()

watch(Ctrl_A_B, (v) => {
  if (v)
    console.log('Control+A+B have been pressed')
})
```

你也可以使用 `whenever` 函数来缩短它。

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const keys = useMagicKeys()

whenever(keys.shift_space, () => {
  console.log('Shift+Space have been pressed')
})
```

### Current Pressed keys

提供了一个特殊的属性 `current` 来表示当前按下的所有键。

```ts
import { useMagicKeys } from '@vueuse/core'

const { current } = useMagicKeys()

console.log(current) // Set { 'control', 'a' }

whenever(
  () => current.has('a') && !current.has('b'),
  () => console.log('A is pressed but not B'),
)
```

### Key Aliasing

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const { shift_cool } = useMagicKeys({
  aliasMap: {
    cool: 'space',
  },
})

whenever(shift_cool, () => console.log('Shift + Space have been pressed'))
```

默认情况下，我们有一些[常用用法的预配置别名](https://github.com/vueuse/vueuse/blob/main/packages/core/useMagicKeys/aliasMap.ts)。

### Conditionally Disable

您的应用程序中可能有一些 `<input />` 元素，并且您不希望在用户关注这些输入时触发魔术键处理。有一个使用 `useActiveElement` 的示例及 `and` 去执行此操作。

```ts
import { and, useActiveElement, useMagicKeys, whenever } from '@vueuse/core'

const activeElement = useActiveElement()
const notUsingInput = computed(() =>
  activeElement.value?.tagName !== 'INPUT'
  && activeElement.value?.tagName !== 'TEXTAREA',
)

const { tab } = useMagicKeys()

whenever(and(tab, notUsingInput), () => {
  console.log('Tab has been pressed outside of inputs!')
})
```

### Custom Event Handler

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const { ctrl_s } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 's' && e.type === 'keydown')
      e.preventDefault()

  },
})

whenever(ctrl_s, () => console.log('Ctrl+S have been pressed'))
```

> ⚠️ 不推荐这种用法，请谨慎使用。

### Reactive Mode

默认情况下，`useMagicKeys()` 的值为 `Ref<boolean>`。如果要使用模板中的对象，可以将其设置为反应模式。

```ts
const keys = useMagicKeys({ reactive: true })
```

```html
<template>
  <div v-if="keys.shift">
    You are holding the Shift key!
  </div>
</template>
```
