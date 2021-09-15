<template>
    <product-form :isEditing="true" @save_product="updateProduct" :product="product" :tags="tags">
    </product-form>
</template>

<script>
    import ProductForm from "../../../components/product/ProductForm";
    import {mapState} from "vuex";

    export default {
        components: {
            'product-form': ProductForm
        },
        computed: {
            ...mapState(['tags', 'loading', 'product'])
        },
        created() {
            this.$store.dispatch('productById', this.$route.params.id)
            this.$store.dispatch('allTags')
        },
        methods: {
            updateProduct(product) {
                var product_id = this.$route.params.id
                this.$store.dispatch('updateProduct', {product_id: product_id, data: product}).then(res => {
                    if (res.success && res.data) {
                        this.$router.push(`images`)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
