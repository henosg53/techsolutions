import React from "react";
import BlogImg from '../../assets/images/2.png'


const sites = [
  {
    description: "An ecommerce site, using React Nodejs mysql",
    img: BlogImg,
  },
 
]
function Works() {
  return (
    <div className="w-full flex justify-center">
      <div className="sw">
        
        {/* Steps Block */}
        <Steps />

    
        <h2>Explore Our Works</h2>
        
        <RecentWorks/>

      </div>
    </div>
  )
}

function Steps() {
  return (
    <div className="flex flex-col gap-4 py-10 mb-20">
      <p> You will be satisfied working with us!</p>
      
      {/* Big Header */}
      <h2 className="py-4">Catagories</h2>
      <div className="flex flex-wrap justify-center gap-4">

        {/* Cards */}

        <div className="card-sty1 min-w-[200px] flex-1">
          <div className='rounded-full bg-fixer inline-block w-14 h-14 flex justify-center items-center text-white font-extrabold text-2xl '>1</div>
          <h4 className="py-4">Web Applications</h4>
          <p>
            Web Apps developed using state of the art react frameworks. Easy to use User Interfaces
          </p>
        </div>

        <div className="card-sty1 min-w-[200px] flex-1">
          <div className='rounded-full bg-fixer inline-block w-14 h-14 flex justify-center items-center text-white font-extrabold text-2xl '>2</div>
          <h4 className="py-4">Mobile Applications</h4>
          <p>
            Beautiful standalone as well as Apps for your websites.
          </p>
        </div>

        <div className="card-sty1 min-w-[200px] flex-1">
          <div className='rounded-full bg-fixer inline-block w-14 h-14 flex justify-center items-center text-white font-extrabold text-2xl '>3</div>
          <h4 className="py-4">System Developments</h4>
          <p>
            System softwares for variety of Applications
          </p>
        </div>
      </div>
    </div>
  )
}
function RecentWorks() {
  return (
    <div className="flex flex-col gap-4 py-10 mb-20">
      <p>Recent Works</p>
      
      <div className="flex flex-wrap justify-center gap-4 ">
        

        {/* Cards */}

        <div className="card-sty1  rounded-xl min-w-[400px] flex-1 ">
          <h4 className="py-4">Web App 1</h4>
          <div className="img-cont  ">
                  <img alt='User' className="text-[0] rounded-xl" src={sites[0].img || null} />
          </div>
          <p>
           {sites[0].description}
          </p>
        </div>

        <div className="card-sty1 rounded-xl min-w-[400px] flex-1">
          <h4 className="py-4">Web App 2</h4>
          <div className="img-cont  ">
                  <img alt='User' className="text-[0] rounded-xl" src={sites[0].img || null} />
          </div>
          <p>
           {sites[0].description}
          </p>
        </div>

        <div className="card-sty1 rounded-xl min-w-[400px] flex-1">
          <h4 className="py-4">Web App 3</h4>
          <div className="img-cont  ">
                  <img alt='User' className="text-[0] rounded-xl" src={sites[0].img || null} />
          </div>
          <p>
           {sites[0].description}
          </p>
        </div>
        <div className="card-sty1 rounded-xl min-w-[400px] flex-1">
          <h4 className="py-4">Web App 3</h4>
          <div className="img-cont">
                  <img alt='User' className="text-[0] rounded-xl" src={sites[0].img || null} />
          </div>
          <p>
           {sites[0].description}
          </p>
        </div>
       
      </div>
    </div>
  )
}

export default Works;