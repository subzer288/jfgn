<script setup lang="ts">
  // import { computed } from 'vue'
  import { onMounted } from 'vue';
  import { mapState, mapMutations } from 'vuex'

  onMounted(()=>{
    console.log(computed, methods)
  })

  let computed = mapState(['drawer']);

  let methods = mapMutations({
    setDrawer: 'SET_DRAWER',
  });

  // @click="setDrawer(!drawer)"
</script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend >
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>
    </template>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>  
</template>