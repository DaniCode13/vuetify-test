<template>
    <product-list @remove_product="removeProduct" :admin_controls="true" :products="products"></product-list>
</template>

<script>
    import ProductList from "../../../components/product/ProductList";

    export default {
        data(){
            return {
            }
        },
        components:{
          'product-list':ProductList
        },
        computed:{
            products:function () {
                return this.$store.state.products;
            }
        },
        mounted() {
            this.$store.dispatch('allProducts')
        },
        methods:{
            removeProduct(id){
                this.$store.dispatch('removeProduct',id)
            }
        }

    }
</script>

<style scoped>

</style>
