<template>
      <h1>info:</h1>
        <button @click='status=!status'>info toggle</button>
        <h2 v-if='status'>yes you have info herer </h2>
        <!-- if & else -->
        <div  v-for='{name , active ,id} in users' :key="id">
            <h3 v-if='active' style="color: green;">{{name}} is active</h3>
            <h3 v-else  style="color: red;"> {{name}} is not actived</h3>
        </div>
        <br><br>
        <!-- else-if -->
        <div v-for='{name , state , id} in users' :key="id">
            <h4 v-if="state==1"      style="color: green;"> {{name}} is Online</h4>
            <h4 v-else-if="state==2" style="color: gray;" >{{name}}  is Unclear</h4>
            <h4 v-else               style="color: red;"> {{name}} is Offline</h4>
        </div>
</template>

<script>
export default {
        data(){
                return{
                    status:true ,
                 
                    users:[ 
                    {  id:1 ,
                       name:'sahand' ,
                       Email: 'sahand@gmail.com',
                       active:true ,
                       state :1

                    } ,
                    {  id:2 ,
                       name:'amin' ,
                       Email: 'amin@gmail.com',
                       active:true ,
                       state:2
                    } ,
                    {  id:3 ,
                       name:'ramin' ,
                       Email: 'ramin@gmail.com',
                       active:false ,
                       state: 3
                    }
                   ] ,
                }
            } , 
}
</script>

<style>

</style>