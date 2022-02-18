const { app, protocol, BrowserWindow, ipcMain } = require('electron/main')
const path = require('path')

// grant app://
protocol.registerSchemesAsPrivileged([{
  scheme: 'app',
  privileges: {
    secure: true,
    standard: true, // work as http://
    supportFetchAPI: true,
    // allowServiceWorkers: true,
  }
}])

// registe app://
function registerProtocol()
{
  protocol.registerFileProtocol('app', (request, callback) => {
    // console.log(`app-protocol: ${request.url}`);
    let requrl = new URL(request.url)
    let reqpath = requrl .pathname
    let boundary = path.join('/', reqpath) // used for prevent ../.. attack
    
    callback({ path: path.join(app.getAppPath(), 'dist/renderer', boundary) })
  })
}

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
  registerProtocol()
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

// IPC Main
ipcMain.handle('ping', (event) => {
  return 'pong'
})
