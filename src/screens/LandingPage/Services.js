import React from "react";
import FreeToUse from '../../assets/images/FreeToUse-Icon.png';
import BookNow from '../../assets/images/BookNow-Icon.png';
import VettedFixers from '../../assets/images/VettedFixers-Icon.png';

function Services() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="sw flex justify-center">
        <div className="flex flex-col items-center">
          <p>Tech Solutions</p>
          <h2 className="py-4">Our services</h2>
          <div className="flex flex-wrap py-6 gap-4">

            {/* Cards */}
            
            <div className="card-sty1 min-w-[200px] rounded-md flex-1">
              <div className="py-2">
                <img src={FreeToUse} alt="Free to use" className='w-[40px]' />
              </div>
              <h4>Website development</h4>
              <p>It’s free to find the next available fixer</p>
            </div>

            <div className="card-sty1 min-w-[200px] rounded-md flex-1">
              <div className="py-2">
                <img src={BookNow} alt="book now" className='w-[40px]' />
              </div>
              <h4>Mobile App development</h4>
              <p>Book a fixer for a same day task or schedule for a later date.</p>
            </div>
            
            <div className="card-sty1 min-w-[200px] rounded-md flex-1">
              <div className="py-2">
                <img src={VettedFixers} alt="vetted fixers" className='w-[40px]' />
              </div>
              <h4>System development</h4>
              <p>
                All fixers are vetted for your own security.
                <br />
                You can also rate them.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;