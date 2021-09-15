<template>
    <div>
        <h3 class="text-center">
            Producto: {{product.title}}
        </h3>
        <v-container>
            <div class="d-flex justify-center">
                <v-btn
                    @click="trigger_input_file()"
                    class="ma-2"
                    tile
                    outlined
                    color="primary"
                >
                    <v-icon left>mdi-cloud-upload</v-icon>Subir Imagenes
                </v-btn>
            </div>
            <input
                hidden
                multiple
                @change="upload_images($event)"
                id="inputFiles"
                type="file"
                accept=".png, .jpg, .jpeg"
            />
        </v-container>
        <v-alert
            v-if="!images.length > 0"
            text
            dense
            color="teal"
            type="info"
            border="left"
            >Esta publicacion no tiene asociada ninguna imagen</v-alert
        >
        <v-container fluid v-else>
            <v-radio-group
                @change="update_image_principal()"
                v-model="principal"
            >
                <v-row>
                    <v-col
                        v-for="i in images"
                        :key="i.id"
                        cols="12"
                        md="4"
                        sm="4"
                        lg="3"
                    >
                        <v-card>
                            <v-img
                                :src="format_image(i.image_url, 'original')"
                                aspect-ratio="1"
                                class="grey lighten-2"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <v-card-actions class="d-flex align-center">
                                <v-radio
                                    class="ma-0"
                                    label="Principal"
                                    color="primary"
                                    :value="i.id"
                                ></v-radio>
                                <v-spacer></v-spacer>

                                <v-btn @click="delete_image(i.id)" icon>
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-radio-group>
        </v-container>
    </div>
</template>
<script>
export default {
    props:['product','images'],
    data() {
        return {
            files: [],
            principal: ""
        };
    },
    mounted: function() {
        this.search_principal();
    },
    watch:{
        images:function(){
            if (this.images.length > 0) {
                let image = this.images.find(i => i.principal == 1);
                this.principal = image != null ? image.id : "";
            }
        }
    },
    methods: {
        search_principal: function() {
            console.log("search");

        },
        trigger_input_file: function() {
            var input = document.getElementById("inputFiles");
            input.click();
        },
        format_image: function(image, format) {
            image = image.replace("/original/", "/" + format + "/");
            var path = "";
            if (image) {
                path = "/storage/" + image;
            }
            return path;
        },
        upload_images: function(event) {
            var input = event.target;
            var files = event.target.files;
            var formData = new FormData();
            formData.append("product_id", this.product.id);
            for (let i = 0; i < files.length; i++) {
                formData.append("images[]", files[i]);
            }
            this.$emit('save_images',formData)
        },
        update_image_principal: function() {
            this.$emit('update_image_principal',this.principal)
        },
        delete_image: function(image_id) {
            this.$emit('remove_image_from_product',image_id)
        }
    }
};
</script>
