---
category: Utilities
---

# useMemoize

根据参数缓存函数的结果并保持其反应性。它也可以用于异步函数，并将重用现有的 Promise 以避免同时获取相同的数据。

::: tip
结果不会自动清除。如果您不再需要结果或使用自己的缓存机制来避免内存泄漏，请调用 `clear()`。
:::

## Usage

```ts
import { useMemoize } from '@vueuse/core'

const getUser = useMemoize(
  async (userId: number): Promise<UserData> =>
    axios.get(`users/${userId}`).then(({ data }) => data),
)

const user1 = await getUser(1) // Request users/1
const user2 = await getUser(2) // Request users/2
// ...
const user1 = await getUser(1) // Retrieve from cache

// ...
const user1 = await getUser.load(1) // Request users/1

// ...
getUser.delete(1) // Delete cache from user 1
getUser.clear() // Clear full cache
```

结合 `computed` 或 `asyncComputed` 来实现响应式：

```ts
const user1 = asyncComputed(() => getUser(1))
// ...
await getUser.load(1) // Will also update user1
```

### 解析缓存键

缓存的密钥由函数的参数决定，默认情况下会使用 `JSON.stringify` 进行序列化。这将允许相同的对象接收相同的缓存键。如果您想自定义密钥，您可以通过 `getKey`

```ts
const getUser = useMemoize(
  async (userId: number, headers: AxiosRequestHeaders): Promise<UserData> =>
    axios.get(`users/${userId}`, { headers }).then(({ data }) => data),
  {
    // Use only userId to get/set cache and ignore headers
    getKey: (userId, headers) => userId,
  },
)
```

::: warning
对于 Vue 2，键必须是 `字符串` 或 `数字`
:::

### 自定义缓存机制
默认情况下，结果缓存在 `Map`（Vue 2 的普通对象）中。您可以通过将 `cache` 作为具有以下结构的选项来实现自己的机制：
```ts
export interface MemoizeCache<Key, Value> {
  /**
   * Get value for key
   */
  get (key: Key): Value | undefined
  /**
   * Set value for key
   */
  set (key: Key, value: Value): void
  /**
   * Return flag if key exists
   */
  has (key: Key): boolean
  /**
   * Delete value for key
   */
  delete (key: Key): void
  /**
   * Clear cache
   */
  clear (): void
}
```
