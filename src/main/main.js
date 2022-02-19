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
    }
  })

  let loadurl = (process.env.NODE_ENV === 'development') ?
    'http://localhost:3000' :   // development
    'app://renderer/index.html' // builded

  mainWindow.loadURL(loadurl)
  
  // Open the DevTools
  mainWindow.webContents.openDevTools({mode: 'detach'})
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
