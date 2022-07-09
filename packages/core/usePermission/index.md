---
category: Browser
---

# usePermission

反应式 [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)。 Permissions API 提供的工具允许开发人员在权限方面实现更好的用户体验。

## Usage

```js
import { usePermission } from '@vueuse/core'

const microphoneAccess = usePermission('microphone')
```
