import { OBTAIN_MUSIC } from "../actions"

const initialState={
    content:[]
}


const Music=(state=initialState, action)=>
{
    switch(action.type)
    {
        case OBTAIN_MUSIC:
            return{
                ...state,
                content:[...state.content, ...action.payload]
            }
            default:return state
    }
    
}

export default Music