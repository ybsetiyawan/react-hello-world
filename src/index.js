import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const globalState = {
  totalOrder: 0
}

// Reducer
const rootReducer = (state = globalState, action) => {
  if(action.type === 'PLUS_ORDER'){
    return {
      ...state,
      totalOrder: state.totalOrder + 1
    }
  }
  if(action.type === 'MINUS_ORDER'){
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

// Store
const storeRedux = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <Home />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
