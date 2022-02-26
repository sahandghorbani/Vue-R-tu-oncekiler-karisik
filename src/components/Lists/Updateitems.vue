<!-- v-for is  useable both for arrays and objects  -->
<template>
          <!-- we use Destructyring -->
        <div class="container">
            <ul v-for='{name , Email ,id} in users'  :key="id"> 
            <li >{{name}} , {{Email}}</li>
                <div>
                    <button @click='deleteItem(id)'> delete</button>
                </div>
            </ul>
        </div>
</template>

<script>
export default {
            data(){
                return{
                    //this is for array iteration .. . .
                   users:[
                    {  id:1 ,
                       name:'sahand' ,
                       Email: 'sahand@gmail.com'
                    } ,
                    {  id:2 ,
                       name:'amin' ,
                       Email: 'amin@gmail.com'
                    } ,
                    {  id:3 ,
                       name:'ramin' ,
                       Email: 'ramin@gmail.com'
                    }
                   ] ,

                
                }
            } , 
               methods:{
                deleteItem(id){
                    this.users =this.users.filter(user =>user.id !==id)            
                } ,
               
            }
}
</script>

<style>

</style>