import { app, BrowserWindow } from 'electron/main'
import path from 'path'

import { registerProtocolsPrivilege, registerProtocols } from './protocols'
import ipc from './ipc'

registerProtocolsPrivilege()
ipc()

function createWindow()
{
  const mainWindow = new BrowserWindow({
    width: 1360,
    height: 768,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'dist/preload', 'preload.js')
    },
    backgroundColor: '#2b2e3b',
  })

  mainWindow.loadURL('__mainWindowLoadURL__')
  
  // Open the DevTools
  mainWindow.once('ready-to-show', () => {
    mainWindow.webContents.openDevTools({mode: 'detach'})
  })
}

app.whenReady().then(() => {
  registerProtocols()
  createWindow()

  app.on('activate', function() {
    // macOS
    if (BrowserWindow.getAllWindows.length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', function() {
  if(process.platform !== 'darwin') app.quit()
})
