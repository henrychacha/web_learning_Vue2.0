import Home from "./../components/pages/Home"
import About from "./../components/pages/About"
import Login from "./../components/pages/Login"
let routes = [{
    path:"/home",
    component:Home
},{
    path:"/about",
    component:About
},{
    path:"/login",
    component:Login
},{
    path:"*",
    redirect:"/home"
}];


export default routes