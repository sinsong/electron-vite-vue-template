<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import electronSvg from './assets/electron.svg'
import vuePng from './assets/vue.png'
import viteSvg from './assets/vite.svg'
import vuetifySvg from './assets/vuetify.svg'
import { ref } from 'vue'

const width = ref(200)
const height = ref(200)
</script>

<template>
  <v-app>
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <v-col cols="3">
          <v-img alt="Electron logo" :src="electronSvg" :width="width" :height="height" />
        </v-col>
        <v-col cols="3">
          <v-img alt="Vue logo" :src="vuePng" :width="width" :height="height" />
        </v-col>
        <v-col cols="3">
          <v-img alt="Vite logo" :src="viteSvg" :width="width" :height="height" />
        </v-col>
        <v-col cols="3">
          <v-img alt="Vuetify logo" :src="vuetifySvg" :width="width" :height="height" />
        </v-col>
      </v-row>
      <HelloWorld msg="Hello Electron + Vue 3 + Vite + Vuetify" />
    </v-container>
  </v-app>
</template>

<style>
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
