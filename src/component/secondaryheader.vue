<template>
    <ul class="nav justify-content-center fixed-top margin-56">
            <li class="nav-item  animated fadeIn" v-for='(item,index) in displayText' :class="{'black-back':(index == 1 || index == 4 || index >7 ),'white-back':!(index == 1 || index == 4 || index >7 )}" >
                <a class="nav-link active" href="#">{{item}}</a>
            </li>
           
     
        </ul>
</template>
<script>
    export default{
        data(){
            return{
                text1:['Below','are','the','images','running','in','a','infinte','scroll','!'],
                text2:['Bootstrap4', 'vuejs', 'javascript','frontend','blockM','ajax','API','Dev','!'],
                displayText:[],
                tracker:false
            };
        },
        methods:{
            changeText(){
                this.displayText = this.text1
                setInterval(()=>{
                    if(this.tracker){
                        this.displayText = this.text2
                    }else{
                        this.displayText = this.text1
                    }
                   
                    

                     this.tracker = !this.tracker;
                },10000)
            }
        },
        created(){
            this.changeText();
        }
    }
</script>
<style>
</style>