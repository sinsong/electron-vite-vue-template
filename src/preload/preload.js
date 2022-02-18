const { contextBridge, ipcRenderer } = require("electron/renderer");

// Context Bridge & IPC Renderer
contextBridge.exposeInMainWorld('App', {
  ping: () => ipcRenderer.invoke('ping')
})
