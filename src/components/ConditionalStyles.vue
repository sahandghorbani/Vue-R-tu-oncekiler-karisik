<template>
        <div class="container ">
        <h2>tab menu</h2>   
 
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation" v-for="{title} in tabs" :key="title">
                <button class="nav-link" :class="{'active' : curenttab == title}" id="home-tab" type="button" @click="curenttab = title"> {{title}} </button>
            </li>
        </ul>

        <div class="tab-content p-3 " id="myTabContent ">
            <div class="tab-pane fade show active " v-for=" {title , content} in tabs" :key="title" v-show="curenttab == title">{{content}}</div>
        </div>

    </div>
</template>

<script>
export default {
          data() {
            return {
 
                curenttab: 'home',
                tabs: [
 
                    {
                        title: 'home',
                        content: 'home content'
                    },
 
                    {
                        title: ' about',
                        content: 'about content'
                    } ,
                    {
                      title: ' contact',
                        content: 'contact content'
                    }
 
                ]
            }
        }
}
</script>

<style>

</style>