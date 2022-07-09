<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'
import { computed } from 'vue'
import { functions } from '../../../../packages/metadata/metadata'

const props = defineProps<{ fn: string }>()

const info = computed(() => functions.find(i => i.name === props.fn))
const format = (ts: number) => ago(-1, 'day')
const lastUpdated = useTimeAgo(new Date(info.value?.lastUpdated || 0))
const link = computed(() => `/functions\#category=${encodeURIComponent(info.value.category)}`)

const getFunctionLink = (fn: string) => {
  const info = functions.find(i => i.name === fn)
  return info?.docs.replace(/https?:\/\/vueuse\.org\//g, '/')
}
</script>

<template>
  <div class="grid grid-cols-[100px_auto] gap-2 text-sm -mt-2 mb-8 items-start">
    <div opacity="50">
      分类
    </div>
    <div><a :href="link">{{ info.category }}</a></div>
    <template v-if="info.package !== 'core' && info.package !== 'shared'">
      <div opacity="50">
        包
      </div>
      <div><code>@vueuse/{{ info.package }}</code></div>
    </template>
    <template v-if="info.lastUpdated">
      <div opacity="50">
        最后更新
      </div>
      <div>{{ lastUpdated }}</div>
    </template>
    <template v-if="info.alias?.length">
      <div opacity="50">
        别名
      </div>
      <div flex="~ gap-1 wrap">
        <code v-for="a, idx of info.alias" :key="idx" class="!py-0">{{ a }}</code>
      </div>
    </template>
    <template v-if="info.related?.length">
      <div opacity="50">
        相关的
      </div>
      <div flex="~ gap-1 wrap">
        <a
          v-for="name, idx of info.related"
          :key="idx"
          class="!py-0"
          :href="getFunctionLink(name)"
        >
          <code>{{ name }}</code>
        </a>
      </div>
    </template>
  </div>
</template>
