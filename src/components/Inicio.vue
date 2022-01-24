<template>
  <div id="Inicio" class="inicio">
    <div class="content-main" style="background-image: url(imag/v1/master/ilustracion_1.png);">
		<div class="auxi">
			<div class="content">
				<h1 class="tit">¡Bienvenido a PEUMO!</h1>
				
				<div class="cont-file">
					<h3 class="subtit">Por favor, carga tu documento (doc, docx, txt)</h3>
					<div class="d-flex">
						<input type="file" name="file1" id="file1" class="file">
						<input type="button" class="btn-file btn-sec" value="Carga tu texto aquí">
					</div>
				</div>
				<p class="sub-txt">O si prefieres, <a class="link" href="">comienza escribiendo en nuestro editor <span class="arrow-r"></span></a></p>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";

export default {
  name: "Inicio",
  components: {
  },
};
</script>