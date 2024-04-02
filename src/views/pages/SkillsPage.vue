<script setup lang="ts">
    import ChartComponent from './../../components/ChartComponent.vue'

    //Interfaces
    import type { Technology } from '@/interfaces/Technology';

    //Services
    import getTechnology  from '@/services/Technology';

    import { onMounted, ref } from 'vue';
        
    //Storage
    import { useStore } from '@/stores/store';

    //Functions
    import groupBy  from '@/utils/functions'

    let store = useStore();

    let technologies: any;
    let loading = ref(true)
    let errored = ref(false)
    let array: any = ref(null);

    onMounted(async () => {
            if(localStorage.getItem("technologies") == null){
                if(!store.state.technologies ){
                    try{
                        technologies = await getTechnology();
                        store.commit('SET_TECHNOLOGIES',technologies);
                        localStorage.setItem("technologies", JSON.stringify(technologies));
                    }catch{
                        errored.value = true
                    }
                }else{
                    technologies = store.state.courses
                    localStorage.setItem("technologies", JSON.stringify(technologies))
                    }
            }else{
                technologies = JSON.parse(localStorage.getItem("technologies")!) as Array<Technology>;
            }
            array = groupBy(technologies, (tec: Technology) => tec.typeTechnology.name)
            setTimeout(()=>{
                loading.value = false
            }, 2000)
  });

</script>

<template>
    <v-container fluid class="py-5">
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
        <v-row justify="center" v-else>
            <v-col cols="10" lg="4" md="4" offset-sm="1"  v-for="(item, index) in array" :key="index">
                <v-card
                class=""
                >

                <!-- :prepend-icon="item.icon"
                :subtitle="item.category"
                :title="item.category" -->

                <ChartComponent :item="item"  />

                <!-- <v-card-text>{{ item.category }}</v-card-text> -->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <!-- <v-btn color="surface-variant" variant="text">Explore</v-btn> -->

                    <!-- <v-btn color="surface-variant" icon="mdi-star" size="small" variant="text"></v-btn>

                    <v-btn color="surface-variant" icon="mdi-bookmark" size="small" variant="text"></v-btn>

                    <v-btn color="surface-variant" icon="mdi-share-variant" size="small" variant="text"></v-btn> -->
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col>
                <div class="pt-0 mb-lg-0 mb-10 col-lg-4 col">
                    <div class="card-shadow border-radius-xl px-4 py-5 v-card v-sheet theme--light">
                        <div class=" bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1 mb-6 mt-n12">
                            <div class="chart-area">
                                <canvas height="255" id="websiteViews" style="display: block; box-sizing: border-box; height: 170px; width: 656.667px;" width="985"></canvas>
                            </div>
                        </div>
                        <h6 class="ms-2 mt-6 mb-0 text-h6 font-weight-bold text-typo"> Website Views </h6>
                        <p class="text-sm ms-2 text-body font-weight-light"> Last Campaign Performance </p>
                        <hr class="horizontal dark mb-4 mx-2"><div class="d-flex text-body mx-2">
                                <i class="material-icons-round text-sm my-auto me-1">schedule</i>
                                <p class="mb-0 text-sm font-weight-light text-body"> campaign sent 2 days ago </p>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row> -->
    </v-container>
</template>
