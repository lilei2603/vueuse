---
category: Browser
---

# usePreferredLanguages

响应式的 [Navigator Languages](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages). 它为 Web 开发人员提供有关用户首选语言的信息。例如，这可能有助于根据用户的首选语言调整用户界面的语言，以便提供更好的体验。

## Usage

```js
import { usePreferredLanguages } from '@vueuse/core'

const languages = usePreferredLanguages()
```

## Component Usage

```html
<UsePreferredLanguages v-slot="{ languages }">
  Preferred Languages: {{ languages }}
</UsePreferredLanguages>
```
