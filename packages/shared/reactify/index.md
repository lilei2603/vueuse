---
category: Utilities
alias: createReactiveFn
---

# reactify

将普通函数转换为反应函数。转换后的函数接受 `refs` 作为其参数并返回一个具有正确类型的 `ComputedRef`。

::: tip
有兴趣查看一些应用程序或寻找一些预先反应的功能吗？

检出 [⚗️ Vue Chemistry](https://github.com/antfu/vue-chemistry)!
:::

## Usage

基本示例

```ts
import { reactify } from '@vueuse/core'

// 一个简单的函数
function add(a: number, b: number): number {
  return a + b
}

// 现在它接受 refs 并返回一个计算的 ref
// (a: number | Ref<number>, b: number | Ref<number>) => ComputedRef<number>
const reactiveAdd = reactify(add)

const a = ref(1)
const b = ref(2)
const sum = reactiveAdd(a, b)

console.log(sum.value) // 3

a.value = 5

console.log(sum.value) // 7
```

一个实现响应式[勾股定理](https://en.wikipedia.org/wiki/Pythagorean_theorem)的例子。

```ts
import { reactify } from '@vueuse/core'

const pow = reactify(Math.pow)
const sqrt = reactify(Math.sqrt)
const add = reactify((a: number, b: number) => a + b)

const a = ref(3)
const b = ref(4)
const c = sqrt(add(pow(a, 2), pow(b, 2)))
console.log(c.value) // 5

// 5:12:13
a.value = 5
b.value = 12
console.log(c.value) // 13
```

你也可以这样做：

```ts
import { reactify } from '@vueuse/core'

function pythagorean(a: number, b: number) {
  return Math.sqrt(a ** 2 + b ** 2)
}

const a = ref(3)
const b = ref(4)

const c = reactify(pythagorean)(a, b)
console.log(c.value) // 5
```

另一个使响应式 `stringify` 的例子

```ts
import { reactify } from '@vueuse/core'

const stringify = reactify(JSON.stringify)

const obj = ref(42)
const dumped = stringify(obj)

console.log(dumped.value) // '42'

obj.value = { foo: 'bar' }

console.log(dumped.value) // '{"foo":"bar"}'
```
