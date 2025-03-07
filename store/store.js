import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import paymentReducer from '../reducers/paymentReducer';

const rootReducer = combineReducers({
  payment: paymentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
