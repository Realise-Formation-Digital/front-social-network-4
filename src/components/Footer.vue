<template>

    <div class="nav">
         
        <div id="logo-footer">
            <router-link  to="/" >
                <img id="logo-footer" src="../assets/logo/logo-backpack.png" >
            </router-link>  
        </div>
        
        <div id="Copyrights">
            © 2021 BackPack, Inc. All rights reserved
        </div>
        
        <div id="icônes">
            <!-- <img id="logo-footer" src="/src/assets/icônes/insta.png"> -->
            icônes réseaux sociaux
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
        display: flex;
        
        
         
    }

    #logo-footer{
        
        width: 20%;
        
        
    }

    #Copyrights{
        text-align: center;
        color: cyan;
    }

    #icônes{
        text-align: right;
        color: darkorchid;
    }

   

   
   
</style>