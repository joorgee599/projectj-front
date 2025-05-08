// src/controllers/auth/loginController.js
import { AuthModel } from "../../models/auth/AuthModel";

export const loginController = async (credentials) => {
  const authModel = new AuthModel();

  const response = await authModel.login(credentials);

  if (response.success) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: response.user.id,
        name: response.user.name,
        token: response.token,
      })
    );
  }

  return response;
};

export const logoutController = async () => {
  const authModel = new AuthModel();

  const response = await authModel.logout();
  if (response.success) {
    localStorage.removeItem("user");
  }
  return response;
};
