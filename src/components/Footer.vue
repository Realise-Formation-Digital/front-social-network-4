<template>

    <div class="nav">
           
        <router-link  to="/" >
            <img id="logo-footer" src="../assets/logo/freelance-2.jpg" >
        </router-link>

        <div>
            <p id="Icônes">icônes réseaux sociaux</p>

            <p id="Copyrights">© 2021 BackPack, Inc. All rights reserved</p>
        </div>

    </div>

</template>





<script>

    export default {
    name: 'Footer',
    }

</script>


<style>
    .nav{
        background: #222;
        color:white;
        
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        
         
    }

    #logo-footer{
        /*vertical-align: middle;*/
        width: 7%;
        margin-left: 4%;
        margin-top: 2%;
        
        
    }

    #Copyrights{
        text-align: center;
        /*vertical-align: middle;*/
        margin-bottom: 1%;
    }

    #Icônes{
        text-align: right;
        /*vertical-align: middle;*/
        margin-right: 4%;
    
    }

   
</style>