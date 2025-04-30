import { ProductModel } from "../../models/products/ProductModel";

export const getProductsController = async () => {
  const productModel = new ProductModel();

  try {
    const products = await productModel.getProductsModel();
    console.log(products);
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};
