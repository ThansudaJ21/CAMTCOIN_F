import apiClient from '@/services/AxiosClient.js'
// import GStore from './store'
import GStore from '@/store'
export default {
    login(user) {
        return apiClient.post('/auth', {
            username: user.username,
            password: user.password
        }).then((response) => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            GStore.currentUser = response.data.user
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error)
        })

    },
    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        GStore.currentUser = null
    },
    getUser() {
        return JSON.parse(localStorage.getItem('user'))
    },
    hasRoles(roles) {
        if (GStore.currentUser && roles) {
            let containRoles = GStore.currentUser.authorities.filter((authority) => roles.includes(authority))
            if (containRoles.length > 0) {
                return true
            } else {
                return false
            }

        } else {
            return false
        }
    },
    register(user) {
        return apiClient.post('/auth/registers' , {
            username: user.username,
            email: user.email,
            password: user.password
        })
    }
}
