import { PROJECT_ACTION_TYPES, ProjectRecords } from './constants'

const initialState = new ProjectRecords()

const project = (state = initialState, action) => {

  switch (action.type) {
    case PROJECT_ACTION_TYPES.SET_PROJECTS:
        return state.set('allProject', action.payload)
    default:
      return state
  }
}

export default project