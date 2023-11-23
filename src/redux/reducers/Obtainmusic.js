import { OBTAIN_MUSIC,OBTAIN_ONE_SONG } from "../actions"

const initialState={
    content:[],
    onlyone:[]
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
        case OBTAIN_ONE_SONG:
            return{
                ...state,
                onlyone:[ action.payload]
            }
    }
    
}

export default Music