<template>
    <div class="search-account-container">
        <h3>Recherche de compte</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ratione quisquam perspiciatis alias fuga
            deleniti.</p>
        <form @submit.prevent="handleSubmit()">
            <Input label="E-mail" v-model="email" required />
            <Button type="submit" full-width>Confirmer</Button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import useForgotPasswordStore from '@/stores/useForgotPasswordStore';
import router from '@/router';
const store = useForgotPasswordStore()
const Input = defineAsyncComponent(() => import('@/components/ui/Input.vue'))
const Button = defineAsyncComponent(() => import('@/components/ui/Button.vue'))

const email = ref<string>()
function handleSubmit(): void {
    email.value ? store.setEmail(email.value) : null
    router.push({name:"VERIFICATION_ACCOUNT"})
}

</script>