<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
>>>>>>> abe51e642b29e69a92389b123f741fbc3f6049f0

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    proxy: {
      "/api": {
        target: "http://3.109.124.153:8800/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
=======
})
>>>>>>> abe51e642b29e69a92389b123f741fbc3f6049f0
