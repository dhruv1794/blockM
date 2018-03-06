<template>
    <div class='body-class' >
        <appSecondHead class="animated  bounce"/>
        <div class='container body-class '>
            <div class=" card-columns" >
                <div  v-for='(item,index) in photosAPIJSON'>
                    <div class='image-container'>
                        <img :src='item.image_link'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
</template>
<script>
import appSecondHead from './secondaryheader.vue'
export default{
    data(){
        return{
            pagecount:1,
            photosAPIJSON:[],
            was_api_called:false
        };
    },
    components:{
        appSecondHead
    },
    methods:{
        handleScroll(){
           

            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                if(this.was_api_called){
                    this.was_api_called = false;
                     this.pagecount ++ ;
                     this.getphotos();
                }
              

            }
        },
        getphotos(){
            
            this.$http.get('?category=lehenga&page='+this.pagecount)
            .then(response=>{
                return response.json()
            },error=>{
                return error.json()
            })
            .then(data=>{
                console.log(data)
                if(data.status == 404 || data.next == null){
                    this.was_api_called = false;
                }else if(data.results){
                     this.was_api_called = true;
                }else{

                }
               
                for(var a=0;a<data.results.length;a++){
                     this.photosAPIJSON.push(data.results[a]);
                }
               
            })
        }
    },
    created(){
        this.getphotos();
        window.addEventListener('scroll', this.handleScroll);
    }
}

</script>
<style>

</style>