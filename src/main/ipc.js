const { ipcMain } = require('electron/main')

export default function ipc() {
  ipcMain.handle('ping', (event) => {
    return 'pong'
  })
}
