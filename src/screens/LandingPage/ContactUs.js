import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Rate from "../../components/Rate";


// Sample Data
const TestimonialList = [
  {
    name: "Jhonny Walker",
    testimony: "I got the best hand on TechSolutions. Highly recommend the team",
    img: null,
  },
  {
    name: "Aster Aweke",
    testimony: "Checheho Checheho Checheho...  Highly recommend the team",
    img: null,
  },
  {
    name: "No One",
    testimony: "I have been served with Quality Service from TechSolutions for my ecommerce business, I would like to thank the team",
    img: null,
  }
]

function ContactUs() {
 

  return (
    
    <div className="w-full flex justify-center py-10 my-10">
      <div className="sw flex items-center flex-wrap">

        {/* Big Header */}
        <div className="flex-1 flex flex-col gap-3 px-10">
          <p className="uppercase">Join Our Community</p>
          <h1>Contact us</h1>
          <p>Email: techsolutions@gmail.com</p>

          
        </div>

        <div className="flex-1 flex flex-col gap-4 my-10">
          
           
              <div className="card-sty1 min-w-[300px] quote flex-col bg-black">
                <div className="p-1">
                  <input placeholder="Your name"/> <input type='email' placeholder="Your Email"/>
                </div>
                <div className="p-4" >
                  <textarea className="" placeholder="Leave your comments or suggestions...." cols='50' rows='5'></textarea><br/>
                  <Link to='/' className="btn-sty-1 my-5  rounded-r bg-slate-200">Submit</Link>
                </div>
                
              </div>  
          </div>
          <Testimonials/>
         
      </div>
      
    </div>
  )
}

function Testimonials(){
  const [testimonialList,setTestimonialList] = useState([])

  useEffect(() => {
    setTestimonialList(TestimonialList);
  },[])

  return(
    <div className="mt-24">
     { <div className="flex-1 flex flex-col gap-4 my-10">
          <h3 className="text-center">Your Comments & Suggestions</h3><br/>
          {  
             // Listing Sample Data from variable
            testimonialList.map((list,i) => (
              <div className="card-sty1 min-w-[300px] quote flex" key={i}>
                <div className="p-1">
                  <img src={list.img || null} alt='User' className="w-20 h-20 avatar" />
                </div>
                <div className="p-4">
                  <h3>{list.name}</h3>
                  <p>"{list.testimony}"</p>
                </div>
              </div>  
            ))
          }
        </div> }
      </div>
  )


}

export default ContactUs;