---
category: Sensors
---

# useKeyModifier

响应式的 [Modifier State](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState)。跟踪任何受支持的修饰符的状态 - 请参阅 [浏览器兼容性说明](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#browser_compatibility)。

## Usage

```ts
import { useKeyModifier } from '@vueuse/core'

const capsLockState = useKeyModifier('CapsLock')

console.log(capsLockState.value)
```

## Events

您可以自定义哪些事件将提示状态更新。默认情况下，这些是 `mouseup`、`mousedown`、`keyup`、`keydown`。要自定义这些事件：

```ts
import { useKeyModifier } from '@vueuse/core'

const capsLockState = useKeyModifier('CapsLock', { events: ['mouseup', 'mousedown'] })

console.log(capsLockState) // null

// Caps Lock turned on with key press
console.log(capsLockState) // null

// Mouse button clicked
console.log(capsLockState) // true
```

## Initial State

默认情况下，在接收到第一个事件之前，返回的 ref 将是 `Ref<null>`。您可以通过以下方式将初始状态显式传递给它：

```ts
const capsLockState1 = useKeyModifier('CapsLock') // Ref<boolean | null>
const capsLockState2 = useKeyModifier('CapsLock', { initial: false }) // Ref<boolean>
```
