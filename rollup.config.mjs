import { nodeResolve } from '@rollup/plugin-node-resolve'
import  commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
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
    },
  },
  external: [
    'electron',
    'electron/main',
    'electron/renderer',
  ],
  plugins: [
    replace({
      '__MAIN_WINDOW_LOADURL__': isDevelopment ? '"http://localhost:5173"' : '"app://renderer/index.html"',
      preventAssignment: true,
    }),
    nodeResolve(),
    commonjs(),
    !isDevelopment && terser(),
  ]
}
