import { sync } from 'vuex-router-sync';
import App from './components/App.vue';
import router from './router';
import store from './vuex/store';

sync(store, router);

router.start(App, '#app');
