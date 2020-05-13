<template>
  <div class="ecode-checkbox">
      <label class="checkbox-label">
          <input type="checkbox" @change="onChange" class="checkbox-input" >
          <span class="checkbox-rect"></span>
          <span class="checkbox-content"><slot></slot></span>
      </label>
  </div>
</template>

<script>
export default {
    name:'EcodeCheckBox',
    props:{
        value:String
    },
    methods:{
        onChange(){
            console.log(arguments)
        }
    }
}
</script>