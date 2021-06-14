import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "../views/dashboard/Dashboard";
import Signup from "../views/Signup";
import Login from "../views/Login";
import store from '../store';
import Clients from "../views/dashboard/Clients";
import Client from "../views/dashboard/Client";
import AddClient from "../views/dashboard/AddClient";
import MyAccount from "../views/MyAccount";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/dashboard/my-account',
        name: 'MyAccount',
        component: MyAccount,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/dashboard/clients',
        name: 'Clients',
        component: Clients,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/dashboard/clients/:id',
        name: 'Client',
        component: Client,
        meta: {
            requireLogin: true
        }
    },
     {
        path: '/dashboard/clients/add',
        name: 'AddClient',
        component: AddClient,
        meta: {
            requireLogin: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated){
    next('/login')
    } else {
        next()
    }
})
export default router
