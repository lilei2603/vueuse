---
category: Browser
---

# useShare

响应式的 [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)。浏览器提供可以共享文本或文件内容的功能。

> 必须按照用户手势（如按钮单击）调用 `share` 方法。例如，不能简单地在页面加载时调用它。这是为了防止滥用。

## Usage

```js
import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()

function startShare() {
  share({
    title: 'Hello',
    text: 'Hello my friend!',
    url: location.href,
  })
}
```


### Passing a source ref

您可以将 `ref` 传递给它，源 `ref` 的更改将反映到您的共享选项中。

```js {7}
import { ref } from 'vue'

const shareOptions = ref < ShareOptions > ({ text: 'foo' })
const { share, isSupported } = useShare(shareOptions)

shareOptions.value.text = 'bar'

share()
```
