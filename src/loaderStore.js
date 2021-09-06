/**
 *  Store that holds:
 *    1. the messages/errors from a call to the user
 *    2. the loader state true/false
 */

import { writable } from 'svelte/store'

const initialObject = {
   loader: false,
   msg: '',
   showNotification: false
 }
 
 const store = () => {
   const { subscribe, set } = writable(initialObject)
 
   const methods = {
     reset: (sec) => {
       setTimeout(() => {
         void set(initialObject)
       }, sec || 3000)
     }
   }
 
   return {
     subscribe,
     set,
     ...methods
   }
 }
 
 export default store()