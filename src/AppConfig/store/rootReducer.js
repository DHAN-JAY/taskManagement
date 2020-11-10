import { combineReducers } from 'redux'
import toaster from '../MessageToaster/reducer'
import appCommon from './index'
import project from '../../Components/Project/reducers'

const appReducer = combineReducers({
    toaster,
    appCommon,
    project
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer