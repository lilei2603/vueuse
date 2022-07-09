---
category: Browser
---

# useGamepad

为 [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) 提供响应式绑定。

## Usage

> 由于游戏手柄 API 的工作方式，您必须使用游戏手柄与页面进行交互才能检测到它。

```html
<script setup>
import { useGamepad } from '@vueuse/core'

const { isSupported, gamepads } = useGamepad()
const gamepad = computed(() => gamepads.find(g => g.mapping === 'standard'))
</script>

<template>
  <span>
    {{ gamepad.id }}
  <span>
</template>
```

### Gamepad Updates

目前 Gamepad API 不支持更新游戏手柄状态的事件。为了更新游戏手柄状态，`requestAnimationFrame` 用于轮询游戏手柄的变化。 您可以使用 `useGamepad` 提供的 `暂停` 和 `恢复` 功能来控制此轮询

```ts
const { pause, resume, gamepads } = useGamepad()

pause()

// 游戏手柄对象不会更新

resume()

// 游戏手柄对象将根据用户输入进行更新
```

### Gamepad Connect & Disconnect Events

`onConnected` 和 `onDisconnected` 事件将在游戏手柄连接或断开连接时触发。

```ts
const { gamepads, onConnected, onDisconnected } = useGamepad()

onConnected((index) => {
  console.log(`${gamepads.value[index].id} connected`)
})

onDisconnected((index) => {
  console.log(`${index} disconnected`)
})
```

### Vibration

> Gamepad Haptics API 是稀疏的，因此在使用前请检查 [兼容性](https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator#browser_compatibility)。 

```ts
const supportsVibration = computed(() => gamepad.hapticActuators.length > 0)
const vibrate = () => {
  if (supportsVibration.value) {
    const actuator = gamepad.hapticActuators[0]
    actuator.playEffect('dual-rumble', {
      startDelay: 0,
      duration: 1000,
      weakMagnitude: 1,
      strongMagnitude: 1,
    })
  }
}
```

### Mappings

为了使 Gamepad API 更易于使用，我们提供了将控制器映射到控制器按钮布局的映射。

#### Xbox360 Controller

```html
<script setup>
import { mapGamepadToXbox360Controller } from '@vueuse/core'

const controller = mapGamepadToXbox360Controller(gamepad)
</script>

<template>
  <span>{{ controller.buttons.a.pressed }}<span>
  <span>{{ controller.buttons.b.pressed }}<span>
  <span>{{ controller.buttons.x.pressed }}<span>
  <span>{{ controller.buttons.y.pressed }}<span>
</template>
```

目前只有 Xbox 360 控制器的映射。如果您有想要为其添加映射的控制器，请随时打开 PR 以获取更多控制器映射！
