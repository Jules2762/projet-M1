<template>
    <div class="select-container">
        <label v-if="label">
            <span>{{ label }}</span>
            <span v-if="required" style="color: red;">*</span>
        </label>
        <div class="select-content">
            <Icon :icon="icon" v-if="icon" class="select-icon"/>
            <select v-model="data">
                <option v-for="(value,key) in lists" :key="key" :value="value">{{ value }}</option>
            </select>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
type selectPropsType={
    label?:string,
    icon?:string,
    iconPosition?:"left"|"right",
    disabled?:boolean,
    required?:boolean,
    modelValue?:string|number,
    lists?:Array<string|number>
}
const props=withDefaults(defineProps<selectPropsType>(),{
    iconPosition:"left"
})
const emit=defineEmits(["update:modelValue"])
const data=computed({
    get():string|number|undefined{
        return props.modelValue
    },
    set(value):void{
        emit("update:modelValue",value)
    }
})
</script>