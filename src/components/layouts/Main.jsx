import { Outlet } from "react-router-dom";
import SideBar from "./SideBar"
import { useState } from "react";
import CartModal from "../cart/CartModal";
import { FaShoppingCart } from "react-icons/fa";


const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);

    
  return (
    <>
    <SideBar  isOpen={isOpen} setIsOpen={setIsOpen}/>
    <div className={`container ${isOpen ? "sidebar-open" : ""}`}>
        <Outlet/>
    </div>
    {/* 🛒 Botón flotante del carrito */}
      <button
        onClick={() => setShowCart(true)}
        style={{
          position: "fixed",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          backgroundColor: "#198754",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <FaShoppingCart size={24} />
      </button>

      {/* 🧾 Modal del carrito */}
      <CartModal show={showCart} handleClose={() => setShowCart(false)} />
    </>
  )
}

export default Main