import React from 'react'

const About = () => {
     
  return (
    <div className="contAbout">
        <h4 id="abouth4">IcyText is a React Application for managing personal notes on the cloud</h4>
        <hr />
        <h5 className='Abouth5'>Lets Connect... ↆ</h5>
        <button className='connect mx-5 my-4'><a href="https://www.linkedin.com/in/suraj-kumar-864883220/" className="LinkedIn"target="_blank"> <i className="fa-brands fa-linkedin mx-1" id='linkIn'></i>LinkedIn </a></button>
        <button className='connect1 mx-5'><a href="https://www.instagram.com/surk_25/" className='Instagram' target="_blank"> <i className="fa-brands fa-instagram mx-1" id='insta'></i>Instagram </a></button>
        <button className='connect2 mx-5' id='twitt'><a href="https://twitter.com/surajk257" target="_blank"><i className="fa-brands fa-twitter" id='twit'></i> Twitter </a></button>

    </div>
  )
}

export default About