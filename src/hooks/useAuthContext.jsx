import { useContext } from "react";
import AuthContext from "../contexts/AuthProviders";

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
