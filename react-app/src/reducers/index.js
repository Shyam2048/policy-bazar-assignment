import { combineReducers } from 'redux';

const initialState = {
    users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;