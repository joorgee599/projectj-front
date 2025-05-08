import { createContext } from "react";

const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  const dataStorage = JSON.parse(localStorage.getItem("user")) ?? [];
  const { id, token } = dataStorage;
  return (
    <AuthContext.Provider value={{ id, token }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProviders };
export default AuthContext;
