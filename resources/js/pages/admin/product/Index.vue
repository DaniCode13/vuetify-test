<template>
    <v-app>
        <the-navigation-drawer></the-navigation-drawer>
        <the-app-bar></the-app-bar>
        <v-main>
            <v-container >
                <router-view></router-view>
            </v-container>
        </v-main>
        <the-footer></the-footer>
    </v-app>
</template>

<script>
    import TheAppBar from "../../../layouts/TheAppBar";
    import TheNavigationDrawer from "../../../layouts/TheNavigationDrawer";
    import TheFooter from "../../../layouts/TheFooter";

    export default {
        components: {
            "the-app-bar": TheAppBar,
            "the-navigation-drawer": TheNavigationDrawer,
            "the-footer": TheFooter,
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
