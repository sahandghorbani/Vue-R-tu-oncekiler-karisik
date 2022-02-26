<template>
          <!-- <h1 v-on:click='count++'>{{count}}</h1> -->
        <h3 @click='clickHandler( $event ,5 )'>{{count}}</h3>
        <a @click.right='zibayeVahshi($event)' href="google.com">زییییییییییییییییییییییییییبای وحشی</a>
           
        <h1>
            {{title}}
        </h1>
        <br>
        <span> {{usernamee}}</span>
        <img :src=source alt="usernamee">     
        <br><br><br>
        <h1>{{ firstFuncion() }}</h1>
            
        <input :value="message" @keydown='typeHandler($event)'>
        <textarea name=""  cols="30" rows="5" @keydown='typeHandler($event)'> {{message}} </textarea>
        <p>{{message}}</p>

            <!-- خلاصه خطوط 26 و 27 -->
        <input v-model='message2'>  
        <p>{{message2}}</p>
</template>

<script>
export default {
            data() {
                return {
                    title:'Vangoogh.ir',
                    usernamee:'sahand' , 
                    source:'https://static.roocket.ir/images/cover/2021/12/27/8BfFnAGijjinppH1xm9vdWbLa1FEHVbZWglxSP4I.jpg', 
                    count:0 , 
                    message:'Boazar' ,
                    message2:'abbas'
                }
            }  ,
            methods :{
                firstFuncion(){
                    return `${this.usernamee} is ziba`
                } , 
                clickHandler(event  ,num){
                    console.log(event);
                    return this.count = this.count+num
                } , 
                zibayeVahshi(event){
                   event.preventDefault()
                   this.count--
                }, 
                typeHandler(event){
                    this.message = event.target.value
                }
            }
}
</script>

<style>

</style>