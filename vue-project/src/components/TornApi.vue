<script setup>
import { ref } from 'vue'
import axios from 'axios';

const apiKey = ref('')
const error = ref(null)
const profile = ref(null)

async function getProfile() {
  profile.value = null
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
          profile.value = response.data
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
      <input type="text" v-model="apiKey" placeholder="API Key" />
      <input :disabled="apiKey.length == 0" @click="getProfile" type="button" value="Connect" />
    </div>
    <div v-if="error" class="alert">
      <div class="alert-inner">
        <h4 class="alert-header">Error:</h4>
        <p>{{ error }}</p>
      </div>
    </div>
    <div class="sections">
      <div v-if="profile" class="section">
        <h3>Profile</h3>
        <img :src="profile.profile_image" height="100" width="75" />
        <p>Name: {{ profile.name }}</p>
        <p>Rank: {{ profile.rank }}</p>
        <p>Level: {{ profile.level }}</p>
        <p>Honor: {{ profile.honor }}</p>
      </div>
      <div v-else class="section">
        <h3>Profile</h3>
        <img height="100" width="75" />
        <p>Name:<span class="placeholder"></span></p>
        <p>Rank:<span class="placeholder"></span></p>
        <p>Level:<span class="placeholder"></span></p>
        <p>Honor:<span class="placeholder"></span></p>
      </div>
      <div class="section">
        <h3>Money</h3>
      </div>
      <div class="section">
        <h3>Networth</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="text"] {
  padding: 0.4rem;
  border-radius: 5px;
  /* border: 1px solid; */
  border: 0;
  outline-color: var(--vt-c-divider-dark-1);
  outline-style: solid;
  outline-width: thin;
}

input[type="text"]:focus {
  outline-color: var(--vt-c-divider-dark-1);
  outline-style: solid;
  outline-width: medium;
  /* padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid; */
}

input[type="button"] {
  border: 0;
  background-color: hsl(221, 100%, 63%);
  border-radius: 5px;
  padding: 0.4rem;
  margin-left: 1rem;
  color: var(--color-background)
}

input[type="button"]:hover {
  background-color: hsl(221, 100%, 38%);
}

input[type="button"]:disabled {
  background-color: hsl(0, 0%, 61%);
}

.sections {
  display: grid;
}

.section {
  width: 100%;
  border: 1px solid;
  border-color: var(--vt-c-divider-dark-1);
  border-radius: 5px;
  margin: 1rem 0rem 0rem 0rem;
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

@media (min-width: 1024px) {
  .sections {
    display: flex;
  }

  .section {
    margin: 1rem 0rem 0rem 1rem;
  }

  .section:first-of-type {
    margin: 1rem 0rem 0rem 0rem;
  }
}
</style>
