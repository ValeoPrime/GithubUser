import {SHOW_ALERT, HIDE_ALERT} from '../actionTypes'

export const alertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return action.payload

        case HIDE_ALERT:
            return null
            
        default:
            return state
    }
}