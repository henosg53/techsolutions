import React from "react";


// Sample Data
const faqList = [
  {
    q: "How much does your services cost?",
    ans: "It’s free to use. We don’t charge you to search and book a fixer on our platform."
  },
  {
    q: "Can i book a fixer for later?",
    ans: "You can schedule a fixer to work for you later."
  },
  {
    q: "Are your fixers verified?",
    ans: "All our fixers are vetted and identity verified."
  }
]
function FAQ() {
  return (
    <div className="w-full flex justify-center ">
      <div className="sw flex justify-center ">
        <div className="bg-red-200 rounded-3xl p-10 w-full flex flex-col items-center px-20">
          <p className="tracking-widest">F.A.Q.</p>
          <h1 className="py-4 mb-4 ">Frequently Asked Questions</h1>
          <div className="list-sty2 ">
            {
              /* Listing questions and answers from a variable */
              faqList.map((faq,i) => (
                <li key={i}>
                  <h4 className='inline-block'>{faq.q}</h4>
                  <div className="py-1 pb-4">{faq.ans}</div>
                </li>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ;