---
category: Utilities
alias: controlledRef
related: computedWithControl
---

# refWithControl

对响应式数据以及细粒度控制。 （仅限 Vue 3）

## Usage

`refWithControl` 使用 `extendRef` 提供两个额外的函数 `get` 和 `set` 以更好地控制何时应该跟踪/触发反应性。

```ts
import { refWithControl } from '@vueuse/core'

const num = refWithControl(0)
const doubled = computed(() => num.value * 2)

// just like normal ref
num.value = 42
console.log(num.value) // 42
console.log(doubled.value) // 84

// set value without triggering the reactivity
num.set(30, false)
console.log(num.value) // 30
console.log(doubled.value) // 84 (doesn't update)

// get value without tracking the reactivity
watchEffect(() => {
  console.log(num.peek())
}) // 30

num.value = 50 // watch effect wouldn't be triggered since it collected nothing.
console.log(doubled.value) // 100 (updated again since it's a reactive set)
```

### `peek`, `lay`, `untrackedGet`, `silentSet`

我们还提供了一些在不跟踪/触发反应系统的情况下进行 get/set 的速记。以下几行是等效的。

```ts
const foo = refWithControl('foo')
```

```ts
// getting
foo.get(false)
foo.untrackedGet()
foo.peek() // an alias for `untrackedGet`
```

```ts
// setting
foo.set('bar', false)
foo.silentSet('bar')
foo.lay('bar') // an alias for `silentSet`
```

## 配置

### `onBeforeChange()`

提供 `onBeforeChange` 选项以控制是否应接受新值。例如：

```ts
const num = refWithControl(0, {
  onBeforeChange(value, oldValue) {
    // disallow changes larger then ±5 in one operation
    if (Math.abs(value - oldValue) > 5)
      return false // returning `false` to dismiss the change
  },
})

num.value += 1
console.log(num.value) // 1

num.value += 6
console.log(num.value) // 1 (change been dismissed)
```

### `onChanged()`

`onChanged` 选项提供了与 Vue 的 `watch` 类似的功能，但与 `watch` 相比，它的同步开销更少。

```ts
const num = refWithControl(0, {
  onChanged(value, oldValue) {
    console.log(value)
  },
})
```
