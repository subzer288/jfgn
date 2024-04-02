<script setup lang="ts">
  import getRepos  from '@/services/Github';
  import type { GithubRepository } from '@/interfaces/GithubRepository';
  import { onMounted, ref } from 'vue';

  //Components
  import RepoComponent from './../../components/RepoComponent.vue'

  //Storage
  import { useStore } from '@/stores/store';

  let store = useStore();
  
  
  let data: Array<GithubRepository>;  
  let loading = ref(true)
  let errored = ref(false)

  
    
  onMounted(() => {
    if(!store.state.repos){
        getRepos().then((info: any) => {
        data = info.data;
        // localStorage.setItem("data", JSON.stringify(info.data));
        store.commit('SET_REPOS',data)
        })
        .catch(error => {
          errored.value = true
        })
        .finally(() => {
          setTimeout(()=>{
            loading.value = false
          }, 2000)
        });

    }else{
      data = store.state.repos
      loading.value = false
    }
  })
  
</script>

<template>
   <v-container fluid class="">
      
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
          <v-container>
            <v-row v-if="errored" align="center" justify="center">
              <v-col cols="12">
                <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col :cols="12" :lg="3" :offset-lg="1" :md="4" :offset-md="1" :sm="10"  v-for="(item, index) in data" :key="index">
                <RepoComponent :data="item"/>
              </v-col>
            </v-row>
          </v-container>
          
        </v-row>
        
    </v-container>
</template>
