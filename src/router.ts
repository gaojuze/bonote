import {createRouter, createWebHashHistory} from 'vue-router';  
import login from './components/Login.vue';
import evernote from './components/Evernote.vue';

const routes = [
    {path: '/evernote', component: evernote},
    {path: '/login', component: login},
    {path: '/', component: login},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});
export default router;