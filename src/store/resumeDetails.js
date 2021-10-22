const state = {
  userData: {}
}

const actions = {
  setCurrentUser({ commit }, data){
    commit('SET_CURRENT_USER', data);
  }
}

const mutations = {
  SET_CURRENT_USER(state, payload){
    state.userData = payload;
    localStorage.setItem('user_data', JSON.stringify(state.userData))
  }
}

const getters = {
  getCurrentUser(state){
    return state.userData;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}