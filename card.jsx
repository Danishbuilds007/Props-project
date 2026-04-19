import React from "react";

const Card = (props)=>{




    return (
        <div class="job-card">
                
  <div class="job-header">
    <div class="logo">
        <img src={props.brandLogo} alt="" />
    </div>
    <div class="company-info">
      <h3>{props.company}</h3>
      <p>{props.post}</p>

      </div>
  </div>




  <div class="job-tags">
    <span>{props.tag1}</span>
    <span>{props.tag2}</span>
  </div>



  <div class="job-footer">
    <div class="salary">{props.pay}</div>
    <button class="apply-btn">Apply now</button>
  </div>



</div>


    )
}

export default Card 