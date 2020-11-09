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

export const ROLES_CONSTANTS = {
    admin: "admin",
    dev: "developer",
    manager: "manager"
}

export const Roles =  [
    { label: "Admin", value: ROLES_CONSTANTS.admin },
    { label: "Developer", value: ROLES_CONSTANTS.dev },
    { label: "Manager", value: ROLES_CONSTANTS.manager },
];
export const STATUS_CONSTANTS = {
    inProgress: 'In Progress',
    completed: 'Completed'
}

export const statusData =  [
    { label: "In Progress", value: STATUS_CONSTANTS.inProgress },
    { label: "Completed", value: STATUS_CONSTANTS.completed }
];
