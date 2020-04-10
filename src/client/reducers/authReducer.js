import {FETCH_CURRENT_USER} from "../actions";

export default function (state=null,actions){
   switch(actions.type){
       case FETCH_CURRENT_USER:

           return actions.payload ? true : false;
       default:
           return state;
   }
}