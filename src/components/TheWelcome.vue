<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem v-for="(item, index) in 3" :key="index">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>嘿嘿嘿</template>

    文本
  </WelcomeItem>
</template>
