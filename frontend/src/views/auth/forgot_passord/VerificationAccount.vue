<template>
    <div class="verification-account-container">
        <div class="header-content">
            <h2>Verification de compte</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nam unde quisquam illo quo ducimus
                sapiente. <span class="button-resend" :class="getStyleResendCounter()" @click="resendCode()">Renvoyer {{
                    resend_counter ? "(" + resend_counter+"s)":""}}</span> </p>
        </div>
        <form>
            <Input label="Code de verification"/>
            <Button full-width>Verifier</Button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';
import useForgotPasswordStore from '@/stores/useForgotPasswordStore';
import router from '@/router';
const Input = defineAsyncComponent(()=>import("@/components/ui/Input.vue"))
const Button = defineAsyncComponent(()=>import("@/components/ui/Button.vue"))

const store = useForgotPasswordStore()
const resend_counter = ref<number>(15)


function getStyleResendCounter(): string {
    return !resend_counter.value ? "clickable-resend" : "unclickable-resend"
}
function resendCode(): void {
    if (resend_counter.value == 0) {
        resend_counter.value = 15
    }
}
onMounted(() => {
    if (store.email == undefined) {
        // router.go(-1)
    } else {
        console.log(store.email)
    }

})
setInterval(() => {
    if (resend_counter.value > 0) {
        resend_counter.value -= 1
    }
}, 1000)
</script>