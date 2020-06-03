import React, {createContext, useContext, useReducer, useMemo} from "react"

const initialState = {
  page: "INTRODUCTION",
}

const reducer = (store, action) => {
  switch (action.type) {
    case `PAGE_UPDATE`:
      return {...store, page: action.page}
    default:
      return store
  }
}

const StoreContext = createContext({initialState})
export const useStore = () => useContext(StoreContext)

const DispatchContext = createContext()
export const useDispatch = () => useContext(DispatchContext)

export const StoreProvider = ({children}) => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return useMemo(() =>
    <StoreContext.Provider value={{store}}>
      <DispatchContext.Provider value={{dispatch}}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  , [store])
}
