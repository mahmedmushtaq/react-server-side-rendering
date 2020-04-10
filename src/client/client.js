//starting point for our client side
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import {renderRoutes} from "react-router-config";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'/api/'
})

const store = createStore(reducers,window.INITIAL_STATE,applyMiddleware(thunk.withExtraArgument(axiosInstance)));


ReactDOM.hydrate(
    <Provider store={store}>
       <BrowserRouter>
           {/*<Routes/>*/}
           <div>
               {
                   renderRoutes(Routes)
               }
           </div>
       </BrowserRouter>
    </Provider>
    ,document.querySelector('#root'));