import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";

const AuthRouter = () => {
  //aca debemos colocar el restablecer contraseña o registrar usuario tambien
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login></Login>} />
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </div>
  );
};

export default AuthRouter;
