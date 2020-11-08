import { APP_COMMON_ACTION_TYPES } from './constants'

export const toggleSideBar = (open) => (dispatch) => {
    dispatch({
        type: APP_COMMON_ACTION_TYPES.TOGGLE_SIDE_BAR,
        open
    })
}