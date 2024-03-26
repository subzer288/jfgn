<script setup lang="ts">
// Utilities
    import { useStore } from '@/stores/store'

    let store = useStore();

    let drawer = defineModel({
        get(){
          return store.state.drawer
        },
        set (val: boolean | null | undefined) {
          store.commit('SET_DRAWER', val)
        },
    })

</script>

<template>
    <v-navigation-drawer
    expand-on-hover
    rail
    v-model="drawer"
    mobile-break-point="960"
    width="260"
    app
    floating
    style="position:fixed;">
        <v-list>
            <v-list-item
            prepend-avatar="..."
            subtitle="jair_godinez@konevaproject.com"
            title="Jair Godinez"
            ></v-list-item>
        </v-list>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-github" title="Github projects" value="github" to="/home"></v-list-item>
            <v-list-item prepend-icon="mdi-information" title="Skills" value="skills" to="/skills"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Profile" value="profile" to="/profile"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>