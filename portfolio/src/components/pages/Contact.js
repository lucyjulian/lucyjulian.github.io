import React from "react";

const Contact = () => (
  <div>
    <p className="pagetitle">Contact Me</p>

    <div classnname="contactmeform">
      <form class="contactform" action="mailto:ljulian@alumni.unc.edu" method="post" enctype="text/plain">
          <p>Name</p>
                      
          <input type="text" name="Name" placeholder="John Smith"></input>
                      
          <p>Email</p>
                      
          <input type="text" name="Email" placeholder="example@gmail.com"></input>
                      
          <p>Message</p>
                      
          <input id="messagebox" type="text" name="Message" placeholder="Write your message here"></input>
                          
          

          <input class="button" type="submit" value="Submit"></input>
      </form>
    </div>
  </div>
);

export default Contact;
