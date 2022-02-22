import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'nprogress/nprogress.css';
import './assets/css/tailwind.css';

import Notifications from '@kyvg/vue3-notification';
import FontAwesome from './plugins/font-awesome';

import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(FontAwesome)
  .use(createPinia())
  .use(Notifications)
  .mount('#app');
