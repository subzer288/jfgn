<script setup lang="ts">
  import { useStore } from '@/stores/store';

  let store = useStore()

  let drawer = defineModel({
    get(){
          return store.state.drawer
        },
        set (val: boolean | null | undefined) {
          store.commit('SET_DRAWER', val)
        }});

  // let methods = mapMutations({
  //   setDrawer: 'SET_DRAWER',
  // });

  // "
</script>

<template>
  <v-app-bar
    absolute
    app
    flat
    style="position:fixed;"
    height="75">
    <template v-slot:prepend >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-spacer></v-spacer>

    <!-- <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>  
</template>