<template>
  <div class="about">
    <h1 @click="send">This is an about page</h1>
    <svg-icon name="demo" size="28"/>
  </div>
</template>
<script setup>

// fetch('http://127.0.0.1:3000/api/info')
import { demoGet } from '@/api/demo.js';
const send = ()=>{
  demoGet()
}
fetch('/fn/data/user/stat')
</script>
<style></style>
