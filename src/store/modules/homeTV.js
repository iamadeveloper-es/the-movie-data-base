export default {
  state: {
    homeTV: [],
  },
  getters: {
    getHomeTV: (state) => state.homeTV,
  },
  mutations: {
    setHomeTV(state, payload) {
      state.homeTV = payload;
    },
  },
  actions: {},
};
