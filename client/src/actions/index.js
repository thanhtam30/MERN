import * as Types from "./itemAction";
import axios from "axios";
export const getitems = ()=>dispatch =>  {
  dispatch(setitemloading());
  axios.get('/api/items')
  .then(res=>{
    dispatch({
      type:Types.GET_ITEM,
      payload:res.data
    })
  })
};
export const deleteitem = id => {
  return {
    type: Types.DELETE_ITEM,
    payload: id
  };
};
export const additem = item=>dispatch=> {
  axios.post('/api/items',item)
  .then(res=>{
    dispatch({
      type:Types.ADD_ITEM,
      payload:res.data
    })
  })
  
      
};
export const setitemloading = () => {
  return {
    type: Types.ITEM_LOADING
  };
};
