<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="logos">
    <img alt="Electron logo" src="./assets/electron.svg" />
    <img alt="Vue logo" src="./assets/vue.png" />
    <img alt="Vite logo" src="./assets/vite.svg" width="200" height="200" />
  </div>
  <HelloWorld msg="Hello Electron + Vue 3 + Vite" />
</template>

<style>
body {
  color: #74b1be;
  background-color: #2b2e3b;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.logos img {
  margin: 0 15px;
}
</style>
