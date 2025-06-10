import { Outlet } from "react-router-dom";
import SideBar from "./SideBar"
import { useState } from "react";


const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    
  return (
    <>
    <SideBar  isOpen={isOpen} setIsOpen={setIsOpen}/>
    <div className={`container ${isOpen ? "sidebar-open" : ""}`}>
        <Outlet/>
    </div>
    </>
  )
}

export default Main