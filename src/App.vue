<template>
<router-link to="./others">others </router-link>
<router-view></router-view>
 <ClickCounter />
  <br>
  <HoverCounter />
  <br>
  <Styles />
  <br>
  <IfComponent />
  <br>
  <UpdateItems />
  <br>
  <button @click="show =!show" class="container">show new compo</button>
  <div v-if="show" >
    <h1>NEW COMPONENT</h1>
    <EventHandlingVue />
  </div>
</template>

<script>
import ClickCounter from "./components/clickCounter.vue";
import HoverCounter from "./components/HoverCounter.vue";
import ConditionalStylesVue from "./components/ConditionalStyles.vue";
import IfComponent from './components/Lists/if.vue' ;
import UpdateItems from './components/Lists/Updateitems.vue' ;
import EventHandlingVue from "./components/EventHanling/EventHandling.vue";

export default {
    data(){
        return{
          show:false
        }
    } ,
  methods:{

  } ,
  components :{
    ClickCounter ,
    HoverCounter ,
    Styles:ConditionalStylesVue ,
    IfComponent ,
    UpdateItems ,
    EventHandlingVue
    }
}
</script>

<style scoped>

</style>