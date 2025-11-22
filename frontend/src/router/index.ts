import AuthLayout from "@/layouts/AuthLayout.vue"
import LoginView from "@/views/auth/LoginView.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: "AUTH_LAYOUT",
        component: AuthLayout,
        children: [{
            path:"",
            name:"LOGIN",
            component:LoginView
        }]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router