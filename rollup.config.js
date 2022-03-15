import { nodeResolve } from '@rollup/plugin-node-resolve'
import  commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'

const isDevelopment = process.env.NODE_ENV === 'development'

export default {
  output: {
    format: 'cjs',
    exports: 'auto',
    entryFileNames: '[name].js',
    chunkFileNames: '[name].[hash].js',
    manualChunks: (id) => {
      if (id.includes('node_modules')) {
        return 'vendor'
      }
    }
  },
  external: [
    'electron',
    'electron/main',
    'electron/renderer'
  ],
  plugins: [
    replace({
      __mainWindowLoadURL__: isDevelopment ? 'http://localhost:3000' : 'app://renderer/index.html',
    }),
    nodeResolve(),
    commonjs(),
    !isDevelopment && terser(),
  ]
}
