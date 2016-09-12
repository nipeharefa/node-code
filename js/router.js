/* eslint-disable quote-props*/
import Vue from 'vue';
import VRouter from 'vue-router';
import Home from './components/Home.vue';
import Add from './components/Add.vue';
import Edit from './components/Edit.vue';


Vue.use(VRouter);
const router = new VRouter({
  history: false,
});

router.map({
  '/': {
    name: 'Home',
    component: Home,
  },
  'add': {
    name: 'Add User',
    component: Add,
  },
  '/edit/:userId': {
    name: 'user',
    component: Edit,
  },
});
export default router;
