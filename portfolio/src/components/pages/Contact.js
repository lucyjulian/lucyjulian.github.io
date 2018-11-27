import React from "react";

const Contact = () => (
  <div>
    <p className="pagetitle">Contact Me</p>

    <p className="myemail">ljulian@alumni.unc.edu</p>

    <br></br>

    <div classnname="contactmeform">
      <form class="contactform" action="mailto:ljulian@alumni.unc.edu" method="post" enctype="text/plain">
          <p></p>
                      
          <input type="text" name="Name" placeholder="Name"></input>
                      
          <p></p>
                      
          <input type="text" name="Email" placeholder="Email"></input>
                      
          <p></p>
                      
          <textarea id="messagebox" type="text" rows="5" name="Message" placeholder="Write your message here"></textarea>
                          
          <br></br>

          <input class="button" id="submitButton" type="submit" value="Submit"></input>
      </form>
    </div>

    <br></br>
  </div>
);

export default Contact;
