---
category: Sensors
---

# useNavigatorLanguage

注意用户对浏览器语言首选项所做的更改。[浏览器语言MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)

## Usage

```ts
import { defineComponent, ref } from 'vue'
import { useNavigatorLanguage } from '@vueuse/core'

export default defineComponent({
  setup() {
    const { language } = useNavigatorLanguage()

    watch(language, () => {
      // Listen to the value changing
    })

    return {
      language,
    }
  },
})
```
