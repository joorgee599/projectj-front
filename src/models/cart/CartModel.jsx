import { ApiBaseEndpoint } from "../../api/ApiBaseEndpoint";

export class CartModel {
  constructor() {
    this.apiBaseEndoint = new ApiBaseEndpoint();
  }

  async createCartModel(data) {
    try {
      const response = await this.apiBaseEndoint.post(`sales`, data);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al crear la venta",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al crear el producto, revise el servidor",
        status:error.status
      }
    }
  }


  
}
