<template>
  <div>
    <b-navbar toggleable="lg" fixed="true" type="light" variant="light">
        <b-navbar-brand href="#">THOT</b-navbar-brand>      
        <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <a href="http://www.redilegra.com/" target="_blank">
              <img
                alt="logo REDILEGRA"
                src="../assets/logo_redilegra.png"
                width="50"
                height="50"
              />
            </a>
            <img
              alt="logo PUCV"
              src="../assets/pucv2.png"
              width="150"
              height="50"
            />
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>    
  </div>
</template>

<script>
export default {


};
</script>

<style scoped>
.bg-light{
    background: transparent !important;
  }

</style>