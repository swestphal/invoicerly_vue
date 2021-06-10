import {createStore} from 'vuex'
import router from "../router";

export default createStore({
    state: {
        user: {
            username: ''
        },
        isAuthenticated: false,
        token: ''
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token')
                state.isAuthenticated = true
            } else {
                state.token = ''
                state.isAuthenticated = false
            }
        },
        setToken(state,token) {
            state.token = token
            state.isAuthenticated = true
        },
        removeToken(state) {
            state.token=''
            state.isAuthenticated=false
        }
    },
    actions: {},
    modules: {}
})
