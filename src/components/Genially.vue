<template>
  <div
    v-if="urlGenially"
    style="
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 0;
      height: 0;
      margin-bottom: 2%;
    "
  >
    <iframe
      frameborder="0"
      width="1200"
      height="675"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
      :src="urlGenially"
      type="text/html"
      allowscriptaccess="always"
      allowfullscreen="true"
      scrolling="yes"
      allownetworking="all"
    ></iframe>
  </div>
</template> 

<script>
export default {
  name: "Genially",
  props: ["urlGenially"],
};
</script>
