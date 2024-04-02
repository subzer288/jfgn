<script setup lang="ts">

        //Interfaces
        import type { Course } from '@/interfaces/Course';
        import type { Job } from '@/interfaces/Job';
        import type { Education } from '@/interfaces/Education';

        //Services
        import getCourses  from '@/services/Course';
        import getEducation  from '@/services/Education';
        import getJobs  from '@/services/Job';

        import { onMounted, ref } from 'vue';
        
        //Storage
        import { useStore } from '@/stores/store';
        import { data } from '@/stores/info';

        let store = useStore();
        
        let courses: any = ref(null);
        let jobs:any  = ref(null);
        let education: any = ref(null);

        let loading = ref(true)
        let errored = ref(false)

        onMounted(async () => {
            if(localStorage.getItem("courses") == null || localStorage.getItem("jobs") == null || localStorage.getItem("education") == null){
                if(!store.state.courses || !store.state.jobs || !store.state.education ){
                    try{
                        console.log('heroku')
                        courses.value = await getCourses();
                        jobs.value = await getJobs();
                        education.value = await getEducation();
                        
                        store.commit('SET_COURSES',courses);
                        store.commit('SET_JOBS',jobs);
                        store.commit('SET_EDUCATION',education);

                        localStorage.setItem("courses", JSON.stringify(courses.value))
                        localStorage.setItem("jobs", JSON.stringify(jobs.value))
                        localStorage.setItem("education", JSON.stringify(education.value))
                    }catch{
                        errored.value = true
                    }
                }else{
                    console.log("state")
                    courses = store.state.courses
                    jobs = store.state.jobs
                    education = store.state.education

                    localStorage.setItem("courses", JSON.stringify(courses.value))
                    localStorage.setItem("jobs", JSON.stringify(jobs.value))
                    localStorage.setItem("education", JSON.stringify(education.value))

                    // data = JSON.parse(localStorage.getItem("data")!) as Array<GithubRepository>;
                    
                    }
            }else{
                console.log("localStorage")
                courses = JSON.parse(localStorage.getItem("courses")!) as Array<Course>;
                jobs = JSON.parse(localStorage.getItem("jobs")!) as Array<Job>;
                education = JSON.parse(localStorage.getItem("education")!) as Array<Education>;
            }
            setTimeout(()=>{
                loading.value = false
            }, 2000)
  });

</script>

<template>
    <v-container fluid>
        <v-row align="center" justify="center" v-if="loading">
          <section>
            <v-progress-circular
              :size="70"
              :width="7"
              color="purple"
              indeterminate
            ></v-progress-circular>
          </section>
        </v-row>
        <v-row v-else>
            <v-col cols="10" offset="1">
                <v-card>
                <v-row>
                    <v-container fluid>
                        <v-row class="mx-4 my-4">
                            
                            <v-col :lg="2" :md="10" :sm="10" :offset-sm="1" :offset-md="1" :offset-lg="0">
                                <div class="px-4 pt-4">
                                    <h6 class="mb-0 text-h6 text-typo">Contact</h6>
                                </div>
                            </v-col>
                            
                            <v-divider
                                class="border-opacity-25 d-sm-none d-md-none d-lg-flex"
                                color="info"
                                inset
                                vertical
                            ></v-divider>

                            <v-divider
                                class="border-opacity-25 d-md-flex d-lg-none"
                                color="info"
                                inset
                            ></v-divider>
                            
                            <v-col :lg="10" :md="10" :sm="10" :offset-sm="1" :offset-md="1" :offset-lg="0">
                                
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
                                <v-list lines="two" v-if="jobs">
                                    <v-list-item v-for="(job, index) in jobs" :key="index">
                                        <v-list>
                                            <h4>{{ job.name + ' at ' + job.company + ', ' + job.city }}</h4>
                                            <v-list-item-subtitle>{{ `${data.months[new Date(job.startDate).getMonth()] } ${new Date(job.startDate).getFullYear()} --  ${job.currentJob ? 'present' : data.months[new Date(job.endDate).getMonth()] + ' ' + new Date(job.endDate).getFullYear() }` }}</v-list-item-subtitle>
                                            <v-list-item v-for="(activity, index) in job.jobActivities" :key="index">
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-circle-small"></v-icon>
                                                </template>
                                                <span>{{ activity.activity }}</span>
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
                                    <v-list-item v-for="(item, index) in education" :key="index">
                                        <h4>{{ item.name + ' at ' + item.school + ', ' + item.city }}</h4>
                                        <!-- <v-list-item-title>
                                            {{ item.name + ' at ' + item.school + ', ' + item.city }}
                                        </v-list-item-title> -->
                                        <v-list-item-subtitle>
                                            {{ `${data.months[new Date(item.startDate).getMonth()] } ${new Date(item.startDate).getFullYear()} --  ${item.currentlyStudent ? 'present' : data.months[new Date(item.endDate).getMonth()] + ' ' + new Date(item.endDate).getFullYear() }` }}
                                        </v-list-item-subtitle>
                                            <v-list><h5>{{ item.status }}</h5></v-list>
                                    </v-list-item>
                                </v-list>

                                <v-divider
                                class="border-opacity-25"
                                ></v-divider>

                                <div class="px-4 pt-4">
                                    <h6 class="mb-0 text-h6 text-typo">COURSES</h6>
                                </div>
                                <v-list lines="two">
                                    <v-list-item v-for="(course, index) in courses" :key="index">
                                        <h4>{{ course.course + ', ' + course.institution }}</h4>
                                        <v-list-item-subtitle>{{ `${data.months[new Date(course.startDate).getMonth()] } ${new Date(course.startDate).getFullYear()} --  ${course.currentlyLearning ? 'present' : data.months[new Date(course.endDate).getMonth()] + ' ' + new Date(course.endDate).getFullYear() }` }}</v-list-item-subtitle>
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