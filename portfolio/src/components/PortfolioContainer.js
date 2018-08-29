import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import sig from '../ladylikelogo.png';

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
      case "Blog":
        return <Blog />;
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
          <img src={sig} className="sig" alt="sig" />
          <div>
            <NavTabs
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            
          </div>
        </header>
        {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
