import { Record } from 'immutable'

export const APP_COMMON_ACTION_TYPES = {
    TOGGLE_SIDE_BAR: 'TOGGLE_SIDE_BAR',
}

export const AppCommonRecord = Record({
    sideBarOpen: false
})
