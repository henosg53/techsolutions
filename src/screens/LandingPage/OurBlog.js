import React, { useEffect, useState } from "react";
// import Download from "../../components/Download";
import BlogImg from '../../assets/images/2.png'


// Sample Data
const blogs = [
  {
    header: "Far far away, behind the word mountains",
    img: BlogImg,
    date: '12 jul 2020'
  },
  {
    header: "Far far away, behind the word mountains",
    img: BlogImg,
    date: '12 jul 2020'
  },
  {
    header: "Far far away, behind the word mountains",
    img: BlogImg,
    date: '12 jul 2020'
  },
  {
    header: "Far far away, behind the word mountains",
    img: BlogImg,
    date: '12 jul 2020'
  },
 
]

function OurBlog() {
  const [blogList,setBlogList] = useState([]);

  useEffect(() => {
    setBlogList(blogs)
  },[])

  return (
    <div className="w-full flex justify-center ">
      
      <div className="sw flex flex-col items-center mt-2">
      <NewsLetter />
        <p className="uppercase">our blog</p>
        <h2 className="pb-10">Latest Blogs</h2>
        <p className="text-xl">Follow up on our blog</p><br></br>
        <div className="flex flex-wrap gap-3 w-full mt-12 ">
          {
            // Listing Blog Object from variable
            blogList.map((blog,i) => (
              <div className="flex-1 flex-wrap card-sty2 min-h-[200px] max-w-[500px]" key={i}>
                <div className="img-cont ">
                  <img alt='User' className="text-[0]" src={blog.img || null} />
                </div>
                <div className="description">
                  <small>{blog.date}</small>
                  <h4>
                  {blog.header}
                  </h4>
                </div>
              </div>
            ))
          }
        </div>

        
        
        {/* Download Component */}
        {/* <div className="w-full">
          <Download>Join Our Online<br /> Community</Download>
        </div> */}
      </div>
    </div>
  )
}

function NewsLetter() {
  return (
    <div className="flex flex-wrap w-full py-10">
      <div className="flex-1 min-w-[50%]">
        <h4>NewsLetter</h4>
        <p>Slapped cozy a that lightheartedly and far</p>
      </div>

      <form className="flex-1 flex gap-2 justify-end items-center flex-wrap">
        <input type='text' placeholder="Your Email" className="self-center flex-1" />
        <input type="submit" className="btn-sty3 w-full sm:w-auto" value="Subscribe" />
      </form>
    </div>
  )
}

export default OurBlog;