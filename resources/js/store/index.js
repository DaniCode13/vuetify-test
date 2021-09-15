import Vue from "vue";
import Vuex from "vuex";
import {alertMutations, imageMutations, loaderMutations, productMutations, tagMutations} from "./mutations";
import {productActions, imageActions, tagActions} from "./actions";
Vue.use(Vuex);
//ejecutar funciones desde los componenetes $store.state.name

const store = new Vuex.Store({
    // strict:true,
    state: {
        drawer:false,
        loading: false,
        product: {},
        products: [],
        images:[],
        tags:[]
    },
    mutations: Object.assign({}, productMutations,loaderMutations,alertMutations,imageMutations,tagMutations),
    // getters: Object.assign({}, productGetters),
    actions: Object.assign({}, productActions,imageActions,tagActions)

});

export default store;
