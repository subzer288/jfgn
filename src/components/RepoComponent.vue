<script setup lang="ts">
//   import type { GithubRepository } from '@/interfaces/GithubRepository';

defineProps<{
  data: any
}>()
    
</script>

<template>
    <v-card
        class="mx-auto"
        prepend-icon="mdi-github"
        :subtitle="data.node_id"
        :title="data.name"
        style="will-change: transform; transform: translate3d(0px, 1.24565vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
        >
        <v-card-text>{{ data.description }}</v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn color="surface-variant" variant="text" target="_blank" :href="data.html_url">Explore</v-btn>

            <!-- <v-btn color="surface-variant" icon="mdi-star" size="small" variant="text"></v-btn>

            <v-btn color="surface-variant" icon="mdi-bookmark" size="small" variant="text"></v-btn>

            <v-btn color="surface-variant" icon="mdi-share-variant" size="small" variant="text"></v-btn> -->
        </v-card-actions>
    </v-card>
</template>