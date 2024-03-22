<script setup lang="ts">
</script>

<template>
    <v-navigation-drawer
    expand-on-hover
    rail
    >
        <v-list>
            <v-list-item
            prepend-avatar="https://media.licdn.com/dms/image/C4D03AQGHlvNACY7Jvw/profile-displayphoto-shrink_400_400/0/1668103824943?e=1716422400&v=beta&t=ID9WS44jzVYl3AQ3WHYGztBXbtUClQWwiUaQwIn9o9o"
            subtitle="jair_godinez@konevaproject.com"
            title="Jair Godinez"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-github" title="Github projects" value="github" to="/home"></v-list-item>
            <v-list-item prepend-icon="mdi-information" title="About me" value="about" to="/about"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Profile" value="profile" to="/profile"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>