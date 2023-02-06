import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:44381/api/Product';

createApp(App).mount('#app')
