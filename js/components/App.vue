<template>
	<div id="app">
	  <router-view></router-view>
	</div>
</template>

<script>
import $ from 'jquery';
import { setUser } from '../vuex/action';
import store from '../vuex/store';
export default {
  created() {
    const self = this;
    const handle = (res) => {
      self.setUser(res.data);
    };
    $.ajax({
      url: '/api',
      success: (res) => {
        handle(res);
      },
    });
  },
  store,
  vuex: {
    actions: {
      setUser,
    },
  },
};
</script>
