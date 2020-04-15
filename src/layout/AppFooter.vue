<template>
    <!-- FOOTER ---->
    <footer>
       <div class="container-fluid text-center bg-lightblack">
      <div class="row col_12 ">

        <div class="col-lg-4 col-md-3 col-sm-3 col-12 ">
          <h4 class="devb">DEV-BOOK</h4>
          <p class="text-center">Retrouver la plus large base de donnée des développeurs actifs du marché et explorer leur travaux.
          </p>
        </div>
        
        <div class="col-lg-4 col-md-6 col-sm-6 col-12 container2 container-fluid row ">
          <div class=""> 
                    <base-button tag="a" href="#" type="success" icon="fa fa-twitter" rounded                                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="success" icon="fa fa-facebook" rounded                                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="success" icon="fa fa-dribbble" rounded                                                 icon-only></base-button>
            </div>
        </div>
        <div class="col-lg-4 col-md-3 col-sm-3 col-12">
          <h4 class="devb text-center">DEV-BOOK</h4>
          <p class="text-center">6358 Lone Wolf Trail undefined Gresham,<br />
            California 54159 United States.</p>
        </div>
      </div>
    </div>

</footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
