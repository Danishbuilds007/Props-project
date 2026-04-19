import React from "react"

import Card from "./componentz/card"

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "2 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    company: "IBM",
    datePosted: "12 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Chennai, India"
  }
];
    return ( 
        <div className="container">

        
     {
     
     jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.company} post={elem.post} pay ={elem.pay} brandLogo={elem.brandLogo} tag1={elem.tag1}tag2={elem.tag2} />
        </div>
     })
     
     }
        </div>
        
        )
}


 export default App 
 