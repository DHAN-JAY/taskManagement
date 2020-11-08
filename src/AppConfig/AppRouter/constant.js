import SignUp from '../../Components/SignUp'
import Home from '../../Components/Home'
import Project from '../../Components/Project'
import Task from '../../Components/Task'
import Login from '../../Components/Login'
import ErrorPage from '../../Components/ErrorPage'

const ROUTES = [
    { name: 'login', url: '/login', private: false, component: Login, exact: true },
    { name: 'sign-up', url: '/sign-up', private: false, component: SignUp, exact: false },
    { name: 'home', url: '/', private: false, component: Home, exact: true },
    { name: 'project', url: '/project', private: false, component: Project, exact: false },
    { name: 'task', url: '/task', private: false, component: Task, exact: false },
    { name: 'error', url: '', private: false, component: ErrorPage, exact: false },
]

export default ROUTES