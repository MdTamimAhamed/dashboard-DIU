import {SET_PROFILE, SET_TOKEN, SET_ROLE} from "./Types";
const AuthReducer = (state,action)=>{
    switch(action.type){
        case `${SET_PROFILE}`:
            return;
        case `${SET_TOKEN}`:
            return;
        case `${SET_ROLE}`:
            return;
        default:
            return;
    }
}
export default AuthReducer;