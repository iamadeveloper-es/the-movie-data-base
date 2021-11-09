export default {
    state: {
      userList: [],
    },
    getters: {
      getUserList: state => state.userList,
      isUserListItemExist: state => id => {
        return state.userList.some(item => item.id === id);
      }
    },
    mutations: {
      addUserListItem(state, payload){
        state.userList.push(payload)
      },
      deleteUserListItem(state, id){
        return state.userList.map((item, index) => {
          console.log(item.id)
          if(item.id === id){
            return state.userList.splice(index, 1);
          }
        })
      }
    },
    actions: {},
  };
  