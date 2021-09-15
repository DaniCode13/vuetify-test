import {
    ADD_PRODUCT,
    PRODUCT_BY_ID,
    UPDATE_PRODUCT,
    REMOVE_PRODUCT,
    ALL_PRODUCTS,
    SHOW_LOADER,
    HIDDEN_LOADER,
    SHOW_ALERT,
    ALL_IMAGES_FROM_PRODUCT,
    ADD_IMAGES_FROM_PRODUCT,
    REMOVE_IMAGE_FROM_PRODUCT,
    UPDATE_IMAGE_PRINCIPAL_FROM_PRODUCT,
    ALL_TAGS
} from './mutations-types'

export const productMutations = {

    [ALL_PRODUCTS]: function (state, payload) {
        state.products = payload
        // state.products = payload
    },
    [PRODUCT_BY_ID]: function (state, payload) {
        state.product = payload
    },
    [ADD_PRODUCT]: function (state, payload) {
        state.products.push(payload)
    },
    [UPDATE_PRODUCT]: function (state, payload) {

    },
    [REMOVE_PRODUCT]: function (state, payload) {
        const index = state.products.findIndex(p => p._id === payload)
        state.products.splice(index, 1)
    }
}

export const loaderMutations = {
    [SHOW_LOADER]: function (state) {
        state.loading = true;
    },
    [HIDDEN_LOADER]: function (state) {
        state.loading = false;
    }

}
export const alertMutations = {
    [SHOW_ALERT]: function (state, payload) {
        Swal.fire({
            position: "center",
            icon: "" + payload.type,
            title: "" + payload.title,
            showConfirmButton: false,
            timer: 1500
        });
    }
}

export const imageMutations = {
    [ALL_IMAGES_FROM_PRODUCT]: function (state, payload) {
        state.images = payload
    },
    [ADD_IMAGES_FROM_PRODUCT]: function (state, payload) {
        if (payload.length > 0) {
            payload.forEach(element => {
                state.images.push(element)
            })
        }
    },
    [UPDATE_IMAGE_PRINCIPAL_FROM_PRODUCT]: function (state, payload) {
        state.images = payload
    },
    [REMOVE_IMAGE_FROM_PRODUCT]: function (state, payload) {
        var image_index = state.images.findIndex(
            image => image.id == payload
        );
        state.images.splice(image_index, 1);
        // if (state.images.length > 0) {
        //     state.images[0].principal = 1;
        //     console.log("cambio " + this.principal);
        // }
    },

}
export const tagMutations = {
    [ALL_TAGS]: function (state, payload) {
        if (payload.length > 0) {
            payload.forEach(element => {
                state.tags.push(element.name)
            })
        }
    }
}
