import Tracks from './../pages/Tracks';
import Profile from './../pages/Profile';
import Register from './../pages/Auth/Register';
import Login from './../pages/Auth/Login';

export const publicRoutes = [
  {path: '/', component: Tracks, exact: true},
  {path: '/login', component: Login, exact: true},
  {path: '/register', component: Register, exact: true},
];

export const privateRoutes = [
  {path: '/', component: Tracks, exact: true},
  {path: '/profile', component: Profile, exact: true},
];