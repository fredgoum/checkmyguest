import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    roomId: 1,
    room: {},
  },
  mutations: {
    roomData(state, room) {
      state.room = room;
    },
  },
  actions: {
  },
  modules: {
  },
});
