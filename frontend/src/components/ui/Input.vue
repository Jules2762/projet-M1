<template>
    <div class="input-container">
        <label>
           <span>{{ label }}</span>
           <span >*</span>
        </label>
        <div class="input-content">
            <Icon :icon="icon" v-if="icon" class="input-icon"/>
            <input type="text" :required="required" v-model="data">
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';


type inputPropsType={
    label?:string,
    required?:boolean,
    icon?:string,
    modelValue?:string|number
}
const props=defineProps<inputPropsType>()
const emit = defineEmits(["update:modelValue"])
const data = computed({
    get():string|number|undefined{
        return props.modelValue
    },
    set(value):void{
        emit("update:modelValue",value)
    }
})
</script>