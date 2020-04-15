<template>
<!-- HEADER -->
    <header class="header-global">
            <BaseNav class="navbar navbaar hun navbar-expand-lg navbar-light navig">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
               </button>
               <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                   <ul class="navbar-nav mr-auto mt-2 mt-lg-10">
                    <li class="nav-item active">
                      <router-link class="nav_link btn btn-primary bg-success" router link to="login">Se connecter
                      </router-link>                  
                    </li>
                    <li class="nav-item">
                    <router-link class=" btn btn-primary bg-success" router-link to="Formulaire">Contactez-nous</router-link>
                   </li>
                    <li class="nav-item  ">
                      <router-link class="nav_link btn btn-primary bg-success" router-link to="mentions">Mentions Legales</router-link>
                    </li>
                  </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
             
               
            </BaseNav>
            
      <!-- fin de navbar > -->
       <div class="container-fluid mt-3">
        <div class="row">
          <a href="acceuil"><img src="img/images/logo vert.png"  class="rounded float-left logo" alt="Logo dev-book" ></a>
            <div class="col text-center">
             <p class="text-responsive deux">Dev-Book </p>
              <p class="hun">Le reseau portfolio des developpeurs</p>
            </div>           
          </div>          
        </div>
      
     
      <!-- CAROUSEL -->
<carousel></carousel>
        <!-- FIN CAROUSEL -->
    </header>  

</template>  
<script>
import BaseNav from "@/components/BaseNav";
import Carousel from "@/views/components/Carousel";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    Carousel,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style >
</style>

