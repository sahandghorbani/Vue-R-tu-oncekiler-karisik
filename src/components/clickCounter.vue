<template>
  <div class="container " >
    <button type="button" class="btn btn-outline-success btn-lg "  @click='clickHandler'> the count is {{count}} </button>
  </div>

</template>

<script>
import MixinCounter from '../mixin/counter.js'
export default {
  name: "clickCounter" ,
  mixins: [MixinCounter]
}

</script>

<style scoped>

</style>