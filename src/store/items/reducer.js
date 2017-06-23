import { FETCH_USERS_SUCCESS, ADD_EMPLOYEE } from './actions';

const initialState = {
  list: [],
};

function items(state = initialState, action) {
  switch (action.type) {
      case FETCH_USERS_SUCCESS:
      return {
          ...state,
          list: action.payload
      };
      case ADD_EMPLOYEE:
          return {
              ...state,
              list: [...state.list, action.payload]
          };
    default:
      return state;
  }
}

export default items;
