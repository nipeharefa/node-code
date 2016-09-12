/* eslint-disable no-shadow, no-param-reassign*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  user: [],
};

const mutations = {
  SET_USER(state, data) {
    state.user = data;
  },
  ADD_USER(state, data) {
    state.user.push(data);
  },
  UPDATE_USER(state, index, data) {
    state.user[index] = data;
  },
  DELETE_USER(state, data) {
    state.user.$remove(data);
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
