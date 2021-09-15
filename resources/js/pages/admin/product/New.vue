<template>
<!--    <div>-->
<!--        <v-card>-->
<!--            <v-tabs-->
<!--                v-model="tab"-->
<!--                centered-->
<!--                icons-and-text-->
<!--            >-->
<!--                <v-tabs-slider></v-tabs-slider>-->

<!--                <v-tab href="#tab-1">-->
<!--                    Datos del Producto-->
<!--                    <v-icon>mdi-card-text-outline</v-icon>-->
<!--                </v-tab>-->

<!--                <v-tab href="#tab-2">-->
<!--                    Imagenes-->
<!--                    <v-icon>mdi-image</v-icon>-->
<!--                </v-tab>-->

<!--            </v-tabs>-->

<!--            <v-tabs-items v-model="tab">-->
<!--                <v-tab-item value="tab-1">-->
<!--                    <product-form :product="product" @save_product="addProduct" :tags="tags" :loading="loading"></product-form>-->

<!--                </v-tab-item>-->
<!--                <v-tab-item value="tab-1">-->
<!--                    <image-form @save_images="addImageFromProduct"-->
<!--                                @update_image_principal="updateImagePrincipalFromProduct"-->
<!--                                @remove_image_from_product="removeImageFromProduct"-->
<!--                                :product="product" :images="images"></image-form>-->
<!--                </v-tab-item>-->
<!--            </v-tabs-items>-->
<!--        </v-card>-->


<!--    </div>-->
    <product-form :product="product" @save_product="addProduct" :tags="tags" :loading="loading"></product-form>


</template>

<script>
    import ProductForm from "../../../components/product/ProductForm";
    import ImagesForm from "../../../components/product/ImagesForm";
    import {mapState} from "vuex";

    export default {
        components: {
            'product-form': ProductForm,
            'image-form':ImagesForm
        },
        data() {
            return {
                product: {},
                tab:"tab-1"
            }
        },
        computed: {
            ...mapState(['tags', 'loading'])
        },
        mounted() {
            this.$store.dispatch('allTags')
        },
        methods: {
            addProduct(new_product) {
                this.$store.dispatch('addProduct', new_product).then(res => {
                    if (res.success && res.data) {
                        var product_id = res.data.id;
                        this.$router.push('/admin/product/' + product_id + '/images');
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
