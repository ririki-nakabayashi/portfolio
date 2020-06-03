
import { createStore } from "redux"

const initialState = {
  page: "INTRODUCTION",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "PAGE_UPDATE":
      return { ...state, page: action.page }
    default:
      return state
  }
};

export const store = createStore(reducer, initialState)