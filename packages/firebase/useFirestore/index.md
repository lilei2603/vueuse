---
category: '@Firebase'
---

# useFirestore

响应式的 [Firestore](https://firebase.google.com/docs/firestore) 绑定。使**始终保持本地数据与远程数据库同步**变得简单。在附加组件 @vueuse/firebase 中可用。

## Usage

```js {7,9}
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useFirestore } from '@vueuse/firebase/useFirestore'

const db = firebase.initializeApp({ projectId: 'MY PROJECT ID' }).firestore()

const todos = useFirestore(db.collection('todos'))

// or for doc reference
const user = useFirestore(db.collection('users').doc('my-user-id'))
```

## 跨实例共享

您可以通过传递 `autoDispose: false` 来重用 db 引用

```ts
const todos = useFirestore(db.collection('todos'), undefined, { autoDispose: false })
```

或使用核心包中的 `createGlobalState`

```js
// store.js
import { createGlobalState } from '@vueuse/core'
import { useFirestore } from '@vueuse/firebase/useFirestore'

export const useTodos = createGlobalState(
  () => useFirestore(db.collection('todos')),
)
```

```js
// app.js
import { useTodos } from './store'

export default {
  setup() {
    const todos = useTodos()
    return { todos }
  },
}
```
