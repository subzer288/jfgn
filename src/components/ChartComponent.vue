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

import { getIcon } from '@/utils/functions'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const props = defineProps<{
  item: any,
}>()

const options =  {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
}
const data: any = {
    category: props.item[0],
    icon: getIcon(props.item[0]),
    data: {
        labels: props.item[1].map((element: any)=>element.name),
        datasets: [
            {
            label: props.item[0],
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: props.item[1].map((element: any) => element.value)
            },
            ]
        }
    }
</script>

<template>
    <Radar 
    id="my-chart-id"
    :options="options"
    :data="data.data"
    />
</template>