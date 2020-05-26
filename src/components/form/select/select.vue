<template>
    <div class="ecode-select">
        <e-popover>
            <e-input slot="" v-bind="$attrs" />
        </e-popover>
    </div>
</template>

<script>
import EInput from '@/components/form/input/input'
import EPopover from '@/components/popover'
export default {
    name:'ecode-select',
    props:{
        
    },
    components:{
        EInput
    }
}
</script>

<style>

</style>