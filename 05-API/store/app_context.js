import { createContext, useReducer } from 'react'

export const AppContext = createContext({
  users: null,
  addUser: function (user) {},
})

export const AppContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    return [...state, ...action]
  }
  const initialState = [{ name: 'Francis' }]

  const [users, dispatch] = useReducer(reducer, initialState)

  const handleAddUser = (user) => {
    dispatch([user])
  }

  return (
    <AppContext.Provider
      value={{
        users: users,
        addUser: handleAddUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
