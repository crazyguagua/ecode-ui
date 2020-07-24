<template>
    <div class="horizontalItem">
       <div class="id" style="background:#e9ecf9;color:#656bc1;padding:10px;"> 条目id【 {{obj.id}} 】</div>
       <div class="title">{{ obj.title}}</div>
    </div>
</template>

<script>
export default {
    props:{
        obj:Object,
        index:Number
    }
}
</script>

<style>

</style>