import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router';
import { VueQueryPlugin, VueQueryPluginOptions } from '@tanstack/vue-query';

const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 20, // to seconds - to minutes - 20min
      }
    }
  }
}

const app = createApp(App);
app.use(router);
app.use(VueQueryPlugin, vueQueryOptions);
app.mount('#app')
