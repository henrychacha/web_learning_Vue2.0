import Recommend from "./../components/pages/Recommend"
import Search from "./../components/pages/Search"
import Hot from "./../components/pages/SongList"

let routes = [{
    path: "/recommend",
    component: Recommend
}, {
    path: "/search",
    component: Search 
}, {
    path: "/hot",
    component: Hot
}, {
    path: "*",
    redirect: "/recommend"
}];

export default routes