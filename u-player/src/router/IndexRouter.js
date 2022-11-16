import Play from "./../components/pages/Play"
import Index from "./../components/pages/Index"
import SongList from "./../components/pages/SongList"

let routes = [{
    path: "/play/:sid",
    component: Play
}, {
    path: "/songlist/:gid",
    component: SongList
}, {
    path: "/",
    component: Index
}];

export default routes