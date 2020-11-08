import { combineReducers } from 'redux'
import toaster from '../MessageToaster/reducer'
import appCommon from './index'

const appReducer = combineReducers({
    toaster,
    appCommon
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer