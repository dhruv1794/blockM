<template>
    <nav class="navbar navbar-dark bg-dark fixed-top">
         <a class="navbar-brand" href="#">{{brandName}}</a>
        
         <button class="btn btn-outline-success my-2 my-sm-0" @click='login'>Login</button>
        
    </nav>
</template>
<script>
export default{
    data(){
        return{
            brandName:'blockM'
        }
    },
    methods:{
        login(){
            this.$swal('warning','Ankit this wont open')
        }
    }
}
</script>
<style>

</style>