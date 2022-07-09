# 附加组件

核心包的目标是轻量级和无依赖。虽然附加组件将流行的包包装成一致的 API 样式。


## Head - [`@vueuse/head`](https://github.com/vueuse/head) <carbon-link class="external-link"/>
Vue 3 的文档头部管理器。SSR 已准备就绪。由 [@egoist](https://github.com/egoist) 创建和维护

## Motion - [`@vueuse/motion`](https://github.com/vueuse/motion) <carbon-link class="external-link"/>

**Vue组合式函数** 让你的组件动起来。

- 🏎 基于 [**Popmotion**](https://popmotion.io/) 的 **平滑动画**
- 🎮 **声明式** API
- 🚀 **即插即用** **10 多种预设**
- ✅ 使用 [**vue-demi**](https://github.com/antfu/vue-demi) 支持 **Vue 2 & Vue 3**
- 🚚 使用 [**nuxt-use-motion**](https://github.com/Tahul/nuxt-use-motion) 支持 **Nuxt**
- ✨ 用 **TypeScript** 构建
- 🏋️‍♀️ 轻量级，包容量 **<20kb** 

> 由 [@Tahul](https://github.com/Tahul) 创建和维护

## Gesture - [`@vueuse/gesture`](https://github.com/vueuse/gesture) <carbon-link class="external-link"/>

**Vue组合式函数** 使您的应用程序具有交互性

- 🚀 **即插即用**
- 🕹 **鼠标** 和 **触摸** 支持
- 🎮 **指令** 支持 (**v-drag**, **v-pinch**, **v-move**...)
- ✨ 用 **TypeScript** 构建
- ✅ 使用 [**vue-demi**](https://github.com/antfu/vue-demi) 支持 **Vue 2 & Vue 3**
- 🤹 与 [**vueuse/motion**](https://github.com/vueuse/motion) 或 **任何其他** 动画解决方案配合得很好

> 由 [@Tahul](https://github.com/Tahul) 创建和维护

## Sound - [`@vueuse/sound`](https://github.com/vueuse/sound) <carbon-link class="external-link"/>
**Vue组合式函数** 用于播放音效

- 👂 让您的网站具有两种感官
- 🔥 使用 **Vue** 组合式 API 构建
- ✅ 使用 [**vue-demi**](https://github.com/antfu/vue-demi) 支持 **Vue 2 & Vue 3**
- 🚚 使用 [**nuxt-use-sound**](https://github.com/Tahul/nuxt-use-sound) 支持 **Nuxt**
- ⚡️ **<1kb** 字节 (gzip) 在您的**包**中！ **~10kb** **异步**加载。
- ✨ 使用 **TypeScript** 构建
- 🗣 使用功能强大、久经考验的音频实用程序：[**Howler.js**](https://howlerjs.com/)

> 由 [@Tahul](https://github.com/Tahul) 创建和维护

## SchemaOrg - [`@vueuse/schema-org`](https://github.com/vueuse/schema-org) <carbon-link class="external-link"/>

用于 Vue 的 Schema.org。支持键入和自动化的 Google Rich Results

- 😊 无需架构知识，只需最少的配置即可在几分钟内启动并运行
- ✨ 20 多种用于最佳实践的类型化模式（[Google](https://developers.google.com/search/docs/advanced/structured-data/search-gallery)、[Yoast](https://developer.yoast.com/features/schema/overview)）丰富的结果
- 🧙 自动架构：`@id`、URL或者日期解析、路由元等
- 🤝 自动集成 [VitePress](https://vitepress.vue.com)、[Nuxt](https://nuxtjs.org/)、[Vitesse](https://nuxtjs.org/) 和 [Vite](https://vitejs.dev/) 
- 🍞 选择您喜欢的 API：组合式函数或组件
- 🌳 准备好 SSR、tree-shaking 和模式继承

> 由 [@harlan-zw](https://github.com/harlan-zw) 创建和维护

<!--GENERATED LIST, DO NOT MODIFY MANUALLY-->
<!--ADDONS_LIST_STARTS-->
## Router - [`@vueuse/router`](https://vueuse.org/router/README.html)
Utilities for vue-router
  - [`useRouteHash`](https://vueuse.org/router/useRouteHash/) — shorthand for reactive route.hash
  - [`useRouteParams`](https://vueuse.org/router/useRouteParams/) — shorthand for reactive route.params
  - [`useRouteQuery`](https://vueuse.org/router/useRouteQuery/) — shorthand for reactive route.query


## Integrations - [`@vueuse/integrations`](https://vueuse.org/integrations/README.html)
Integration wrappers for utility libraries
  - [`useAsyncValidator`](https://vueuse.org/integrations/useAsyncValidator/) — wrapper for [`async-validator`](https://github.com/yiminghe/async-validator)
  - [`useAxios`](https://vueuse.org/integrations/useAxios/) — wrapper for [`axios`](https://github.com/axios/axios)
  - [`useChangeCase`](https://vueuse.org/integrations/useChangeCase/) — wrapper for [`change-case`](https://github.com/blakeembrey/change-case)
  - [`useCookies`](https://vueuse.org/integrations/useCookies/) — wrapper for [`universal-cookie`](https://www.npmjs.com/package/universal-cookie)
  - [`useDrauu`](https://vueuse.org/integrations/useDrauu/) — reactive instance for [drauu](https://github.com/antfu/drauu)
  - [`useFocusTrap`](https://vueuse.org/integrations/useFocusTrap/) — reactive wrapper for [`focus-trap`](https://github.com/focus-trap/focus-trap)
  - [`useFuse`](https://vueuse.org/integrations/useFuse/) — easily implement fuzzy search using a composable on top of the zero-dependency library [Fuse.js](https://github.com/krisk/fuse)
  - [`useJwt`](https://vueuse.org/integrations/useJwt/) — wrapper for [`jwt-decode`](https://github.com/auth0/jwt-decode)
  - [`useNProgress`](https://vueuse.org/integrations/useNProgress/) — reactive wrapper for [`nprogress`](https://github.com/rstacruz/nprogress)
  - [`useQRCode`](https://vueuse.org/integrations/useQRCode/) — wrapper for [`qrcode`](https://github.com/soldair/node-qrcode)


## RxJS - [`@vueuse/rxjs`](https://vueuse.org/rxjs/README.html)
Enables RxJS reactive functions in Vue
  - [`from`](https://vueuse.org/rxjs/from/) — / fromEvent
  - [`toObserver`](https://vueuse.org/rxjs/toObserver/) — sugar function to convert a ref in an observer
  - [`useObservable`](https://vueuse.org/rxjs/useObservable/) — use an Observable
  - [`useSubject`](https://vueuse.org/rxjs/useSubject/) — bind Subject to ref and propagate value changes both ways
  - [`useSubscription`](https://vueuse.org/rxjs/useSubscription/) — uses subscriptions without worry about unsubscribing to it or memory leaks


## Firebase - [`@vueuse/firebase`](https://vueuse.org/firebase/README.html)
Enables realtime bindings for Firebase
  - [`useAuth`](https://vueuse.org/firebase/useAuth/) — reactive [Firebase Auth](https://firebase.google.com/docs/auth) binding
  - [`useFirestore`](https://vueuse.org/firebase/useFirestore/) — reactive [Firestore](https://firebase.google.com/docs/firestore) binding
  - [`useRTDB`](https://vueuse.org/firebase/useRTDB/) — reactive [Firebase Realtime Database](https://firebase.google.com/docs/database) binding


## Electron - [`@vueuse/electron`](https://vueuse.org/electron/README.html)
Electron renderer process modules for VueUse
  - [`useIpcRenderer`](https://vueuse.org/electron/useIpcRenderer/) — provides [ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer) and it's all APIs
  - [`useIpcRendererInvoke`](https://vueuse.org/electron/useIpcRendererInvoke/) — reactive [ipcRenderer.invoke API](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args) result
  - [`useIpcRendererOn`](https://vueuse.org/electron/useIpcRendererOn/) — use [ipcRenderer.on](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener) with ease and [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener) automatically on unmounted
  - [`useZoomFactor`](https://vueuse.org/electron/useZoomFactor/) — reactive [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) zoom factor
  - [`useZoomLevel`](https://vueuse.org/electron/useZoomLevel/) — reactive [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) zoom level


<!--ADDONS_LIST_ENDS-->
