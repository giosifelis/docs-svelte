import { CONSTANTS } from 'tourlou/CONSTANTS'
import _REQUESTS from './requests'
import { notifications } from '../../components/Toast/notifications'

const api = async (payload) => {
  try {
    
    const dataToServer = {
      fileName: payload.id,
      newContent: payload.markDownContent
    }

    const responseData = await _REQUESTS.updateFile(dataToServer);

    const notifyFunction = responseData.error ? 'danger' : 'success'
    notifications[notifyFunction](responseData.msg, CONSTANTS.delay[notifyFunction])

    return responseData
    
  } catch (error) {
    console.log('errors', error)
    notifications.danger(error, CONSTANTS.delay.error)
  }
}

export default api
