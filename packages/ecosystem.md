# 生态系统

在开发 VueUse 时，我们将正在使用的工具提取到单独的项目中，这些项目可以不时独立使用。

<h2 align="center">
<a href="https://github.com/vueuse/vue-demi" target="_blank">
<img src="https://github.com/vueuse/vue-demi/raw/master/assets/banner.png" alt="vue-demi" width="500"/>
</a>
</h2>

Vue Demi 是一个工具，供库作者创建可组合的库，这些库可以同构地适用于 Vue 2 和 3，就像 VueUse 一样。它已被许多流行的库（如 [`vuelidate`](https://github.com/vuelidate/vuelidate) 和 [`vue-promised`](https://github.com/posva/vue-promised)）广泛采用。

<h2 align="center">
<a href="https://github.com/vueuse/vue-chemistry" target="_blank">
<img src="https://github.com/vueuse/vue-chemistry/raw/main/res/hero.png" alt="vue-chemistry" width="500"/>
</a>
</h2>

Vue Chemistry 利用 `reactify` 函数并将其应用于常见的 JavaScript API，从而实现纯粹的反应式编程体验。例如：

```js
import { set } from 'vue-chemistry'
import * as console from 'vue-chemistry/console'
import { pow, sqrt, sum } from 'vue-chemistry/math'

//      _________
// c = √ a² + b²
const a = ref(3)
const b = ref(4)
const c = sqrt(sum(pow(a, 2), pow(b, 2)))
console.log(c) // 5

set(a, 5) // shorthand for a.value = 5
set(b, 12)
console.log(c) // 13
```
