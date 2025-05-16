import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.directive('focus', { mounted: (elem) => elem.focus() });

app.mount('#app');
