import ActionType from "./GlobalActionType";

const globalState = {
    totalOrder: 0
  }
  
  // Reducer
  const rootReducer = (state = globalState, action) => {
    if(action.type === ActionType.PLUS_ORDER){
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
    }
    if(action.type === ActionType.MINUS_ORDER){
      let totalOrder = 0;
      // kalau state total order bernilai > 0 silahkan dikurangi , jika tidak / sama 0 fungsi tidak jalan
      if(state.totalOrder > 0){
        totalOrder = state.totalOrder - 1
      }
      return {
        ...state,
        totalOrder: totalOrder
      }
    }
    return state; 
  
  } 

  export default rootReducer;