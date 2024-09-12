<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Logo" class="logo" src="https://avatars.githubusercontent.com/u/15133845" width="100" height="100" />
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/directory">Directory</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* .wrapper {
  background-color: red;
} */

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  /* background-color: green; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav li {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

/* mine */
nav ul {
  list-style-type: none;
  padding: 0;
}

nav li:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  /* mine */
  nav li {
    display: block;
  }

  nav li {
    border-left: 0;
  }
}
</style>
