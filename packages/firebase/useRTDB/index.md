---
category: '@Firebase'
---

# useRTDB

响应式的 [Firebase Realtime Database](https://firebase.google.com/docs/database) 实时数据库绑定。使**始终保持本地数据与远程数据库同步**变得简单。在附加组件 @vueuse/firebase 中可用。

## Usage

```js
import firebase from 'firebase/app'
import 'firebase/database'
import { useRTDB } from '@vueuse/firebase/useRTDB'

const db = firebase
  .initializeApp({ databaseURL: 'https://MY-DATABASE.firebaseio.com' })
  .database()

// in setup()
const todos = useRTDB(db.ref('todos'))
```

您可以通过传递 `autoDispose: false` 来重用 db 引用

```ts
const todos = useRTDB(db.ref('todos'), { autoDispose: false })
```

或使用核心包中的 `createGlobalState`

```js
// store.js
import { createGlobalState } from '@vueuse/core'
import { useRTDB } from '@vueuse/firebase/useRTDB'

export const useTodos = createGlobalState(
  () => useRTDB(db.ref('todos')),
)
```

```js
// app.js
import { useTodos } from './store'

const todos = useTodos()
```
