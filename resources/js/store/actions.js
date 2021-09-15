import {
    ADD_PRODUCT,
    PRODUCT_BY_ID,
    UPDATE_PRODUCT,
    REMOVE_PRODUCT,
    ALL_PRODUCTS,
    HIDDEN_LOADER,
    SHOW_LOADER,
    SHOW_ALERT,
    ALL_IMAGES_FROM_PRODUCT,
    ADD_IMAGES_FROM_PRODUCT,
    ALL_TAGS,
    UPDATE_IMAGE_PRINCIPAL_FROM_PRODUCT,
    REMOVE_IMAGE_FROM_PRODUCT
} from './mutations-types'


const API_BASE = 'http://localhost:8000/api/v1'

function response_format(success, data) {
    return {success: success, data: data}
}

export const productActions = {
    allProducts({commit}) {
        commit(SHOW_LOADER)
        axios.get(`${API_BASE}/products`)
            .then(response => {
                commit(ALL_PRODUCTS, response.data)
                commit(HIDDEN_LOADER)

            })
    },
    productById({commit}, payload) {
        commit(SHOW_LOADER)
        return axios.get(`${API_BASE}/products/${payload}`).then(response => {
            commit(HIDDEN_LOADER)
            if (response.data && response.status === 200) {
                commit(PRODUCT_BY_ID, response.data)
                return response_format(true, response.data)
            } else {
                return response_format(false, response.data.messages)
            }

        }).catch(err => {
            return response_format(false, err.message)
        })
    },
    addProduct({commit}, payload) {
        const alert_success = {type: "success", title: "Producto creado correctamente"}
        const alert_error = {type: "error", title: "Ocurrio un problema vuelve a intentarlo"}
        commit(SHOW_LOADER)
        return axios.post(`${API_BASE}/products`, payload).then(response => {
            commit(HIDDEN_LOADER)
            if (response.data && response.status === 201) {
                commit(ADD_PRODUCT, response.data)
                commit(SHOW_ALERT, alert_success)
                return response_format(true, response.data)
            } else {
                commit(SHOW_ALERT, alert_error)
                return response_format(false, response.data.messages)
            }
        }).catch(error => {
            commit(HIDDEN_LOADER)
            commit(SHOW_ALERT, alert_error)
            return response_format(false, error.message)
        })
    },
    updateProduct({commit}, payload) {
        const alert_success = {type: "success", title: "Producto actualizado correctamente"}
        const alert_error = {type: "error", title: "Ocurrio un problema vuelve a intentarlo"}

        commit(SHOW_LOADER)
        return axios.patch(`${API_BASE}/products/${payload.product_id}`, payload.data).then(response => {
            commit(HIDDEN_LOADER)
            if (response.data && response.status === 200) {
                commit(UPDATE_PRODUCT, response.data)
                commit(SHOW_ALERT, alert_success);
                return response_format(true, response.data)
            } else {
                commit(SHOW_ALERT, alert_error);
                return response_format(true, response.data.messages)
            }
        }).catch(error => {
            commit(HIDDEN_LOADER)
            commit(SHOW_ALERT, alert_error);
            return response_format(false, error.message)
        })
    },
    removeProduct({commit}, payload) {
        const alert_success = {type: "success", title: "Producto eliminado correctamente"}
        const alert_error = {type: "error", title: "Ocurrio un problema vuelve a intentarlo"}
        commit(SHOW_LOADER)
        return axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
            commit(HIDDEN_LOADER)
            if (response.status === 204) {
                commit(REMOVE_PRODUCT, response.data)
                commit(SHOW_ALERT,alert_success)
                return response_format(true,null)
            }else{
                commit(SHOW_ALERT,alert_error)
                return response_format(false,response.data.messages)
            }
        }).catch(error=>{
            commit(HIDDEN_LOADER)
            commit(SHOW_ALERT,alert_error)
            return response_format(false,error.message)
        })
    }
}

export const imageActions = {
    allImagesFromProduct({commit}, payload) {
        commit(SHOW_LOADER)
        return axios.get(`${API_BASE}/products/${payload}/images`).then(response => {
            commit(HIDDEN_LOADER)
            if (response.data && response.status === 200) {
                commit(ALL_IMAGES_FROM_PRODUCT, response.data)
                return response_format(true, response.data)
            } else {
                return response_format(false, response.data.messages)
            }
        }).catch(error => {
            commit(HIDDEN_LOADER)
            return response_format(false, error.message)
        });
    },
    addImageFromProduct({commit}, payload) {
        commit(SHOW_LOADER)
        return axios.post(`${API_BASE}/products/${payload.product_id}/images`, payload.data).then(response => {
            commit(HIDDEN_LOADER)
            if (response.data && response.status === 201) {
                commit(ADD_IMAGES_FROM_PRODUCT, response.data)
                return response_format(true, response.data)
            } else {
                return response_format(false, response.data.messages)
            }
        }).catch(error => {
            commit(HIDDEN_LOADER)
            return response_format(false, error.message)
        })
    },
    updateImagePrincipalFromProduct({commit}, payload) {
        const alert_success = {type: "success", title: "Imagen principal actualizada correctamente"}
        const alert_error = {type: "error", title: "Ocurrio un problema vuelve a intentarlo"}
        commit(SHOW_LOADER)
        return axios.patch(`${API_BASE}/products/${payload.product_id}/images/${payload.image_id}/principal`).then(res => {
            // commit(UPDATE_IMAGE_PRINCIPAL_FROM_PRODUCT)
            commit(SHOW_ALERT, alert_success)
        })
    },
    removeImageFromProduct({commit}, payload) {
        const alert_success = {type: "success", title: "Imagen eliminada  correctamente"}
        const alert_error = {type: "error", title: "Ocurrio un problema vuelve a intentarlo"}
        commit(SHOW_LOADER)
        return axios.delete(`${API_BASE}/products/${payload.product_id}/images/${payload.image_id}`).then(response => {
            commit(HIDDEN_LOADER)
            if (response.status === 204) {
                commit(REMOVE_IMAGE_FROM_PRODUCT, payload.image_id)
                commit(SHOW_ALERT, alert_success)
                return response_format(true, null)
            } else {
                commit(SHOW_ALERT, alert_error)
                return response_format(false, response.data.messages)
            }
        }).catch(error => {
            commit(HIDDEN_LOADER)
            commit(SHOW_ALERT, alert_error)
            return response_format(false, error.message)
        })
    }

}

export const tagActions = {
    allTags({commit}) {
        return axios.get(`${API_BASE}/tags`).then(res => {
            commit(ALL_TAGS, res.data)
        })
    }
}

