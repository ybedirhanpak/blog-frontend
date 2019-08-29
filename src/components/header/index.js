import React, { Component, Fragment } from "react";
import NavigationBar from "./navigation-bar";
import SearchInput from "./search-input";
import "./style.scss";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header id="header">
          <NavigationBar />
          <SearchInput />
        </header>
      </Fragment>
    );
  }
}
