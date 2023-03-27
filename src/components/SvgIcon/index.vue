<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  // svg文件名称
  name: {
    type: String,
    required: true
  },
  // 图标大小
  size: {
    type: String,
    default: '128'
  },
  prefix: {
    type: String,
    default: 'icon',
  },
  color: {
    type: String,
    default: '#333',
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style scope>
.svg-icon {
  /* width: 16px;
  height: 16px; */
  width: v-bind(size + 'px');
  height: v-bind(size + 'px');
  color: #333;
  fill: currentColor;
}
</style>
