import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="flex items-center justify-center w-full bg-[url('./assets/images/22.jpg')] sm:bg-none bg-fit text-white sm:text-black">
      <div className="sw flex flex-wrap items-center py-10">
        <div className="flex-1 flex flex-col p-4">
          <p className="text-white sm:text-gray-500">Company</p>

          {/* Big Header Content */}
          <h1>Looking for Developers?</h1>
          <p className="text-white sm:text-gray-500 py-10">Planning to deploy a website?<br /> Then this is the right place.</p>
          <Link to='/contactus' className='btn-sty2'>Meet with a developer</Link>
        </div>

        {/* SVG Mobile View Image */}
        <div className="flex-1 flex justify-center">
          <span className="h-[150px] w-[300px] min-w-[300px]" />
        </div>
      </div>
    </div>
  )
}

export default Intro;