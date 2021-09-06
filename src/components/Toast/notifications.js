import { derived, writable } from "svelte/store"

const TIMEOUT = 3000

function createNotificationStore (timeout) {
    const _notifications = writable([])

    function send (message, type = "default", timeout, position = 'top') {
        _notifications.update(state => {
            return [...state, { id: id(), type, message, timeout, position }]
        })
    }

    let timers = []

    const notifications = derived(_notifications, ($_notifications, set) => {
        set($_notifications)
        if ($_notifications.length > 0) {
            const timer = setTimeout(() => {
                _notifications.update(state => {
                    state.shift()
                    return state
                })
            }, $_notifications[0].timeout)
            return () => {
                clearTimeout(timer)
            }
        }
    })
    const { subscribe } = notifications

    return {
        subscribe,
        send,
				default: (msg, timeout,position) => send(msg, "default", timeout, position),
        danger: (msg, timeout,position) => send(msg, "danger", timeout,position),
        warning: (msg, timeout,position) => send(msg, "warning", timeout,position),
        info: (msg, timeout,position) => send(msg, "info", timeout,position),
        success: (msg, timeout,position) => send(msg, "success", timeout,position),
        primary: (msg, timeout, position) => send(msg, "primary", timeout,position),
    }
}

function id() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const notifications = createNotificationStore()