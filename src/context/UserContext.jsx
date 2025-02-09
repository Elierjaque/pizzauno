import { createContext, useState } from "react"

// Crear el contexto
export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true) // Estado inicial del token en true

  
  // Método logout para cambiar el token a false
  const logout = () => {
    setToken(false)
  }

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider



















 