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
        console.log('github')
        getRepos().then((info: any) => {
        data = info.data;
        // localStorage.setItem("data", JSON.stringify(info.data));
        store.commit('SET_REPOS',data)
        console.log('stored on vuex')
        })
        .catch(error => {
          console.log(error)
          errored.value = true
        })
        .finally(() => {
          setTimeout(()=>{
            loading.value = false
          }, 2000)
        });

    }else{
      data = store.state.repos
      // data = JSON.parse(localStorage.getItem("data")!) as Array<GithubRepository>;
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
              <v-col cols="4" v-for="(item, index) in data" :key="index">
                <RepoComponent v-bind:data="item"/>
              </v-col>
            </v-row>
          </v-container>
          
        </v-row>
        
    </v-container>
</template>
