import { MessageToasterActionTypes } from './constants'

export const showToasterMessage = (message, error) => (dispatch) => {
    dispatch({
        type: MessageToasterActionTypes.SHOW_MESSAGE_TOASTER,
        message: {
            text: message,
            error: error
        }
    })
}

const toaster = {
    error: (message) => (dispatch) => { dispatch(showToasterMessage(message, 1))},
    success: (message) => (dispatch) => {
        dispatch(showToasterMessage(message, 0))
    },
    warning: (message) => (dispatch) => {
        dispatch(showToasterMessage(message, 2))
    },
    close: (key) => (dispatch) => {dispatch({ type: MessageToasterActionTypes.CLOSE_MESSAGE_TOASTER, key: key })}
}

export default toaster