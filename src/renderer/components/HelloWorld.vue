<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const pingresult = ref('...')
const baseurl = ref('')

const nodeVersion     = ref('')
const chromeVersion   = ref('')
const electronVersion = ref('')

onMounted(async () => {
  baseurl.value = document.baseURI

  nodeVersion.value     = App.versions['node']
  chromeVersion.value   = App.versions['chrome']
  electronVersion.value = App.versions['electron']
})

function ping() {
  App.ping()
    .then((result) => {
      pingresult.value = result
    })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a
      href="https://www.electronjs.org/docs/latest/"
      target="_blank"
      class="electron"
    >Electron Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank" class="vue">Vue 3 Documentation</a>
    |
    <a
      href="https://vitejs.dev/"
      target="_blank"
      class="vite"
    >Vite Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <p>
    We are using Node.js {{ nodeVersion }},
    Chromium {{ chromeVersion }},
    and Electron {{ electronVersion }}.
  </p>

  <p>
    ES Module
    <strong>on</strong>! With
    <code>
      loadURL('
      <strong>{{ baseurl }}</strong>')
    </code>
  </p>

  <p>Electron IPC: {{ pingresult }}</p>
  <button @click="ping">ping!</button>
</template>

<style scoped>
a,
a.electron {
  color: #9feaf9;
}
a.vue {
  color: #42b983;
}

a.vite {
  color: #646cff;
}

h1,
strong {
  color: #9feaf6;
}

code {
  background-color: #3b434d;
  font-family: monospace;
  padding: 0.2em 0.5em;
  border-radius: 2.5px;
}
</style>
