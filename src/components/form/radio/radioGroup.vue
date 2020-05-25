<template>
    <span>
        <slot></slot>
    </span>
</template>
<script>
export default {
    name:'ecode-radio-group',
    componentName: 'ERadioGroup',
    props:{
        value:[String,Number,Boolean]
    },
    methods:{
         
    }
}
</script>