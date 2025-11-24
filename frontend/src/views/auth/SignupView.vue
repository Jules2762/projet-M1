<template>
    <div class="signup-container">
        <div class="signup-header">
            <h2>Inscription</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas repellendus placeat est similique
                odio neque, rem tenetur illo commodi.</p>
        </div>
        <form>
            <Select label="Type" required :lists="typeLists" v-model="data.type" />
            <div class="full-name">
                <Input label="Nom" />
                <Input label="Prenom" />
            </div>
            <Input label="Numéro de téléphone" />
           <transition name="matricule">
             <Input label="Matricule" v-if="data.type==='Delegué'"/>
           </transition>

            <div class="signup-button-container">
                <div class="signup-login-link">
                    <p>Vous avez déjà un compte ?</p>
                    <router-link :to="{name:'LOGIN'}">Se connecter</router-link>
                </div>
                <Button>S'inscrire</Button>
            </div>
        </form>
        <div class="signup-footer"></div>

    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, reactive } from 'vue';
import type { signupDataType } from '@/types/components/Select';
const Input = defineAsyncComponent(() => import("@/components/ui/Input.vue"))
const Button = defineAsyncComponent(() => import("@/components/ui/Button.vue"))
const Select = defineAsyncComponent(() => import("@/components/ui/Select.vue"))
const typeLists: string[] = ["Professeur", "Delegué"]

const data = reactive<signupDataType>({
    type: typeLists[0],
    nom: "",
    prenom: ""
})
const signupOptions=reactive({
    loading:false,disabled:false
})
</script>