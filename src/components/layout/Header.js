import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="sr-only">Movies and Shows app</h1>
        <div className="header__logos">
          ToDo LOGO
        </div>

        <div className="header__right">
          <nav className="header__nav">
            <Link to="/" title="Back to homepage">Home</Link>
          </nav>
          {/*!(this.props.location.pathname.match("/movie")) ? <SearchForm /> : null */}
        </div>
      </div>      
    </div>
  )
};

export default withRouter(Header);
