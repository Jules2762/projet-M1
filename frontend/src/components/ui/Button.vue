<template>
    <button :class="[variant,getStyleLoading(),fullWidth?'fullWidth':'']">
        <div v-if="loading" >
            <Icon icon="eos-icons:three-dots-loading" style="font-size: 32px;" />
        </div>
        <div class="button-content" :class="getStyleIcon()" v-else>
            <Icon :icon="icon" v-if="icon"/>
            <slot></slot>
        </div>

    </button>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
type buttonPropsType = {
    icon?: string,
    iconPosition?: "left" | "right"
    loading?: boolean,
    variant?:"btn-primary"|"btn-secondary"|"btn-danger"|"btn-link",
    fullWidth?:boolean
}
const props = withDefaults(defineProps<buttonPropsType>(), {
    iconPosition: "left",
    variant:"btn-primary"
})
function getStyleIcon():string|void{
    return props.iconPosition==="left"?"btn-icon-position-left":"btn-icon-position-right"
}
function getStyleLoading():string{
return props.loading?"button-loading":""
}
</script>