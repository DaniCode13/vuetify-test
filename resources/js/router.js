import Vue from 'vue';
import VueRouter from "vue-router";
import Admin from "./pages/admin/product/Index"
import New from "./pages/admin/product/New"
import Edit from "./pages/admin/product/Edit"
import Products from "./pages/admin/product/Products"
import Images from "./pages/admin/image/index"
import App from "./components/App";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/admin',
            name: "Admin",
            component: Admin,
            children: [
                {
                    path: "products",
                    name: "Products",
                    component: Products
                },
                {
                    path: "product/new",
                    name: "New",
                    component: New,
                },
                {
                    path: "product/:id/edit",
                    name: "Edit",
                    component: Edit,
                },
                {
                    path: "product/:id/images",
                    name: "Images",
                    component: Images
                },
            ],
        },
    ],

})
export default router
