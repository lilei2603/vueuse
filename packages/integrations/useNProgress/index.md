---
category: '@Integrations'
---

# useNProgress

[`nprogress`](https://github.com/rstacruz/nprogress) 的响应式封装

## Usage

```js {6}
import { useNProgress } from '@vueuse/integrations/useNProgress'

const { isLoading } = useNProgress()

function toggle() {
  isLoading.value = !isLoading.value
}
```

### 传递进度百分比

您可以传递一个百分比来指示栏应该从哪里开始。

```js {3}
import { useNProgress } from '@vueuse/integrations/useNProgress'

const { progress } = useNProgress(0.5)

function done() {
  progress.value = 1.0
}
```

> 要更改进度百分比，请设置 `progress.value = n`，其中 n 是介于 0..1 之间的数字。

### 定制化

只需根据自己的喜好编辑 [nprogress.css](http://ricostacruz.com/nprogress/nprogress.css)。提示：您可能只想查找和替换出现的#29d。

您可以通过传递一个对象作为第二个参数来[配置](https://github.com/rstacruz/nprogress#configuration)它。

```js {4}
import { useNProgress } from '@vueuse/integrations/useNProgress'

useNProgress(null, {
  minimum: 0.1,
  // ...
})
```
