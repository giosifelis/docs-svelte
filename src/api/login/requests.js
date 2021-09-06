import * as api from 'tourlou/api'

const login = {
  login: async (payload) => await api.request(api.methods.POST, api.actions.LOGIN, payload),
  logout: async () => await api.request(api.methods.POST, api.actions.LOGOUT),
}

export default login
