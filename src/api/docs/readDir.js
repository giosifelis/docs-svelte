import { CONSTANTS } from 'tourlou/CONSTANTS'
import _REQUESTS from './requests'
// import loaderStore from '../../loaderStore'
import { notifications } from '../../components/Toast/notifications'
// import store from '../../store'

const functionName = 'directory'
// const initialMsg = { entity: functionName, loaderMsg: 'creating' }

const api = async (store, notify = true) => {
  try {
    // loaderStore.set({ ...initialMsg, loader: true, msg: '' })

    const responseData = await _REQUESTS.readDir();

    if(!responseData.error) {
      store.update((state)=> {
        state.directory = responseData.data
        return state
      })
     if(notify) notifications.success(responseData.msg, CONSTANTS.delay.success)
    } 

    // loaderStore.set({ ...initialMsg, loader: false, msg: msg })
    // loaderStore.reset()
    
    return responseData
    
  } catch (error) {
    console.log('errors', error)
    notifications.danger(error, CONSTANTS.delay.error)

    // loaderStore.set({ ...initialMsg, loader: false, msg: msg })
    // loaderStore.reset()
  }
}

export default api
