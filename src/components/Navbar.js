import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [menuDisplay,setMenuDisplay] = useState("h-0");
  const [open,setOpen] = useState("");

  // Menu Links
  const Links = [
    <Link key='1' to="/blogs">Blogs</Link> ,
    <Link key='2' to="/works">Works</Link> ,
    <Link key='3' to="/about">About</Link>,

    <Link key='4' to="/contactus" className="btn-sty1 my-4 text-blue-600">Contact us</Link>
  ]  
  // Menu Opener
  function handleMenu() {
    setOpen(open === "open" ? "" : "open");
    setMenuDisplay(open === "open" ? "max-h-0" : "max-h-[100%]");
  }


  return (
    <div className="flex flex-col items-center">
      
      {/* Nav Header */}
      <div className="sw py-3 flex justify-around w-full items-center z-20 bg-inherit">
        <Link to="/"><h3 className="">Company</h3></Link>
        <div className="sm:hidden">
          <label className={"menu-btn "+open} onClick={handleMenu}><span></span></label>
        </div>
        <div className="hidden sm:flex gap-10 items-center">
          {[...Links]}
        </div>
      </div>

      {/* Nav Header For Mobile View */}
      <div className={"absolute shadow-xl shadow-black/30 bg-gray-100 w-full flex justify-center overflow-hidden transition-all sm:hidden "+menuDisplay}>
        <div className="sw pt-14 flex justify-end text-black z-10 ">
          <div className="flex flex-col py-4 gap-6 text-right">
            {[...Links]}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar;