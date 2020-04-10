import React from "react";
import HomePage from "./pages/HomePage";
// import {Route} from "react-router-dom";
import UsersListPage from "./pages/usersListPage";
import App from "./App";
import NotFound from "./pages/NotFound";



// export default ()=>{
//     return(
//         <div>
//             <Route exact path={"/"} component={HomePage}/>
//             <Route exact path={"/users"} component={UsersList}/>
//         </div>
//     )
// }
export  default [{
    ...App,
    routes:[
      {
         ...HomePage,
        path:"/",
        exact:true

      },{
         ...UsersListPage,
        path:"/users",

     },{
            ...NotFound,


        }
]
}]