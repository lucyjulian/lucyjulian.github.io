import React from "react";
import sig from '../fotos/ladylikelogo.png';

const NavTabs = props => (
  <div className="row">
    <div className="col-md-2 navtab">
      <a onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active": "nav-link"}>
        About
      </a>
    </div>
    <div className="col-md-2 navtab">
      <a onClick={() => props.handlePageChange("Portfolio")} className={props.currentPage === "Portfolio" ? "nav-link active": "nav-link"}>
        Portfolio
      </a>
    </div>
    <div className="col-md-4">
      <img src={sig} className="sig" alt="sig" />
    </div>
    <div className="col-md-2 navtab">
      <a onClick={() => props.handlePageChange("About")} className={props.currentPage === "About" ? "nav-link active": "nav-link"}>
        Experience
      </a>
    </div>
    <div className="col-md-2 navtab">
      <a onClick={() => props.handlePageChange("Contact")} className={props.currentPage === "Contact" ? "nav-link active": "nav-link"}>
        Contact
      </a>
    </div>
  </div>
);

export default NavTabs;
