<template>
        <h1 :style= "[styleobj  ,style2]"  @click="ccc =!ccc" >You Are Login</h1>

        <button class="ziba" :class="{'active' : isLoggedIn}"  v-on:click='isLoggedIn = ! isLoggedIn'> ziiiiiiiiiiiiiiiiiba</button>
        <!-- instead of that top highlited part we ======>>>> isLoggedIn ? 'active' : "" -->

        <h1 class="xxx" :class="{'fibonachi' : isYes}" @click='isYes=!isYes' >3th class learning</h1>





        <div>
            <input type="text" v-model='name'>
            <span v-text='name'></span>
            <h2>{{gettime}}</h2>
               <!-- <h2>{{gettime()}}</h2> -->
        </div>




   
</template>

<script>
export default {
               data(){
                return{
                    ccc :false ,
                    isLoggedIn:false ,
                    styleobj :{
                        color : this.logiiin ? 'green' :'red' ,
    
                    },
                    style2 :{
                        backgroundColor: 'yellow'
                    } ,
                    isYes :true ,



                    name:'hesam' ,
                    family:'mousavi'
                    
                }
            } , 

                watch:{
                name(newname , oldname){
                    console.log(newname , oldname);
                }
                },

                computed:{
                    //by putting our method in Computed part    , our function dosnt re-render in every single changes anymore!
                    gettime(){
                        return Date.now()
                    }
                } , 

                methods:{
                    // if the gettime method was called here , in every variation , the whole method part would re-render again(even if we dont need that re-rendering!)
            /*      gettime(){
                        return Date.now()
                    } */
                    
                }
}
</script>

<style>
        .active {
            color: blue;
        }
        .fibonachi{
            color: blueviolet;
        }
</style>