import _REQUESTS from './requests'
import { getNodeFromTree } from 'tourlou/helpers'

const selectFile = {
  set: async (store, directory, fileId, markDownContent, toc = '') => {

    const file = directory ?  getNodeFromTree(directory, 'id', fileId): {}
    const fileObj = { ...file, markDownContent, toc }
    
    store.update((state) => {
      state.selectedFile = fileObj
      return state
    })
   
  },
  reset: (store) => {  
    store.update((state) => {
    state.selectedFile = null
    return state
  })},
}

export default selectFile
