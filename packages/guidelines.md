# 指导

以下是 VueUse 函数的指南。您还可以将它们作为参考来编写您自己的可组合函数或应用程序。

您还可以通过 [Anthony Fu](https://github.com/antfu) 关于 VueUse 的演讲找到这些设计决策的一些原因以及编写可组合函数的一些技巧：

- [Composable Vue](https://antfu.me/posts/composable-vue-vueday-2021) - at VueDay 2021
- [可组合的 Vue](https://antfu.me/posts/composable-vue-vueconf-china-2021) - at VueConf China 2021 (in Chinese)

## 通用

- 从 `“vue-demi”` 导入所有 Vue API
- 尽可能使用 `ref` 代替 `reactive`
- 尽可能使用选项对象作为参数，以便对未来的扩展更加灵活。
- 包装大量数据时使用 `shallowRef` 而不是 `ref`。
- 在使用 `window`之类的全局变量时使用 `configurableWindow`（等），以便在使用多窗口、测试模拟和服务端渲染时更加灵活。
- 当涉及浏览器尚未广泛实现的 Web API 时，也会输出 `isSupported` 标志
- 在内部使用 `watch` 或 `watchEffect` 时，还要尽可能配置 `immediate` 和 `flush` 选项
- 使用 `tryOnUnmounted` 优雅地清除副作用
- 避免使用控制台日志
- 函数异步时，返回一个 PromiseLike

另请阅读：[最佳实践](./guide/best-practice.md)

## ShallowRef

包装大量数据时使用 `shallowRef` 而不是 `ref。`

```ts
export function useFetch<T>(url: MaybeRef<string>) {
  // 使用 `shallowRef` 来防止深度反应
  const data = shallowRef<T | undefined>()
  const error = shallowRef<Error | undefined>()

  fetch(unref(url))
    .then(r => r.json())
    .then(r => data.value = r)
    .catch(e => error.value = e)

  /* ... */
}
```

## 可配置的全局变量

在使用 `window` 或 `document` 等全局变量时，在 `options` 界面支持 `configurableWindow` 或 `configurableDocument` ，使函数在多窗口、测试mock、SSR等场景下更加灵活。

了解相关的更多信息： [`_configurable.ts`](https://github.com/vueuse/vueuse/blob/main/packages/core/_configurable.ts)

```ts
import type { ConfigurableWindow } from '../_configurable'
import { defaultWindow } from '../_configurable'

export function useActiveElement<T extends HTMLElement>(
  options: ConfigurableWindow = {},
) {
  const {
    // defaultWindow = isClient ? window : undefined
    window = defaultWindow,
  } = options

  let el: T

  // 在 Node.js 环境 (SSR) 中时跳过
  if (window) {
    window.addEventListener('blur', () => {
      el = window?.document.activeElement
    }, true)
  }

  /* ... */
}
```

使用示例：

```ts
// 在 iframe 中并绑定到父窗口
useActiveElement({ window: window.parent })
```

## 监听选项

在内部使用 `watch` 或 `watchEffect` 时，还应尽可能使 `immediate` 和 `flush` 选项可配置。例如 `watchDebounced`：

```ts
import type { WatchOptions } from 'vue-demi'

// 扩展监听选项
export interface WatchDebouncedOptions extends WatchOptions {
  debounce?: number
}

export function watchDebounced(
  source: any,
  cb: any,
  options: WatchDebouncedOptions = {},
): WatchStopHandle {
  return watch(
    source,
    () => { /* ... */ },
    options, // 传递监听选项
  )
}
```

## 控制选项

我们使用 `控制` 选项，允许用户使用单次返回的功能进行简单的使用，同时在需要时能够拥有更多的控制和灵活性。阅读更多：[#362](https://github.com/vueuse/vueuse/pull/362)。

#### 何时提供 `控制` 选项

- 该函数更常与单个 `ref` 或
- 示例： `useTimestamp`, `useInterval`,

```ts
// 常见用法
const timestamp = useTimestamp()

// 更多的灵活性控制
const { timestamp, pause, resume } = useTimestamp({ controls: true })
```

有关正确的 TypeScript 支持的实现，请参阅 `useTimestamps` 源代码。

#### 何时**不提供** `控制` 选项 

- 该函数更常用于多次返回
- 示例： `useRafFn`, `useRefHistory`,

```ts
const { pause, resume } = useRafFn(() => {})
```

## `isSupported` 标志

当涉及浏览器尚未广泛实现的 Web API 时，也会输出 `isSupported` 标志。

例如使用 `useShare`:

```ts
export function useShare(
  shareOptions: MaybeRef<ShareOptions> = {},
  options: ConfigurableNavigator = {},
) {
  const { navigator = defaultNavigator } = options
  const isSupported = navigator && 'canShare' in navigator

  const share = async (overrideOptions) => {
    if (isSupported) {
      /* ...implementation */
    }
  }

  return {
    isSupported,
    share,
  }
}
```

## 异步组合式函数

当可组合对象是异步的时，例如 `useFetch`，最好从可组合对象返回 PromiseLike 对象，以便用户能够等待函数。这在 Vue 的 `<Suspense>` api 的情况下特别有用。

- 使用 `ref` 来确定函数应该何时解析，例如 `isFinished`。
- 将返回状态存储在一个变量中，因为它必须返回两次，一次在 return 中，一次在 promise 中。
- 返回类型应该是返回类型和 PromiseLike 之间的交集，例如：`UseFetchReturn & PromiseLike<UseFetchReturn></UseFetchReturn>`。

```ts
export function useFetch<T>(url: MaybeRef<string>): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>> {
  const data = shallowRef<T | undefined>()
  const error = shallowRef<Error | undefined>()
  const isFinished = ref(false)

  fetch(unref(url))
    .then(r => r.json())
    .then(r => data.value = r)
    .catch(e => error.value = e)
    .finally(() => isFinished.value = true)

  // 将返回状态存储在变量中
  const state: UseFetchReturn<T> = {
    data,
    error,
    isFinished,
  }

  return {
    ...state,
    // 将 `then` 添加到对象可以等待它。
    then(onFulfilled, onRejected) {
      return new Promise<UseFetchReturn<T>>((resolve, reject) => {
        until(isFinished)
          .toBeTruthy()
          .then(() => resolve(state))
          .then(() => reject(state))
      }).then(onFulfilled, onRejected)
    },
  }
}
```


## 无渲染组件

- 使用渲染函数而不是 Vue SFC
- 将 props 包裹在 `reactive` 中，以便轻松地将它们作为 props 传递到插槽
- 更喜欢使用函数选项作为道具类型，而不是自己重新创建它们
- 仅当函数需要绑定目标时，才将插槽包装在 HTML 元素中

```ts
import { defineComponent, reactive } from 'vue-demi'
import type { MouseOptions } from '@vueuse/core'
import { useMouse } from '@vueuse/core'

export const UseMouse = defineComponent<MouseOptions>({
  name: 'UseMouse',
  props: ['touch', 'resetOnTouchEnds', 'initialValue'] as unknown as undefined,
  setup(props, { slots }) {
    const data = reactive(useMouse(props))

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
```

有时一个函数可能有多个参数，在这种情况下，您可能需要创建一个新接口以将所有接口合并为一个用于组件道具的接口。

```ts
import type { TimeAgoOptions } from '@vueuse/core'
import { useTimeAgo } from '@vueuse/core'

interface UseTimeAgoComponentOptions extends Omit<TimeAgoOptions<true>, 'controls'> {
  time: MaybeRef<Date | number | string>
}

export const UseTimeAgo = defineComponent<UseTimeAgoComponentOptions>({ /* ... */ })
```
