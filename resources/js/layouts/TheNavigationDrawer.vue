<template>
    <v-navigation-drawer
        v-model="$store.state.drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        relative
    >
        <v-list dense nav >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Panel de Administracion
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>


            <v-list-item class="text-center">
                <v-list-item-content>
                    <v-list-item-title>Administrador</v-list-item-title>
                    <v-list-item-subtitle>Daniel Perez Baltazar</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item class="ma-2">
                    <v-btn to="/admin/product/new" block small outlined color="success">
                        <v-icon left>mdi-plus</v-icon>
                        Nuevo producto
                    </v-btn>
                </v-list-item>
            </v-list-item>

            <v-list-item link to="/admin/products">
                <v-list-item-icon>
                    <v-icon>mdi-view-list</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        Mis productos
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-list>

    </v-navigation-drawer>
</template>


<script>
    export default {
        data(){
            return{
            }
        }

    }
</script>

<style scoped>

</style>
