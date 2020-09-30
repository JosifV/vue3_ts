import { createRouter, createWebHistory } from "vue-router";
import TabOne from '../components/TabOne.vue'
import TabTwo from '../components/TabTwo.vue'
import TabProp from '../components/TabProp.vue'
import TabNotFound from '../components/TabNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/one',
            component: TabOne as any
        },
        {
            path: '/two',
            component: TabTwo as any
        },
        //* za redirect
        {
            path: '/',
            redirect: '/one'
        },
        //* za prenos vrednosti kroz url
        {
            path: '/prop/:val',
            component: TabProp as any
        },
        //* za not found route
        {
            path: '/:notFound(.*)',
            component: TabNotFound as any
        }
    ]
})

export default router