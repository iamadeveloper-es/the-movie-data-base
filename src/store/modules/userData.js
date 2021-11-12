export default {
    state: {
      user: {},
      langSelected: "es"
    },
    getters: {
      getLangSelected: state => state.langSelected
    },
    mutations: {
      setLang(state, payload){
        state.langSelected = payload;
      }
    },
    actions: {},
  };
  