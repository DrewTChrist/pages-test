<script setup>
// import PlaygroundItem from '@/components/PlaygroundItem.vue';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { usePlaygroundStore } from '@/stores/playground'

const router = useRouter()
const playground = usePlaygroundStore()

onBeforeMount(() => {
  // if the user refreshes the page
  // playground.component becomes null
  if (!playground.component) {
    router.push({name: 'directory'})
  }
})
</script>

<template>
  <div class="content">
    <h1>Playground</h1>
    <component v-if="playground.component" :is="playground.component"></component>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .directory {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
