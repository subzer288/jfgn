<script setup lang="ts">
// Utilities
    import { mapState, mapMutations } from 'vuex'

</script>

<template>
    <v-navigation-drawer
    expand-on-hover
    rail
    >
        <v-list>
            <v-list-item
            prepend-avatar="..."
            subtitle="jair_godinez@konevaproject.com"
            title="Jair Godinez"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-github" title="Github projects" value="github" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-information" title="Skills" value="skills" to="/skills"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Profile" value="profile" to="/profile"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>