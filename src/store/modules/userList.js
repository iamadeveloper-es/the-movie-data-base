export default {
    state: {
      userList: [],
    },
    getters: {
      getUserList: state => state.userList,
      filterItemList: state => id => {
        return state.userList.filter(item => id.some(idItem => idItem === item))
      }
    },
    mutations: {
      addUserListItem(state, payload){
        state.userList.push(payload)
      },
      deleteUserListItem(state, index){
        state.userList.splice(index, 1)
      }
    },
    actions: {},
  };
  