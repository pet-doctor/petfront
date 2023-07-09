import App from './App.vue'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'
import Api from "@/api";

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

app.mixin({
  computed: {
    apiService: function () {
      return new Api()
    }
  }
})
