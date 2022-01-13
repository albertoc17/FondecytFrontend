<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{feedback.feedbackTitle}}</h5>
      <p class="card-text"> {{feedback.feedbackComment}}</p>
      <div class="errorContainer">
        <div class="errorCorrectionContainer">
          <p class="card-text"> {{feedback.errorCorrection}}</p>
          <p class="card-text"> {{feedback.errorComment}}</p>
        </div>
        <div class="errorExampleContainer">
          <p class="card-text"> {{feedback.errorExample}}</p>
          <p class="card-text"> {{feedback.errorComment}}</p>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "DetallesFeedback",
  props: ["feedback"]
};

</script>
<style scoped>

.errorContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.errorCorrectionContainer {
  background-color: rgba(58, 186, 111, 0.1);
  padding: 5%;
  margin-right: 5%;
  text-align: justify;
}
.errorExampleContainer {
  background-color: rgba(211, 47, 47, 0.1);
  padding: 5%;
  text-align: justify;
}
</style>