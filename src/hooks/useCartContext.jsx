import { useContext } from "react";
import CartContext from "../contexts/CartProviders";


const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
