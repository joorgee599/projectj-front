import { CartModel } from "../../models/cart/CartModel";




export const createCartController = async (data) => {
  const cartModel = new CartModel();
    const response = await cartModel.createCartModel(data);
    return response;
  
}

