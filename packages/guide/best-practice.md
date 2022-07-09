# 最佳实践

### 解构

VueUse 中的大多数函数都会返回一个 **refs对象**，您可以使用 [ES6的对象解构语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 来获取您需要的内容。例如：

```ts
import { useMouse } from '@vueuse/core'

// "x" 和 "y" 是 refs
const { x, y } = useMouse()

console.log(x.value)

const mouse = useMouse()

console.log(mouse.x.value)
```

如果您更喜欢将它们用作对象属性样式，则可以使用 `reactive()` 解开引用。例如：

```ts
import { reactive } from 'vue'
import { useMouse } from '@vueuse/core'

const mouse = reactive(useMouse())

// "x" 和 "y" 将自动展开，不需要 `.value`
console.log(mouse.x)
```
