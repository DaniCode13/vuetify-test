<template>
    <image-form @save_images="addImageFromProduct"
                @update_image_principal="updateImagePrincipalFromProduct"
                @remove_image_from_product="removeImageFromProduct"
                :product="product" :images="images"></image-form>
</template>

<script>
    import ImagesForm from "../../../components/product/ImagesForm";
    import {mapState} from "vuex";

    export default {
        components: {
            "image-form": ImagesForm
        },
        data() {
            return {
                product_id: this.$route.params.id
            }
        },
        computed: {
            ...mapState(['product', 'images'])
        },
        mounted() {
            this.$store.dispatch('productById', this.product_id)
            this.$store.dispatch('allImagesFromProduct', this.product_id)
        },
        methods: {
            addImageFromProduct(images) {
                this.$store.dispatch('addImageFromProduct', {product_id: this.product_id, data: images})
            },
            updateImagePrincipalFromProduct(image_id) {
                this.$store.dispatch('updateImagePrincipalFromProduct', {
                    product_id: this.product_id,
                    image_id: image_id
                })
            },
            removeImageFromProduct(image_id) {
                this.$store.dispatch('removeImageFromProduct', {product_id: this.product_id, image_id: image_id})
            }
        }
    }
</script>

<style scoped>

</style>
