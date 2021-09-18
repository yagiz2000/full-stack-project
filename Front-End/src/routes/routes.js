import Home from "../pages/Home.vue";
import Login from  "../pages/Login.vue";
import errorPage from "../pages/errorPage.vue";
export const routes = [
    {path:'/',component: Login,beforeEnter:(to,from,next)=>{
        if(localStorage.getItem("token")){//Token varsa auto redirect yap
            next("/home")
        }
        else{
            next()
        }
    } },
    {path:"/home",component:Home,beforeEnter:(to,from,next)=>{
        if(localStorage.getItem("token")){
            next()
        }
        else{
            next("/")
        }
    }},
    {path:"*",component:errorPage}
    
];