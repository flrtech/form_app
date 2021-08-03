import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Middle = () => {
  const [searchField, setSearchField] = useState("");

  return (
    <>
      <div>
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">Or</div>
            <div className="middle aligned row">
              <div className="column">
                <div className="ui icon header">
                  <i className="search icon"></i>
                  Search for a Client
                </div>
                <div className="field">
                  <div className="ui search">
                    <div className="ui icon input">
                      <input
                        className="prompt"
                        type="text"
                        placeholder="Search clients..."
                        value={searchField}
                        onChange={(e) => setSearchField(e.target.value)}
                      />
                      <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="ui icon header">
                  <i className="address book icon"></i>
                  Add New Client
                </div>
                <NavLink to="/add" className="ui primary button">
                  Add
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Search searchField={searchField} />
      </div>
    </>
  );
};

export default Middle;
