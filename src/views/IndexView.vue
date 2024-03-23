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

            <v-main  style="min-height: 300px;">
                <ContentComponent />
            </v-main>
        </v-layout>
        <!-- <AppBarComponent /> -->

      <!-- 
  
      <dashboard-core-drawer />
  
      <dashboard-core-view />
  
      <dashboard-core-settings /> -->
    </v-app>
  </template>