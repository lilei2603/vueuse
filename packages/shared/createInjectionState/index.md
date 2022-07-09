---
category: State
---

# createInjectionState

创建可以注入组件的全局状态。


## Usage

```ts
// useCounterStore.ts
import { computed, ref } from 'vue-demi'
import { createInjectionState } from '@vueuse/shared'

const [useProvideCounterStore, useCounterStore] = createInjectionState((initialValue: number) => {
  // state
  const count = ref(initialValue)

  // getters
  const double = computed(() => count.value * 2)

  // actions
  function increment() {
    count.value++
  }

  return { count, double, increment }
})

export { useProvideCounterStore }
// 如果你想隐藏`useCounterStore`并将其包装在默认值逻辑或抛出错误逻辑中，请不要导出`useCounterStore`
export { useCounterStore }

export function useCounterStoreWithDefaultValue() {
  return useCounterStore() ?? {
    count: ref(0),
    double: ref(0),
    increment: () => {},
  }
}

export function useCounterStoreOrThrow() {
  const counterStore = useCounterStore()
  if (counterStore == null)
    throw new Error('Please call `useProvideCounterStore` on the appropriate parent component')
  return counterStore
}
```

```vue
<!-- RootComponent.vue -->
<script setup lang="ts">
import { useProvideCounterStore } from './useCounterStore'

useProvideCounterStore(0)
</script>

<template>
  <div>
    <slot />
  </div>
</template>
```

```vue
<!-- CountComponent.vue -->
<script setup lang="ts">
import { useCounterStore } from './useCounterStore'

// 使用非空断言运算符忽略未提供 store 的情况。
const { count, double } = useCounterStore()!
// 如果您想让组件在不提供商店的情况下工作，您可以使用以下代码：
// const { count, double } = useCounterStore() ?? { count: ref(0), double: ref(0) }
// 此外，您可以使用另一个挂钩来提供默认值
// const { count, double } = useCounterStoreWithDefaultValue()
// 或抛出异常
// const { count, double } = useCounterStoreOrThrow()
</script>

<template>
  <ul>
    <li>
      count: {{ count }}
    </li>
    <li>
      double: {{ double }}
    </li>
  </ul>
</template>
```

```vue
<!-- ButtonComponent.vue -->
<script setup lang="ts">
import { useCounterStore } from './useCounterStore'

// 使用非空断言运算符忽略未提供 store 的情况。
const { increment } = useCounterStore()!
</script>

<template>
  <button @click="increment">
    +
  </button>
</template>
```
