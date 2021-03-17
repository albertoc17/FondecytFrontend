<template>
  <div>
    <b-navbar toggleable="lg" fixed="true" type="light" variant="light">
      <b-navbar-brand href="#">THOT </b-navbar-brand>
      <!-- TRATAMIENTO DE HABILIDADES OPERACIONALES TEXTUALES -->
      
      <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->
        
        <!-- Right aligned nav items -->
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
          <!-- 
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> 
          -->
          <!-- 
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> 
          -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>    
  </div>
</template>

<script>
export default {


};
</script>

<style >
</style>