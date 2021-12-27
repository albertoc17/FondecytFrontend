<template>
  <div id="Sidienav" class="sidenav desktop">
    <!-- logo -->
    <figure class="cont-logo">
      <a href="#">
        <img src="imag/v1/logos/logo_main.svg" alt="" />
      </a>
    </figure>
    <h2 class="subtit">Criterios de evaluación</h2>

    <section class="cont-accordion">
      <div class="row-accordion">
        <div class="enc-accordion active">
          <div class="content">
            <span class="ic-txt"></span>
            <p>Léxico gramatical</p>
          </div>
          <span class="btn-accordion"></span>
        </div>
        <ul class="panel">
          <li>
            <a href=""> Gerundios <span class="arrow"></span></a>
          </li>
        </ul>
      </div>
      <div class="row-accordion">
        <div class="enc-accordion">
          <div class="content">
            <span class="ic-txt"></span>
            <p>Formal</p>
          </div>
          <span class="btn-accordion"></span>
        </div>
        <ul class="panel">
          <li>
            <a href=""> Oraciones <span class="arrow"></span></a>
          </li>
          <li>
            <a href=""> Párrafos <span class="arrow"></span></a>
          </li>
        </ul>
      </div>
      <div class="row-accordion">
        <div class="enc-accordion">
          <div class="content">
            <span class="ic-txt"></span>
            <p>Estilo</p>
          </div>
          <span class="btn-accordion"></span>
        </div>
        <ul class="panel">
          <li>
            <a href="">
              Primera y segunda persona <span class="arrow"></span>
            </a>
          </li>
          <li class="link-active">
            <a href=""> Voz pasiva <span class="arrow"></span></a>
          </li>
          <li>
            <a href=""> Conectores <span class="arrow"></span></a>
          </li>
        </ul>
      </div>
      <div class="row-accordion">
        <div class="enc-accordion">
          <div class="content">
            <span class="ic-txt"></span>
            <p>Discursivo</p>
          </div>
          <span class="btn-accordion"></span>
        </div>
        <ul class="panel">
          <li>
            <a href=""> Complejidad <span class="arrow"></span></a>
          </li>
          <li>
            <a href=""> Lecturabilidad <span class="arrow"></span></a>
          </li>
          <li>
            <a href=""> Propósito <span class="arrow"></span></a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Sidenav",
};
</script>


