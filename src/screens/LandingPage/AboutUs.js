import React from "react";
import Footer from "./Footer";
import Rate from "../../components/Rate";

function AboutUs() {
  return (
    <div className="w-full flex justify-center">
      <div className="sw flex flex-col">

       


        {/* Company Description */}
        <div className="flex flex-row-reverse flex-wrap justify-between ">
          <div className="flex-col sm:scale-125 flex justify-center mt-24">
            <h2>About TechSolutions</h2>
            <div className="py-4">We are us.We are us.We are us.We are us.We are us.We are us.<br></br>
            We are us.We are us.We are us.We are us.We are us.We are us.We are us.<br></br>
            We are us.We are us.We are us.We are us.</div>
            
          </div>

          {/* Quality Assurance */}
          <div className="flex-1 flex flex-col justify-center mt-24 ">
            <p>Our Quality</p>
            <h2>Working with TechSolutions</h2>
            <div className="py-4">We can assure you that you will get quality services</div>
            <p className="py-4 list-sty1 flex flex-col gap-2">
              <li>Punctuate project delivery</li>
              <li>Quality projects</li>
              <li>24/7 Maintainance</li>
            </p>
            <div><Rate value={4.5} className='flex' /></div>
          </div>
          
        </div>

        <Footer/>
        
      </div>
    </div>
  )
}

export default AboutUs;