<script setup lang="ts">
        import { data }  from '@/stores/info'
</script>

<template>
    <v-container class="d-flex align-center justify-center">
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                        <!-- <v-col cols="auto">
                            <v-avatar class="mx-4 mt-4" rounded="0" size="74" >
                                <v-img src="..."></v-img>
                            </v-avatar>
                        </v-col> -->

                        <v-container fluid>
                            <v-row class="mx-4 my-4">
                                <v-col lg="4" md="4" cols="8" offset-sm="2" order-sm="1">
                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">Contact</h6>
                                    </div>
                                </v-col>
                                
                                <v-divider
                                    class="border-opacity-25"
                                    color="info"
                                    inset
                                    vertical
                                ></v-divider>
                                
                                <v-col lg="8" md="8" cols="8" offset-sm="2">
                                    
                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">PROFILE</h6>
                                    </div>
                                    <div class="px-4 py-4">
                                        <p class="text-sm font-weight-light text-body">Passionated software developer that always wanted to improve his coding skills solving problems and studying algorithms</p>
                                    </div>

                                    <v-divider
                                    class="border-opacity-25"
                                    ></v-divider>
                                    
                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">EMPLOYMENT HISTORY</h6>
                                    </div>
                                    <v-list lines="two">
                                        <v-list-item v-for="(job, index) in data.jobs" :key="index" :title="job.name + ' at ' + job.company + ', ' + job.city" :subtitle="`${data.months[job.startDate.month]} ${job.startDate.year} --  ${job.currentJob ? 'present' : data.months[job.endDate.month] + ' ' + job.endDate.year}`">
                                            <v-list>
                                                <v-list-item v-for="(activitie, index) in job.activities" :key="index">
                                                    <template v-slot:prepend>
                                                        <v-icon icon="mdi-circle-small"></v-icon>
                                                    </template>
                                                    <span>{{ activitie }}</span>
                                                </v-list-item>
                                            </v-list>
                                        </v-list-item>
                                    </v-list>

                                    <v-divider
                                    class="border-opacity-25"
                                    ></v-divider>

                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">EDUCATION</h6>
                                    </div>
                                    <v-list lines="two">
                                        <v-list-item v-for="(item, index) in data.education" :key="index" :title="item.name + ' at ' + item.school + ', ' + item.city" :subtitle="`${data.months[item.startDate.month]} ${item.startDate.year} --  ${item.currentStudent ? 'Present' : data.months[item.endDate.month] + ' ' + item.endDate.year}`">
                                            <v-list>
                                                <h5>{{ item.status }}</h5>
                                            </v-list>
                                        </v-list-item>
                                    </v-list>

                                    <v-divider
                                    class="border-opacity-25"
                                    ></v-divider>

                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">COURSES</h6>
                                    </div>
                                    <v-list lines="two">
                                        <v-list-item v-for="(course, index) in data.courses" :key="index" :title="course.course + ', ' + course.institution" :subtitle="`${data.months[course.startDate.month]} ${course.startDate.year} --  ${course.currentlyLearning ? 'Present' : data.months[course.endDate.month] + ' ' + course.endDate.year}`">
                                            <template v-slot:prepend>
                                                <v-icon icon="mdi-circle-small"></v-icon>
                                            </template>
                                        </v-list-item>
                                    </v-list>

                                </v-col>
                            </v-row>
                        </v-container>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>