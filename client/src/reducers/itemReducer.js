import uuid from 'uuid'
import * as Types from '../actions/itemAction'

const initialState={
    items:[],
   loading:false
}
export default function(state=initialState,action){
    switch (action.type) {
        case Types.GET_ITEM:
           return {...state,
        items:action.payload,
        loading:false
        }
           case Types.DELETE_ITEM:
           return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload)
          };
        case Types.ADD_ITEM:
        return {...state,items:[action.payload,...state.items]}
        case Types.ITEM_LOADING:
        return {
            ...state,
            loading:true
        }
        default:
            return state;
    }
}