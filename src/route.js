import Vue from 'vue'
import VueRouter from 'vue-router'
import List from "./components/ListMovies"
import Movie from "./components/MovieView"
import Add from "./components/Add.vue"
import Edit from "./components/Edit.vue"


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name:"movie-view",
        component: List,
    },
    {
        path: "/movie/:id",
        name: "movie",
        component: Movie
    },
    {
        path: "/movie/edit/:id",
        name: "edit",
        component: Edit
    },
    {
        path: "/add",
        name:"add",
        component: Add
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
    
});
export default router;