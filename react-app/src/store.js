import { createStore } from 'redux';
import { usersReducer } from './reducers';

const store = createStore(usersReducer);

export default store;
