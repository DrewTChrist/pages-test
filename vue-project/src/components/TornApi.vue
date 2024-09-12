<script setup>
import { ref } from 'vue'
import axios from 'axios';

const apiKey = ref(null)
const error = ref(null)
const data = ref(null)

async function getLookup() {
  data.value = null
  error.value = null
  if (apiKey.value) {
    await axios({
      method: 'get',
      url: `https://api.torn.com/user/?selections=profile&key=${apiKey.value}`
    })
      .then((response) => {
        if (response.data.error) {
          error.value = response.data.error.error
        } else {
          data.value = response.data
        }
      })
      .catch((err) => {
        error.value = err.data
      })
  } else {
    error.value = "Api key is empty"
  }
}

</script>

<template>
  <div class="item">
    <h3>Torn API Example</h3>
    <div>
      <input type="text" v-model="apiKey" />
      <input @click="getLookup" type="button" value="Connect" />
    </div>
    <div v-if="error" class="alert">
      <div class="alert-inner">
        <h4 class="alert-header">Error:</h4>
        <p>{{ error }}</p>
      </div>
    </div>
    <div class="sections">
      <div class="section">
        <h3>Profile</h3>
        <img :src="data.profile_image"/>
        <p>Rank: {{ data.rank }}</p>
        <p>Level: {{ data.level }}</p>
        <p>Honor: {{ data.honor }}</p>
      </div>
      <div class="section">
        <h3>Money</h3>
      </div>
      <div class="section">
        <h3>Networth</h3>
      </div>
    </div>
    <p v-if="data">
      {{ data }}
    </p>
  </div>
</template>

<style scoped>
input[type="text"] {
  padding: 0.3rem;
}

input[type="button"] {
  border: 0;
  background-color: hsl(221, 88%, 41%);
  border-radius: 5px;
  padding: 0.4rem;
  color: var(--color-background)
}

input[type="button"]:hover {
  background-color: hsl(221, 51%, 55%);
}

.sections {
  display: flex;
}

.section {
  border: 1px solid;
  border-color: var(--vt-c-divider-dark-1);
  border-radius: 5px;
  margin-top: 1rem;
  padding: 1rem; 
}

.alert {
  border: 1px solid;
  border-color: #c23737;
  background-color: hsla(0, 47%, 55%, 0.336);
  border-radius: 5px 5px 5px 5px;
  margin-top: 1rem;
  padding: 1rem;
}

.alert-inner {
  display: flex;
}

.alert-header {
  padding-right: 0.3rem;
}
</style>
