const redux = require('redux');
const CreateStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}

//2. Reducer : suatu fungsi yg mana store adalah sebuah value, dimana store bisa diupdate hanya oleh Reducer sehingga tidak fungsi lain yg bisa update store
const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}
//1. membuat store / value untuk menyimpan secara global
const store = CreateStore(rootReducer);
console.log('value awal : ',store.getState());

//3. Subscription : proses pemanggilan store yang diperlukan
store.subscribe(() => {
    console.log('store change:' ,store.getState());
})

//4. Dispatching Action : proses sebuah pemanggilan instruksi yang disediakan oleh reducer
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log('value akhir :',store.getState());




