<template>
        <v-form ref="formProduct" v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" lg="8" md="12">
                        <v-text-field
                            v-model="product.title"
                            label="Titulo"
                            :rules="titleRules"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4" md="4">
                        <v-text-field
                            prefix="$"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                            @blur="format_price()"
                            v-model="product.price"
                            label="Precio"
                            required
                            :rules="priceRules"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-textarea
                    v-model="product.description"
                    label="Descripcion"
                    auto-grow
                    rows="1"
                    row-height="15"
                ></v-textarea>
                <v-select
                    v-model="product.tags"
                    :items="tags"
                    label="Tags"
                    multiple
                    chips
                    hint="Selecciona los tags que puedan describir el producto"
                    persistent-hint
                ></v-select>
                <v-btn v-if="isEditing"
                       class="mt-4"
                       v-model="valid"
                       :loading="loading"
                       :disabled="loading || !valid"
                       color="primary"
                       @click="validate_form()">Guardar
                </v-btn
                >
                <v-btn v-else
                       class="mt-4"
                       v-model="valid"
                       :loading="loading"
                       :disabled="loading || !valid"
                       color="primary"
                       @click="validate_form()">Crear
                </v-btn>
            </v-container>
        </v-form>
</template>
<script>
    export default {
        props: ['product', 'isEditing', 'loading','tags'],
        data() {
            return {
                titleRules: [v => !!v || "El titulo es requerido"],
                priceRules: [v => !!v || "El precio es requerido"],
                valid: true,
            };
        },
        methods: {
            format_price: function () {
                if (this.product.price !== "") {
                    this.product.price = parseFloat(this.product.price).toFixed(2);
                }
            },
            validate_form: function () {
                if (this.valid) {
                    this.product.title = this.product.title.trim()
                    this.product.tags = this.product.tags ? this.product.tags.toString() : ""
                    this.$emit('save_product', this.product)
                }
            },
        }
    };
</script>
