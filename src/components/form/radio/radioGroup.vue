<template>
    <span>
        <slot></slot>
    </span>
</template>
<script>
export default {
    name:'ecodeRadioRroup',
    componentName: 'ERadioGroup',
    props:{
        value:{},
        size:String,
        disabled:{
            type:Boolean,
            default: false
        },
        button:{
            type:Boolean,
            default:false
        }
    },
    created() {
        this.$on('handleChange',(val)=>{
            this.$emit('change',val)
        }) 
    },
    methods:{
         
    }
}
</script>