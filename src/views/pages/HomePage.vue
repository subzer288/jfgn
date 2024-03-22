<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import getRepos  from '@/services/Github';
  import type { GithubRepository } from '@/interfaces/GithubRepository';
  
  let data: Array<GithubRepository> | null = null;  
  let loading = true
  let errored = false
    
  onBeforeMount(() => {
    if(localStorage.getItem("data") == null){
        getRepos().then((info: any) => {
        data = info.data;
        console.log(data);
        localStorage.setItem("data", JSON.stringify(info.data));
        })
        .catch(error => {
          console.log(error)
          errored = true
        })
        .finally(() => loading = false);

    }else{
        data = JSON.parse(localStorage.getItem("data")!) as Array<GithubRepository>;
        loading = false
        console.log(data, loading, errored)
    }
  })
  
</script>

<template>
   <v-container class="mb-6">
      
      <v-row align="center" justify="center" >
        <!-- <section v-if="errored">
            <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
        </section>
        <section v-else>
          <div v-if="loading">
            <v-progress-circular
              :size="70"
              :width="7"
              color="purple"
              indeterminate
            ></v-progress-circular>
          </div> -->
          <v-col cols="auto" v-for="(item, index) in data" :key="index">
            <v-card
              class="mx-auto"
              max-width="344"
              prepend-icon="mdi-github"
              :subtitle="item.node_id"
              :title="item.name"
            >
              <v-card-text>{{ item.description }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn color="surface-variant" variant="text">Explore</v-btn>

                <v-btn color="surface-variant" icon="mdi-heart" size="small" variant="text"></v-btn>

                <v-btn color="surface-variant" icon="mdi-bookmark" size="small" variant="text"></v-btn>

                <v-btn color="surface-variant" icon="mdi-share-variant" size="small" variant="text"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        <!-- </section> -->
        

      </v-row>
    </v-container>
</template>
