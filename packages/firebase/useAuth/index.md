---
category: '@Firebase'
---

# useAuth

响应式的 [Firebase Auth](https://firebase.google.com/docs/auth) 身份验证绑定。它提供了响应式 `user` 和 `isAuthenticated`，因此您可以轻松地对用户身份验证状态的变化做出反应。在附加组件 @vueuse/firebase 中可用 。

## Usage

```html
<script setup lang="ts">
import firebase from 'firebase'
import { useAuth } from '@vueuse/firebase/useAuth'

const { GoogleAuthProvider } = firebase.auth

const { isAuthenticated, user } = useAuth(firebase.auth)

const signIn = () => firebase.auth().signInWithPopup(new GoogleAuthProvider())
</script>

<template>
  <pre v-if="isAuthenticated">{{ user }}</pre>
  <div v-else>
    <button @click="signIn">
      Sign In with Google
    </button>
  </div>
</template>
```
