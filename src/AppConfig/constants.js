export const ICON_NAME = {
    menu: 'menu',
    project: 'project',
    task: 'task',
    close: 'close',
    home: 'home',
    logout: 'logout',
    create: 'create'
}

export const mainMenuItems = [
    {
        name: 'Home',
        linkTo: '/',
        key: 'home_page',
        icon: ICON_NAME.home
    },
    {
        name: 'Project',
        linkTo: '/project',
        key: 'project_page',
        icon: ICON_NAME.project
    },
    {
        name: 'Task',
        linkTo: '/task',
        key: 'task_page',
        icon: ICON_NAME.task
    },
]

export const excludeAuthorization = ['/sign-up', '/login']
