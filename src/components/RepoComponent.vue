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
        >
        <v-card-text>{{ data.description }}</v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn color="surface-variant" variant="text" :href="data.html_url">Explore</v-btn>

            <!-- <v-btn color="surface-variant" icon="mdi-star" size="small" variant="text"></v-btn>

            <v-btn color="surface-variant" icon="mdi-bookmark" size="small" variant="text"></v-btn>

            <v-btn color="surface-variant" icon="mdi-share-variant" size="small" variant="text"></v-btn> -->
        </v-card-actions>
    </v-card>
</template>