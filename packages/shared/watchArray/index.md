---
category: Watch
---

# watchArray

监听对于数组的添加和删除操作

## Usage

与 `watch` 类似，但向回调函数提供添加和删除的元素。如果列表通过 `push`、`splice` 等就地更新，则传递 `{ deep: true }`。

```ts
import { watchArray } from '@vueuse/core'

const list = ref([1, 2, 3])

watchArray(list, (newList, oldList, added, removed) => {
  console.log(newList) // [1, 2, 3, 4]
  console.log(oldList) // [1, 2, 3]
  console.log(added) // [4]
  console.log(removed) // []
})

onMounted(() => {
  list.value = [...list.value, 4]
})
```
