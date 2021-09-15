<template>
    <v-container >
        <v-row v-if="products!=null">
            <v-col v-for="p in products"
                   :key="p.id"
                   cols="12" md="3">
                <v-card
                    class="mx-auto"
                    heigh="100%"
                    >
                    <v-img
                        height="200px"
                        :src="format_image(p.image_url,'original')">
                    </v-img>

                    <v-card-subtitle class="pb-0">{{p.title}}</v-card-subtitle>

                    <v-card-text class="text--primary">
                        <div>${{p.price}}</div>

                        <div>{{p.description}}</div>
                    </v-card-text>

                    <v-card-actions v-if="admin_controls">
                        <v-btn
                            :to="'/admin/product/'+p.id+'/edit'"
                            color="orange"
                            text>
                            editar
                        </v-btn>

                        <v-btn
                            @click="remove_product(p.id)"
                            color="red"
                            text>
                            Eliminar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        props:['admin_controls','products'],
        methods: {
            format_image: function (image,format) {
                var path = ""
                if (image!=null) {
                    image = image.replace('/original/', "/"+format+"/")
                    path = "/storage/" + image;
                }
                return path;
            },
            remove_product:function(id){
                this.$emit('remove_product',id);
            }
        }
    }
</script>
