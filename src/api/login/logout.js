import { CONSTANTS } from 'tourlou/CONSTANTS'
import _LOGIN from './requests'
import { notifications } from '../../components/Toast/notifications'

const logout = async () => {
  try {

    const responseData = await _LOGIN.logout()

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

export default logout
