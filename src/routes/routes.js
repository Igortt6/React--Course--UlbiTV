import Login from "../components/Login";
import About from "../pages/About";
import Error from "../pages/Error";
import NotFound from "../pages/NotFound";
import PostIdPage from "../pages/PostIdPages";
import Posts from "../pages/Posts";


export const privateRoutes = [
    { path: '/posts', component: Posts },
    { path: '/posts/:id', component: PostIdPage },
    { path: '/about', component: About },

    { path: '/error', component: Error },

]

export const publicRoutes = [
    { path: '/login', component: Login },

]