
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';



// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    icon({
      include: {
        // Include only three `mdi` icons in the bundle
        mdi: ['account', 'account-plus', 'account-minus'],
        // Include all `uis` icons
        uis: ['*']
      }
    })
  ]
});


