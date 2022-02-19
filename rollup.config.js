import { nodeResolve } from '@rollup/plugin-node-resolve'
import  commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

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
    nodeResolve(),
    commonjs(),
    terser()
  ]
}
