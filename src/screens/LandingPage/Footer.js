import React from "react";
import { Link } from "react-router-dom";
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';


function Footer() {
  return (
    <div className="w-full flex flex-col items-center py-20 my-10">
      <div className="sw flex flex-wrap gap-20">

        <h2 className="w-full sm:w-auto">TechSolutions</h2>
        
        <div className="flex flex-col grow flex-1 gap-4">
          <p className="tracking-[2px]">MENU</p>
          <div className="flex flex-col gap-2">
            
            <Link to="/contactus"><p className="">Contact us</p></Link>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-4">
          <p className="tracking-[2px]">SOCIAL</p>

          {/* Social Media Icons */}
          
          <div className="flex gap-3">
            <Link to="/" className="icon">
              <img alt='fb' src={facebook} />
            </Link>
            <Link to="/" className="icon">
              <img alt='t' src={twitter} />
            </Link>
            <Link to="/" className="icon">
              <img alt='I' src={instagram} />
            </Link>
          </div>

        </div>
      </div>

      <hr className="sw mt-20" />
      
      <div className="flex sw py-10">
        <div className="flex-1">Copyright © 2022  TechSolutions. All Rights Reserved.</div>
        <div className="flex-1 flex justify-end gap-4">
          <Link to="/">Terms of use</Link>
          <Link to="/">Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;