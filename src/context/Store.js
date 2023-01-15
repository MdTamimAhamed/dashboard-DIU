import React, { createContext, useReducer } from 'react'
import AuthReducer from '../context/AuthReducer'

const initialState = {
    profile:{},
    token:'',
    role:'',
}

//create context
export const StoreContext = createContext();

export const Store = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer,initialState);
    console.log(children)

  return (
    <StoreContext.Provider value={state}>
        {children}
    </StoreContext.Provider>
  )
}
