<script setup lang="ts">
import AppBarComponent from './components/AppBarComponent.vue'   
import SideBarComponent from './components/SideBarComponent.vue'
import ContentComponent from './components/ContentComponent.vue'

</script>
  

<template>
    <v-app>
        <v-layout class="rounded rounded-md">
            
            <AppBarComponent/>
            <SideBarComponent />

            <v-main class="d-flex align-center justify-center h-100">
              <ContentComponent />
            </v-main>

        </v-layout>
        
    </v-app>
  </template>