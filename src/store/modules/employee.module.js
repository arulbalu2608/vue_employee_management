export default {
  namespaced: true,
  state: {
    allEmployee: [],
  },
  mutations: {
    ADD_EMPLOYEE: (state, payload) => {
      state.allEmployee.push(payload);
    },
  },
  actions: {
    addEmployee: ({ commit }, payload) => {
      return commit("ADD_EMPLOYEE", payload);
    },
  },
};
