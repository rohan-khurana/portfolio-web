import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path for GitHub Pages project sites (https://<user>.github.io/<repo>/).
// Change REPO_NAME below to match your repository name, or set it to '/' if
// you deploy to a user/org root site (https://<user>.github.io/).
const REPO_NAME = 'portfolio-web'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
})
