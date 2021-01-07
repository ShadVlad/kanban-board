import React from "react";
import User from "../User/user";

import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userActive: false,
    };
  }
  onClickUser = () => {
    this.setState({
      userActive: !this.state.userActive,
    });
  };
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Awesome Kanban Board</h1>
          <User active={this.state.userActive} onClick={this.onClickUser} />
        </div>
      </header>
    );
  }
}
export default Header;
