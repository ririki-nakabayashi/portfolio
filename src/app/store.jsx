
import { createStore } from 'redux';

const initialState = {
  page: 'TOP',
  carrer: [],
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PAGE_UPDATE':
      return { ...state, page: action.page };
    case 'SET_CARRER':
      return { ...state, carrer: action.carrer };
    case 'SET_PRODUCTS':
      return { ...state, products: action.products };
    case 'SET_PROFILE':
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
