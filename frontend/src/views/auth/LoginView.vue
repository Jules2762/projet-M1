<template>
    <div class="login-container">
        <div class="login-header">
            <h2>Login</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim optio maxime iure quidem! Odio dignissimos
                consectetur dolor, non impedit nobis.</p>
        </div>
        <form @submit.prevent="handleSubmit()">
            <Input label="E-mail" required />
            <Input label="Mot de passe" required />
            <div class="login-options">
                <label>
                    <input type="checkbox" />
                    <span>Se souvenir de moi</span>
                </label>
                <router-link :to="{name:'FORGOT_PASSWORD_LAYOUT'}">Mot de passe oublier?</router-link>
            </div>
            <Button type="submit" variant="btn-primary" v-bind="submitButtonOptions">Se connecter</Button>
        </form>
        <div class="login-footer">
            <p>Vous n'avez pas de compte?</p>
            <Button type="button" variant="btn-link" @click="router.push({ name: 'SIGNUP'})">S'inscrire</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { reactive } from 'vue';
import { defineAsyncComponent } from 'vue';

const Input = defineAsyncComponent(() => import("@/components/ui/Input.vue"))
const Button = defineAsyncComponent(() => import("@/components/ui/Button.vue"))

const submitButtonOptions = reactive({
    loading: false,
    disabled: false
})
function handleSubmit(): void {
    submitButtonOptions.loading = !submitButtonOptions.loading
    submitButtonOptions.disabled = !submitButtonOptions.disabled
}
</script>