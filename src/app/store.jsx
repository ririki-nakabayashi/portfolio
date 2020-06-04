
import { createStore } from 'redux';

const initialState = {
  page: 'TOP',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PAGE_UPDATE':
      return { ...state, page: action.page };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
