import Tracks from './../pages/Tracks';

export const publicRoutes = [
    {path: '/', component: Tracks, exact: true},
    // {path: '/login', component: Login, exact: true},
    // {path: '/register', component: Register, exact: true},
]

export const privateRoutes = [
    {path: '/', component: Tracks, exact: true},
    // {path: '/profile', component: Profile, exact: true},
]