<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{feedback.feedbackTitle}}</h5>
      <p class="card-text"> {{feedback.feedbackComment}}</p>
    </div>
  </div>
</template> 

<script>
export default {
  name: "DetallesFeedback",
  props: ["feedback"]
};

</script>