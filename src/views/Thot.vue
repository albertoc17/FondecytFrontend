<template>
  <div id="Thot">
    <Navbar />
    <splitpanes
      class="default-theme"
      vertical
      style="position:'relative', overflow:'hidden'"
    >
      <pane min-size="50" size="70">
        <LeftPanel />
      </pane>
      <pane min-size="20" size="30">
        <RightPanel />
      </pane>
    </splitpanes>
  </div>
</template>
  
<script>
import Navbar from "@/components/Navbar.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import LeftPanel from "@/components/LeftPanel.vue";
import RightPanel from "@/components/RightPanel.vue";

export default {
  name: "Thot",
  components: {
    Splitpanes,
    Pane,
    LeftPanel,
    RightPanel,
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
.splitpanes--vertical > .splitpanes__splitter {
  /* min-width: 12px !important; */
  background: linear-gradient(90deg, rgb(230, 230, 230), rgba(230, 230, 230, 0.6)) !important; 
}
.splitpanes__pane {
  background-color: white !important; /* color de los paneles (fondo default era gris) */
}
</style>
