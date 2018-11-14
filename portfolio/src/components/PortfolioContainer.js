import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ContactLinks from "./ContactLinks";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage() {
    switch(this.state.currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <h1>404 Can't find that.</h1>;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={sig} className="sig" alt="sig" /> */}
          <div>
            <NavTabs
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
          </div>
        </header>
        <div className="loadpage">
          {this.renderPage()}
        </div>
        <div className="logolinks">
          <ContactLinks />
        </div>
        <footer className="App-footer">
          <p>© Copyright 2018 Lucy Julian</p>
        </footer>
      </div>
    );
  }
}

export default PortfolioContainer;
