import { APP_COMMON_ACTION_TYPES } from './constants'

export const setProjectList = (projects) => (dispatch) => {
    dispatch({
        type: APP_COMMON_ACTION_TYPES.TOGGLE_SIDE_BAR,
        payload: getSerializedProject(projects)
    })
}

const getSerializedProject = (projects) => {
    if(!projects || !projects.length){
        return []
    }

    return projects.map(project => {

        return {
            value: project.id,
            name: project.name,
            description: project.description,
            label: project.name
        }
    })
}