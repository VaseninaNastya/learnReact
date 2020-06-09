import { ADD_USER } from "../actions/actionTypes"

const userReduser = (state={}, action)=>{
    switch (action.type){
        case ADD_USER:
            return{
                ...state,
                userUid: action.user.uid,
                userEmail: action.user.email,
                name: action.user.displayName,
            }
        default:
            return state
    }
}

export default userReduser