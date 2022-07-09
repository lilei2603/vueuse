---
category: Browser
---

# useWebNotification

响应式的 [Notification](https://developer.mozilla.org/en-US/docs/Web/API/notification)

Notifications API 的 Web Notification 接口用于配置和向用户显示桌面通知。

## Usage

```ts
const {
  isSupported,
  notification,
  show,
  close,
  onClick,
  onShow,
  onError,
  onClose,
} = useWebNotification({
  title: 'Hello, VueUse world!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
})

if (isSupported)
  show()
```

这个可组合组件还利用了来自 '@vueuse/shared' 的 createEventHook 实用程序：

```ts
onClick((evt: Event) => {
  // Do something with the notification on:click event...
})

onShow((evt: Event) => {
  // Do something with the notification on:show event...
})

onError((evt: Event) => {
  // Do something with the notification on:error event...
})

onClose((evt: Event) => {
  // Do something with the notification on:close event...
})
```
