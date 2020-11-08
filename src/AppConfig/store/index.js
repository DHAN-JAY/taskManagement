import { APP_COMMON_ACTION_TYPES, AppCommonRecord } from './constants'

const initialState = new AppCommonRecord()

const appCommon = (state = initialState, action) => {

  switch (action.type) {
    case APP_COMMON_ACTION_TYPES.TOGGLE_SIDE_BAR:
        return state.set('sideBarOpen', action.open)
    default:
      return state
  }
}

export default appCommon