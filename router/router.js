import Index from "@/modules/wms/components/Index.vue"
import Demo from "@/modules/wms/components/Demo.vue"
import Tables from "@/modules/wms/components/Tables.vue"

const route = [
    {
        path: '/demo',
        name: 'Dashboard',
        component: Demo
    },
    {
        path: '/',
        name: 'index-page',
        component: Index
    },
    {
        path: "/tables",
        name: "Tables",
        component: Tables
    }
]

export default route