const state = {
  resumeState: 4
}

const actions = {
  setResumeState({ commit }, value){
    commit('SET_RESUME_STATE', value)
  }
}

const mutations = {
  SET_RESUME_STATE(state, value){
    state.resumeState = value
  }
}

const getters = {
  getResumeState(state){
    return state.resumeState;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}