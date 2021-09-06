import { CONSTANTS } from 'tourlou/CONSTANTS'
import _LOGIN from './requests'
import { notifications } from '../../components/Toast/notifications'

const login = async (payload) => {
  try {

    const { userName, password } = payload
    const dataToServer = { userName, password }

    const responseData = await _LOGIN.login(dataToServer)

    if(!responseData.error) {
      notifications.success(responseData.msg, CONSTANTS.delay.success)
    } else {
      notifications.danger(responseData.msg, CONSTANTS.delay.error)
    }

    return responseData
  } catch (error) {
    console.log('errors', error)
    notifications.danger(error, CONSTANTS.delay.error)
  }
}

export default login
