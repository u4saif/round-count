
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';


export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'round-count',
      // the proper extensions will be added
      fileName: 'round-count',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react','react-dom','react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
           react:"React",
           'react-dom':"react-dom",
           'react/jsx-runtime':"react/jsx-runtime"
        },
      },
    },
  },
})