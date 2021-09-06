import { CONSTANTS } from 'tourlou/CONSTANTS'
import _REQUESTS from './requests'
import { notifications } from '../../components/Toast/notifications'

const api = async (payload, notify = true) => {
  try {
    
    const dataToServer = {
      newContent: JSON.stringify(payload)
    }
  
    const responseData = await _REQUESTS.updateDir(dataToServer);
    const notifyFunction = responseData.error ? 'danger' : 'success'
  
      if(notify) notifications[notifyFunction](responseData.msg, CONSTANTS.delay[notifyFunction])

    return responseData
    
  } catch (error) {
    console.log('errors', error)
    notifications.danger(error, CONSTANTS.delay.error)
  }
}

export default api
