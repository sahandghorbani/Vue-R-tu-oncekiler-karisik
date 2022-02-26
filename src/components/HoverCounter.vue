<template>
  <div class="container ">
    <button  type="button" class="btn btn-primary"  @mouseenter="clickHandler">Primary> the count is {{count}} </button>
  </div>
</template>

<script>
import MixinCounter from '../mixin/counter.js'


export default {
  name: "HoverCounter" ,
  mixins: [MixinCounter]
}
</script>

<style scoped>

</style>