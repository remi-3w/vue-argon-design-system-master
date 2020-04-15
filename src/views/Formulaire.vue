<template>
<section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 container-fluid contenu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Contactez nous</small>
                            </div>
                            
                        </template>
                        <template>
                            
                            <form role="form">
                             
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Nom"
                                            addon-left-icon="">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Prénom"
                                            addon-left-icon="">
                                </base-input>
                                
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                
                              
                                <div class="text-center">
                                    <base-button type="primary" class="my-4 btn btn-primary bg-success float-right">Envoyez</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                 
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {};

</script>
<style>
</style>
