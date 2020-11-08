

export const isAuthenticated = () => {
    const userDetails = JSON.parse(localStorage.getItem('user_details'))
    if(userDetails?.token){
        return true
    }
    return false
}