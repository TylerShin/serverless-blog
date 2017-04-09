import * as React from "react";
import { Link } from "react-router";

const withStyles: (styles: any) => Function = require("isomorphic-style-loader/lib/withStyles").default;
const styles = require("./navbar.scss");

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className="navbar navbar-inverse navbar-toggleable-sm bg-inverse">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">EmoLogic</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Tylor Shin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">Diary</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">DevDiary</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
