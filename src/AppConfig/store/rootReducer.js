import { combineReducers } from 'redux'
import toaster from '../MessageToaster/reducer'

const appReducer = combineReducers({
    toaster,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer