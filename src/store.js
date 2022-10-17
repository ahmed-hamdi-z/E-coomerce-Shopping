import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools  } from 'redux-devtools-extension';

import { productsReducer, productDetailsReducer } from './reducers/productReducers'
import { authReducer } from './reducers/userRedusers';


const reducer = combineReducers({
    products: productsReducer,
    ProductDetails: productDetailsReducer,
    auth: authReducer
})

let initialState = {}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;