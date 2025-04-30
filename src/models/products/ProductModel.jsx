import { ApiBaseEndpoint } from "../../api/ApiBaseEndpoint";

export class ProductModel {
  constructor() {
    this.apiBaseEndoint = new ApiBaseEndpoint();
  }

  async getProductsModel() {
    try {
      const products = await this.apiBaseEndoint.get(`products`);
      // console.log(products);
      return products;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
