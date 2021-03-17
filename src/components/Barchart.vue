<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "Barchart",
  extends: Bar,
  mixins: [reactiveProp],
  props: ["chartData"],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        borderColor: 'rgba(75, 192, 192, 0)',
        borderWidth: 300,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1 
            }
          }]
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>

