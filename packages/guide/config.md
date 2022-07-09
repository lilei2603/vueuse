# 配置

这些显示了 VueUse 中大多数功能的一般配置。

### 事件过滤器

从 v4.0 开始，我们提供了事件过滤器系统，以便灵活地控制何时触发事件。例如，您可以使用 `throttleFilter` 和 `debounceFilter` 来控制事件触发率：

```ts
import { debounceFilter, throttleFilter, useLocalStorage, useMouse } from '@vueuse/core'

// 更改将写入 localStorage 并限制为 1s
const storage = useLocalStorage('my-key', { foo: 'bar' }, { eventFilter: throttleFilter(1000) })

// 鼠标空闲 100ms 后鼠标位置会更新
const { x, y } = useMouse({ eventFilter: debounceFilter(100) })
```

此外，您可以利用 `pausableFilter` 暂时暂停某些事件。

```ts
import { pausableFilter, useDeviceMotion } from '@vueuse/core'

const motionControl = pausableFilter()

const motion = useDeviceMotion({ eventFilter: motionControl.eventFilter })

motionControl.pause()

// 动作更新暂停

motionControl.resume()

// 动作更新已恢复
```

### 反应时间

VueUse 的函数在可能的情况下遵循 Vue 的响应式系统默认值以进行 [时间冲洗](https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing)。

对于 `watch` 类的组合式函数（例如 `pausableWatch`，`whenever`，`useStorage`，`useRefHistory`，默认为 `{ flush: 'pre' }`。这意味着它们将缓冲无效的效果并异步刷新它们。当同一个“tick”中发生多个状态突变时，这避免了不必要的重复调用。

与 `watch` 一样，VueUse 允许您通过传递 `flush` 选项来配置时间：

```ts
const { pause, resume } = pausableWatch(
  () => {
    // 安全访问更新的 DOM
  },
  { flush: 'post' },
)
```

**刷新选项（默认值：`'pre'`）**
- `'pre'`: 在同一个“tick”中缓冲无效的效果并在渲染之前刷新它们
- `'post'`: async 类似于 'pre' 但在组件更新后触发，因此您可以访问更新后的 DOM
- `'sync'`: 强制效果始终同步触发

**注意:**：对于类似`computed`的组合式函数（例如 `syncRef`，`controlledComputed`), { flush: 'sync' } 以使它们与 Vue 中计算 refs 的工作方式保持一致。
**注意:** For `computed`-like composables (e.g. `syncRef`, `controlledComputed`)。当刷新时间可配置时，默认更改为 `{ flush: 'sync' }` 以使它们与 Vue 中计算 refs 的工作方式保持一致

### 可配置的全局依赖

从 v4.0 开始，访问浏览器 API 的函数将提供一个选项字段供您指定全局依赖项（例如：`window`, `document` 和 `navigator`。 它会默认使用全局实例，所以在大多数情况下，您不必担心它。此配置在使用 iframe 和测试环境时很有用。

```ts
// 访问父上下文
const parentMousePos = useMouse({ window: window.parent })

const iframe = document.querySelect('#my-iframe')

// 访问子上下文
const childMousePos = useMouse({ window: iframe.contextWindow })
```

```ts
// 测试
const mockWindow = { /* ... */ }

const { x, y } = useMouse({ window: mockWindow })
```
