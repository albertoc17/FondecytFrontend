<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ feedback.feedbackTitle }}</h5>
      <p v-if="feedback.feedbackComment" class="card-text">
        {{ feedback.feedbackComment }}
      </p>
      <div v-if="feedback.errorCorrection && feedback.errorExample">
        <p class="card-text">
        A continuación te dejamos un ejemplo de como se evidencia este problema
        en la escritura de un estudiante:
        </p>
        <div class="errorContainer">
          <div class="errorCorrectionContainer">
            <div class="greenBar"></div>
            <div class="errorContainer">
              <img src="../assets/img/Vector.png" class="vectorImg" />
              <p class="card-text">{{ feedback.errorCorrection }}</p>
            </div>
          </div>
          <div class="errorExampleContainer">
            <div class="redBar"></div>
            <div class="errorContainer">
              <img src="../assets/img/BadVector.png" class="vectorImg" />
              <p class="card-text">{{ feedback.errorExample }}</p>
            </div>
          </div>
        </div>
      </div>
      <p v-if="feedback.errorComment" class="card-text">
        {{ feedback.errorComment }}
      </p>
    </div>
  </div>
</template> 

<script>
export default {
  name: "DetallesFeedback",
  props: ["feedback"],
};
</script>
<style scoped>
.errorContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.redBar {
  background-color: rgba(211, 47, 47, 1);
  height: 12px;
  width: 100%;
  margin: 2% 0;
}

.greenBar {
  background-color: rgba(58, 186, 111, 1);
  height: 12px;
  width: 100%;
  margin: 2% 0;
}

.vectorImg {
  height: 15px;
  width: 15px;
  margin-right: 5%;
}

.errorCorrectionContainer {
  background-color: rgba(58, 186, 111, 0.1);
  padding: 3%;
  margin: 2%;
  text-align: justify;
}
.errorExampleContainer {
  background-color: rgba(211, 47, 47, 0.1);
  padding: 3%;
  margin: 2%;
  text-align: justify;
}
</style>