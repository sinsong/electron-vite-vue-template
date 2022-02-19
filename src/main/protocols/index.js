import { protocol } from 'electron/main'
import registerAppProtocol from './app'

/*
 * Manage application's protocols
 */

/**
 * register protocols with privilege
 *
 * caution: only call **once** before app's ready event trigged.
 */
export function registerProtocolsPrivilege() {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: 'app',
      privileges: {
        secure: true,
        standard: true, // work as http://
        supportFetchAPI: true,
        // allowServiceWorkers: true,
      },
    },
  ])
}

/**
 * register protocols
 *
 * caution: only call it when app's ready event trigged.
 */
export function registerProtocols() {
  registerAppProtocol()
}
