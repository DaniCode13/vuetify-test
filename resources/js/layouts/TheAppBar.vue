<template>
    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark>
        <v-app-bar-nav-icon @click.stop="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>
        <v-toolbar-title
            style="width: 300px"
            class="ml-0 pl-4">
            <span to="/admin">Maylen</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-account</v-icon>
        </v-btn>
    </v-app-bar>

</template>


<script>
    export default {
        props: {
            source: String,
        },
    }
</script>

<style scoped>

</style>
