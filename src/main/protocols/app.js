import { app, protocol } from 'electron/main'
import path from 'path'

/*-
 * app:// protocol
 */

/**
 * register app:// protocol
 */
export default function registerAppProtocol() {
  protocol.registerFileProtocol('app', (request, callback) => {
    // console.log(`app-protocol: ${request.url}`);
    let requrl = new URL(request.url)
    let reqpath = requrl.pathname
    let boundary = path.join('/', reqpath) // used for prevent ../.. attack

    callback({ path: path.join(app.getAppPath(), 'dist/renderer', boundary) })
  })
}
