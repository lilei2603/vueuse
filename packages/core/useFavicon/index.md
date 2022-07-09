---
category: Browser
---

# useFavicon

响应式favicon

## Usage

```js {3}
import { useFavicon } from '@vueuse/core'

const icon = useFavicon()

icon.value = 'dark.png' // change current icon
```

### Passing a source ref

您可以将 ref 传递给它，原 ref 的更改将自动反映到您的 favicon。

```js {7}
import { computed } from 'vue'
import { useFavicon, usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()
const favicon = computed(() => isDark.value ? 'dark.png' : 'light.png')

useFavicon(favicon)
```

当一个源 ref 被传递时，返回的 ref 将与源 ref 相同

```ts
const source = ref('icon.png')
const icon = useFavicon(source)

console.log(icon === source) // true
```
