<script setup lang="ts">
    import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

defineProps<{
  options?: any
  data?: any
}>()
    
    // let chartData = {
    //         labels: [ 'January', 'February', 'March' ],
    //         datasets: [ { data: [40, 20, 12] } ]
    //     }
    // let chartOptions = {
    //         responsive: true
    //     }
    
</script>

<template>
    <Radar 
    id="my-chart-id"
    :options="options"
    :data="data"
    />
</template>