import { Navigate, Route, Routes } from "react-router-dom";
import User from "../pages/users/User";
import Layout from "../pages/layouts/Layout";
import PageInitial from "../pages/layouts/PageInitial";

const UserRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<PageInitial></PageInitial>} />
          <Route path="users" element={<User></User>} />

          <Route path="/*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default UserRoute;
