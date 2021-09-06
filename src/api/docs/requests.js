import * as api from 'tourlou/api'

const requests = {
  readDir: async () => await api.request(api.methods.POST, api.actions.READ_DIR),
  updateDir: async (payload) => await api.request(api.methods.POST, api.actions.UPDATE_DIR, payload),
  createFile: async (payload) => await api.request(api.methods.POST, api.actions.CREATE_FILE, payload),
  updateFile: async (payload) => await api.request(api.methods.POST, api.actions.UPDATE_FILE, payload),
  deleteFile: async (payload) => await api.request(api.methods.POST, api.actions.DELETE_FILE, payload),
}

export default requests
