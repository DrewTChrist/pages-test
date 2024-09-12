<script setup>
// https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22
// import { shallowRef, onBeforeUnmount } from 'vue'
// import { useRouter } from 'vue-router'
import DirectorySection from '@/components/DirectorySection.vue'
import DirectoryItem from '@/components/DirectoryItem.vue'
import PlaygroundItem from '@/components/PlaygroundItem.vue';
import TornApi from '@/components/TornApi.vue';
import { usePlaygroundStore } from '@/stores/playground'

const playground = usePlaygroundStore()

// const componentToRender = shallowRef(null)
// const router = useRouter()
// onBeforeUnmount(() => {
//   router.getRoutes().forEach((route) => {
//     if (route.name == 'playground') {
//       route.meta.componentToRender = componentToRender.value
//       console.log(route.meta.componentToRender)
//     }
//   })
// })

</script>

<template>
  <div class="content">
    <h1>Playground Directory</h1>
    <DirectorySection>
      <template #heading>Random Bits</template>
      <template #items>
        <DirectoryItem>
          <template #heading>
            Test Example
            <RouterLink @click="playground.component = PlaygroundItem" to="/playground">View Here</RouterLink>
          </template>
          <template #description>
            <p>This is an example entry.</p>
          </template>
        </DirectoryItem>
        <DirectoryItem>
          <template #heading>
            Torn API Example
            <RouterLink @click="playground.component = TornApi" to="/playground">View Here</RouterLink>
          </template>
          <template #description>
            <p>
              This example accepts an API key from the text based game Torn. It consumes the API and displays the data
              to the user.
            </p>
          </template>
        </DirectoryItem>
      </template>
    </DirectorySection>
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
