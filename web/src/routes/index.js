import { HeaderOnly } from '../components/Layout'

import Home from '../pages/Home'
import Login from '../pages/Login'

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }