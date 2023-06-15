const { ipcMain } = require('electron/main')

function validateSender (frame) {
  let url = new URL(frame.url)
  return url.protocol === 'app:' && url.host === 'renderer'
}

export default function ipc() {
  ipcMain.handle('ping', (event) => {
    if (!validateSender(event.senderFrame)) return null
    return 'pong'
  })
}
