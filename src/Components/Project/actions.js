import { PROJECT_ACTION_TYPES } from './constants'

export const setProjectList = (projects) => (dispatch) => {
    dispatch({
        type: PROJECT_ACTION_TYPES.SET_PROJECTS,
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
            name: project.projectName,
            description: project.projectDesc,
            label: project.projectName
        }
    })
}