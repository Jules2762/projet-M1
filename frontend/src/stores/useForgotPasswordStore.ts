import { defineStore } from "pinia";
interface forgotPasswordType {
    email?: string,
    
    codeGenerated?:string
}
const useForgotPasswordStore = defineStore('FORGOT_PASSWORD', {
    state: (): forgotPasswordType => ({
        email: undefined,
        codeGenerated:undefined
    }),
    getters: {
        getEmail:(state):string|undefined=>state.email,
       
        getCodeGenerated:(state):string|undefined=>state.codeGenerated
    },
    actions:{
        setEmail(email:string):void{
            this.$state.email=email
        },
        setCodeGenerated(code:string):void{
            this.$state.codeGenerated=code
        }
    }
})
export default useForgotPasswordStore