import React from "react";
import Intro from "./Intro";
import Footer from "./Footer";
import Services from "./Services";


function Index() {
  return (
    <div className="flex flex-col justify-center self-stretch">
      <Intro />
      <Services />
      <Footer />
      <div className="p-10">&nbsp;</div>
    </div>
  )
}

export default Index;