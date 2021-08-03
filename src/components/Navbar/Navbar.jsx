import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui fluid black inverted borderless huge menu">
      <NavLink exact to="/" className="item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/viewall" className="item" activeClassName="active">
        View All
      </NavLink>
      <NavLink to="/statistics" className="item" activeClassName="active">
        Statistics
      </NavLink>
      {/* <div className="item">
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." />
                    <i className="car icon"></i>
                </div>
            </div> */}

      <div className="right menu">
        <NavLink
          to="/add"
          className="ui positive button "
          style={{ fontWeight: "bold", fontSize: 18 }}>
          Add Client
          <i className="right floated icon plus" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
