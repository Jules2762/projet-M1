import AuthLayout from "@/layouts/AuthLayout.vue"
import ForgotPasswordLayout from "@/layouts/ForgotPasswordLayout.vue"
import ChangePasswordView from "@/views/auth/forgot_passord/ChangePasswordView.vue"
import SearchAccountView from "@/views/auth/forgot_passord/SearchAccountView.vue"
import VerificationAccount from "@/views/auth/forgot_passord/VerificationAccount.vue"
import LoginView from "@/views/auth/LoginView.vue"
import SignupView from "@/views/auth/SignupView.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: "AUTH_LAYOUT",
        component: AuthLayout,
        children: [
            {
                path: "",
                name: "LOGIN",
                component: LoginView
            }, {
                path: "signup",
                name: "SIGNUP",
                component: SignupView
            }, {
                path: "forgot_password",
                name: "FORGOT_PASSWORD_LAYOUT",
                component: ForgotPasswordLayout,
                redirect: {
                    name: "SEARCH_ACCOUNT"
                },
                children: [
                    {
                        path: "",
                        name: "SEARCH_ACCOUNT",
                        component: SearchAccountView
                    }, {
                        path: "verification_account",
                        name: "VERIFICATION_ACCOUNT",
                        component: VerificationAccount
                    }, {
                        path: "change_password",
                        name: "CHANGE_PASSWORD",
                        component: ChangePasswordView
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router