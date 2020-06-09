import { TURN_CARD } from "../actions/actionTypes"

const resetReduser = (state={}, action)=>{
    switch (action.type){
        case TURN_CARD:
            return{
                ...state,
                allCardWhite: !state.allCardWhite,
            }
        default: return state
    }
}

export default resetReduser