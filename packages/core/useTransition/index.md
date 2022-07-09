---
category: Animation
---

# useTransition

值之间的转换

## Usage

对于简单的转换，请提供要监听的数字源值。更改后，输出将转换为新值。如果在转换过程中源发生变化，则新转换将从前一个转换中断的位置开始。

```js
import { ref } from 'vue'
import { TransitionPresets, useTransition } from '@vueuse/core'

const source = ref(0)

const output = useTransition(source, {
  duration: 1000,
  transition: TransitionPresets.easeInOutCubic,
})
```

要同步转换，请使用数字数组。例如，下面是我们如何在颜色之间进行转换。

```js
const source = ref([0, 0, 0])

const output = useTransition(source)

const color = computed(() => {
  const [r, g, b] = output.value
  return `rgb(${r}, ${g}, ${b})`
})
```

可以使用三次贝塞尔曲线自定义过渡缓动。以这种方式定义的转换与 [CSS easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#easing_functions)的工作方式相同。

```js
useTransition(source, {
  transition: [0.75, 0, 0.25, 1],
})
```

以下转换可通过 `TransitionPresets` 常量获得。

- [`linear`](https://cubic-bezier.com/#0,0,1,1)
- [`easeInSine`](https://cubic-bezier.com/#.12,0,.39,0)
- [`easeOutSine`](https://cubic-bezier.com/#.61,1,.88,1)
- [`easeInOutSine`](https://cubic-bezier.com/#.37,0,.63,1)
- [`easeInQuad`](https://cubic-bezier.com/#.11,0,.5,0)
- [`easeOutQuad`](https://cubic-bezier.com/#.5,1,.89,1)
- [`easeInOutQuad`](https://cubic-bezier.com/#.45,0,.55,1)
- [`easeInCubic`](https://cubic-bezier.com/#.32,0,.67,0)
- [`easeOutCubic`](https://cubic-bezier.com/#.33,1,.68,1)
- [`easeInOutCubic`](https://cubic-bezier.com/#.65,0,.35,1)
- [`easeInQuart`](https://cubic-bezier.com/#.5,0,.75,0)
- [`easeOutQuart`](https://cubic-bezier.com/#.25,1,.5,1)
- [`easeInOutQuart`](https://cubic-bezier.com/#.76,0,.24,1)
- [`easeInQuint`](https://cubic-bezier.com/#.64,0,.78,0)
- [`easeOutQuint`](https://cubic-bezier.com/#.22,1,.36,1)
- [`easeInOutQuint`](https://cubic-bezier.com/#.83,0,.17,1)
- [`easeInExpo`](https://cubic-bezier.com/#.7,0,.84,0)
- [`easeOutExpo`](https://cubic-bezier.com/#.16,1,.3,1)
- [`easeInOutExpo`](https://cubic-bezier.com/#.87,0,.13,1)
- [`easeInCirc`](https://cubic-bezier.com/#.55,0,1,.45)
- [`easeOutCirc`](https://cubic-bezier.com/#0,.55,.45,1)
- [`easeInOutCirc`](https://cubic-bezier.com/#.85,0,.15,1)
- [`easeInBack`](https://cubic-bezier.com/#.36,0,.66,-.56)
- [`easeOutBack`](https://cubic-bezier.com/#.34,1.56,.64,1)
- [`easeInOutBack`](https://cubic-bezier.com/#.68,-.6,.32,1.6)

对于更复杂的转换，可以提供自定义函数。

```js
const easeOutElastic = (n) => {
  return n === 0
    ? 0
    : n === 1
      ? 1
      : (2 ** (-10 * n)) * Math.sin((n * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1
}

useTransition(source, {
  transition: easeOutElastic,
})
```

要控制转换何时开始，请设置 `delay`。要围绕转换编排行为，请定义 `onStarted` 或 `onFinished` 回调。

```js
useTransition(source, {
  delay: 1000,
  onStarted() {
    // called after the transition starts
  },
  onFinished() {
    // called after the transition ends
  },
})
```

要暂时停止转换，请定义一个布尔类型的 `disabled` 属性。请注意，这与 `0` 的 `持续时间` 不同。禁用的转换 **同步** 跟踪源值。 他们不遵循 `delay`，也不会触发 `onStarted` 或 `onFinished` 回调。
