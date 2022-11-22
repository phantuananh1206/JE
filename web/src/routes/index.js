import { HeaderOnly } from '../components/Layout'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { ActiveUser } from '../pages/UserManagement'
import { ActiveAccount } from '../../src/components/UserManagement'

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/active-account/:code', component: ActiveAccount, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }