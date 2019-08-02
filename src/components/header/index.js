import React, { Component } from "react";
import TopHeader from "./top-header";
import NavigationBar from "./navigation-bar";
import SearchInput from "./search-input";

export default class Header extends Component {
  render() {
    return (
      <>
        <TopHeader />
        <header id="header">
          <NavigationBar />
          <SearchInput />
        </header>
      </>
    );
  }
}
