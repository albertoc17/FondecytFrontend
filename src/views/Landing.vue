<template>
  <div id="landing">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Redilegra</a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <Navbar />
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Bienvenido</div>
          <div class="intro-heading text-uppercase">A THOT</div>
          <div class="intro-lead-in">Una herramienta de Redilegra</div>
          <button class="btn btn-success" @click="$router.push('thot')">GO TO THOT</button>
        </div>
      </div>
    </header>
    <!-- About -->
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Proyectos</h2>
            <h3 class="section-subheading text-muted">
              Actuales.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img
                    class="rounded-circle img-fluid"
                    src="img/about/1.jpg"
                    alt=""
                  />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2019-2021</h4>
                    <h4 class="subheading">Fondecyt 1190369</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      "Modelamiento de la práctica discursiva de acreditación del conocimiento por medio de géneros académicos en ingeniería
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img
                    class="rounded-circle img-fluid"
                    src="img/about/2.jpg"
                    alt=""
                  />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2019-2020</h4>
                    <h4 class="subheading">Proyecto UCV1801</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      “Consolidando las trayectorias académicas de los estudiantes de la pucv: 
                      apoyo y seguimiento del logro de competencias para un desempeño laboral destacado”. 
                      Responsable de formulación modelo de acompañamiento, seguimiento y evaluación.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-image">
                  <img
                    class="rounded-circle img-fluid"
                    src="img/about/3.jpg"
                    alt=""
                  />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2019-2022</h4>
                    <h4 class="subheading">Red “IDEAIS:</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Asistentes inteligentes para las infraestructuras de datos espaciales”, Financiado por CYTED. 
                      Programa Iberoamérica de Ciencia y Tecnología para el Desarrollo. Coordinador de la Sub-Tarea 11.3.- 
                      “Comprobación en desastre antrópico”.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img
                    class="rounded-circle img-fluid"
                    src="img/about/4.jpg"
                    alt=""
                  />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2014-2017</h4>
                    <h4 class="subheading">FONDECYT 1140967</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Hacia un modelo de análisis semiautomatizado de la organización retórico-discursiva de los 
                      Trabajos Finales de Grado de licenciatura en ciencias y humanidades. Ver más aquí.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4>Se parte<br />de nuestra<br/> historia!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">NUESTRO INCREÍBLE EQUIPO</h2>
            <h3 class="section-subheading text-muted">
              Fundadores.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../assets/img/rene.png" alt="" />
              <h4>Dr. René Venegas</h4>
              <p class="text-muted">Lider de Proyecto Fondecyt</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../assets/img/amparo.png" alt="" />
              <h4>Amparo Galdames</h4>
              <p class="text-muted">Magíster en Lingüística Aplicada.</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../assets/img/sofia.png" alt="" />
              <h4>Sofía Zamora</h4>
              <p class="text-muted">Dra en Lingüística</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img
                class="img-fluid d-block mx-auto"
                src="img/logos/envato.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img
                class="img-fluid d-block mx-auto"
                src="img/logos/designmodo.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img
                class="img-fluid d-block mx-auto"
                src="img/logos/themeforest.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img
                class="img-fluid d-block mx-auto"
                src="img/logos/creative-market.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>    
    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; 2021</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item">
                <a href="#">Politicas de Privacidad</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terminos de uso.</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
import '../assets/css/styles.css'
export default {
  name: "landing",
  components: {
    // Navbar,
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
