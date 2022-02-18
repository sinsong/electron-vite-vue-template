const { contextBridge, ipcRenderer } = require("electron/renderer");

let versions = {}

for (const type of ['chrome', 'node', 'electron']) {
  versions[type] = process.versions[type]
}

// Context Bridge & IPC Renderer
contextBridge.exposeInMainWorld('App', {
  ping: () => ipcRenderer.invoke('ping'),
  versions
})
