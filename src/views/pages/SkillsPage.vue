<script setup lang="ts">
    import ChartComponent from './../../components/ChartComponent.vue'

    const options = {
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

    const data = [{
        category:'Frontent',
        icon: 'mdi-remote-desktop',
        data: {
            labels: [
                'Web Technololgies',
                'Vue',
                'Angular',
                'React',
            ],
            datasets: [
                {
                label: 'Frontend',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [100, 70, 80, 80]
                },
                ]
            }
    },
    {
        category:'Backend',
        icon: 'mdi-server',

        data: {
            labels: [
                'Spring Framework',
                'Laravel',
                'Express js',
                'NEXT.js',
            ],
            datasets: [
                {
                label: 'Backend',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [70, 90, 90, 70]
                },
                ]
            }
    },
    {
        category:'DBMS',
        icon: 'mdi-database-check',
        data: {
            labels: [
                'MySQL',
                'Redis',
                'PostgreSQL',
                'MongoDB',
                'Neo4j'
            ],
            datasets: [
                {
                label: 'Database',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [80, 60, 80, 90, 60]
                },
                ]
            }
    },
    {
        category:'Programming Languages',
        icon: 'mdi-language-java',
        data: {
            labels: [
                'Python',
                'Java',
                'PHP',
                'Javascript',
                'C / C++'
            ],
            datasets: [
                {
                label: 'Programming Languages',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [70, 80, 90, 90, 80]
                },
                ]
            }
    }]
</script>

<template>
    <v-container fluid class="py-5">
        <v-row justify="center">
            <v-col cols="4" v-for="(item, index) in data" :key="index">
                <v-card
                class="mx-auto"
                :prepend-icon="item.icon"
                :subtitle="item.category"
                :title="item.category"
                >

                <ChartComponent :data="item.data" :options="options" />

                <v-card-text>{{ item.category }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn color="surface-variant" variant="text">Explore</v-btn>

                    <!-- <v-btn color="surface-variant" icon="mdi-star" size="small" variant="text"></v-btn>

                    <v-btn color="surface-variant" icon="mdi-bookmark" size="small" variant="text"></v-btn>

                    <v-btn color="surface-variant" icon="mdi-share-variant" size="small" variant="text"></v-btn> -->
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
