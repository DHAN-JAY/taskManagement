import axios from 'axios'
import { excludeAuthorization } from '../constants'


const parsedError = (response) => {
    if (response.status === 401) {
        const message = 'Your session has expired, Please login again'

        return Promise.reject({ message: message, status: response.Status })
    } else if (response.status === 404) {
        return Promise.reject({ message: 'Page Not Found', status: response.Status })
    } else if (response.status === 400) {
        const message = response.message

        return Promise.reject({ message: message, status: response.Status })
    }
}

const parseBody = (response) => {
    if (response && (response.data === null || response.data === undefined)) {
        return Promise.reject({ message: 'Resource Not Found' })
    }

    let exception = true

    if (response.data && (response.status === 200 || response.status === 201)) {
        exception = false
    }

    return exception ? parsedError(response.data) : response.data
}

//configuring the base url for api call
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL + 'api/'
})

instance.interceptors.request.use((config) => {
    const includeAuthorizationToken = excludeAuthorization.includes(window.location.pathname)

    if (!includeAuthorizationToken && localStorage.getItem('user_details') && localStorage.getItem('user_details').includes('token')) {
        config.headers.authorization = String(JSON.parse(localStorage.getItem('user_details')).token);
    }
    config.headers['Access-Control-Allow-Origin'] = '*'

    return config
}, (error) => {
    return Promise.reject(error)
})
instance.interceptors.response.use((response) => {
    const result = parseBody(response)
    return result
}, (error) => {
    if (error.response && error.response.status === 401) {
        localStorage.clear()
        setTimeout(() => window.location.reload(), 1000)
    }
    return Promise.reject((error.response && error.response.data) ? error.response.data : error)
})

const API = instance
export default API