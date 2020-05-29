<template>
    <div class="radio-group-button">
        <label for="radio">
            <input type="radio" v-model="model" ref="radio">
            <span>
                <slot></slot>
                <template v-if="!$slot.default">
                    {{label}}
                </template>
            </span>
        </label>
    </div>
</template>
<script>
export default {
    name:'radioGroupButton',
    props:{
        label:[String,Number,Boolean],
        value:[String,Number,Boolean],
        size:String,
        disabled:{
            type:Boolean,
            default:false
        },
        model:[String,Number,Boolean]

    },
    computed:{
        // isGroupButton
        model:{
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
                this.$refs.radio.checked = this.value === this.label
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>