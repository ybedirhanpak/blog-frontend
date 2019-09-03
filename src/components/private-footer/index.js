import React, { Component } from "react";
import Footer from "../footer";

export default class PrivateFooter extends Component {
  show = () => {
    let show = true;
    let pathname = this.props.location.pathname;
    this.props.avoidList.forEach(element => {
      if (element === pathname) {
        show = false;
      }
    });
    return show;
  };

  render() {
    if (!this.show()) return null;
    return <Footer />;
  }
}
