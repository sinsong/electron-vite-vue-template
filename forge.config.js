module.exports = {
  "packagerConfig": {
    "asar": true,
    "ignore": [
      /^\/node_modules$/,
      /^\/src$/,
      /^\/\.vscode$/,
      /^\/\.gitignore$/,
      /^\/index.html$/,
      /^\/(vite\.config\.js|forge\.config\.js)$/,
      /^\/rollup\.config\.mjs$/,
      /^\/[^\/]+.md$/
    ]
  },
  "makers": [
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "win32"
      ]
    }
  ]
}
