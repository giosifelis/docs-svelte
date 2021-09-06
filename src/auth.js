import * as _Login from './api/login'

import { navigate } from 'svelte-navigator'
// https://www.swyx.io/svelte-auth/
import { writable } from 'svelte/store';

let _loggedUser = localStorage.getItem('loggedUser');
export const auth = writable(_loggedUser ? JSON.parse(_loggedUser) : { loginStatus: false } );

export const logout = async () => {
   await _Login.logout()
   auth.set({ loginStatus: false })
}

export const login = async (payload) => {
  try {
   const response = await _Login.login(payload)

     if(!response.error){
       auth.set({ loginStatus: true })
       navigate('/', { replace: true })
     }
  } catch (error) {
    console.error(error)
  }
}



auth.subscribe((value) => {
  if (value.loginStatus) localStorage.setItem('loggedUser', JSON.stringify(value));
  else localStorage.removeItem('loggedUser'); // for logout
});
