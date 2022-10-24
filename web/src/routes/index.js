import { HeaderOnly } from '../components/Layout'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }