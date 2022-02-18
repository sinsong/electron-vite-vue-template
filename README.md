# Vue 3 + Vite + Electron

## run scripts

before running project, install dependencies

```bash
npm install
```

Before `npm run electron`, please run `npm run build` to prepare script.

| run script       | description                           |
|:-----------------|:--------------------------------------|
| `build`          | build all                             |
| `build:main`     | build `main.js` `preload.js`          |
| `electron`       | start `electron`                      |
| `dev`            | develop "front-end"                   |
| `predev`         | npm hook of `dev`, build main process |
| `renderer:vite`  | start vite dev server for renderer    |
| `renderer:build` | build renderer                        |
| `rollup:main`    | bundle `main.js`                      |
| `rollup:preload` | bundle `preload.js`                   |
| `start`          | electron-forge's start `electron`     |
| `package`        | electron-forge package application    |
| `make`           | electron-forge make distribution      |

> `electron` using built main process script ( `main.js` `preload.js` ) and renderer output(`renderer:build`).
>
> `dev` using built main process script ( `main.js` `preload.js` ) and vite dev server.
>
> modified main process script please rebuild script and restart electron.

## electron support

This template use custom protocol approach to let electron load Vite output with esm.
So loadURL will be `app://renderer/index.html`, which map to `dist/renderer` and prevent directory traversal attack.

In main process, registe custom protocol `app` using `protocol.registerFileProtocol()` and grant privilege using `protocol.registerSchemesAsPrivileged()`. `secure: true` let `app` protocol support esm, `standard: true` let `app` behave like `http`, I use `renderer` as hostname, then protocol handler parse incoming URL, get pathname and map to `dist/renderer`, and electron will use `app://renderer/index.html` as origin, need not provide build time inject `<base>` declaration.

## vite-vue-template things

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
