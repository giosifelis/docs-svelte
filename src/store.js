import { writable } from 'svelte/store'

const store = () => {
  const { subscribe, set, update } = writable({
    directory: {},
    selectedFile: null
  })

  const methods = {
    
  }

  return {
    subscribe,
    set,
    update,
    ...methods
  }
}

export default store()
