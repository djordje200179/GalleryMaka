import Index from "./views/Index.vue";
import Search from "./views/Search.vue";
import About from "./views/About.vue";
import ArtWorks from "./views/ArtWorks.vue";
import Artists from "./views/Artists.vue";
import Profile from "./views/Profile.vue";

export default [
	{ 
        path: "/",
        name: "index",
        component: Index
    },
    {
        path: "/search/:query",
        name: "search",
        component: Search,
    },
    {
        path: "/artworks",
        name: "artworks",
        component: ArtWorks
    },
    {
        path: "/artists",
        name: "artists",
        component: Artists
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
];