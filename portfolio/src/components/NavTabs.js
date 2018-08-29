import React from "react";

const NavTabs = props => (
  <div className="row">
    <div className="col-md-3 navtab">
      <a onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active": "nav-link"}>
        Home
      </a>
    </div>
    <div className="col-md-3 navtab">
      <a onClick={() => props.handlePageChange("About")} className={props.currentPage === "About" ? "nav-link active": "nav-link"}>
        About
      </a>
    </div>
    <div className="col-md-3 navtab">
      <a onClick={() => props.handlePageChange("Blog")} className={props.currentPage === "Blog" ? "nav-link active": "nav-link"}>
        Blog
      </a>
    </div>
    <div className="col-md-3 navtab">
      <a onClick={() => props.handlePageChange("Contact")} className={props.currentPage === "Contact" ? "nav-link active": "nav-link"}>
        Contact
      </a>
    </div>
  </div>
);

export default NavTabs;
