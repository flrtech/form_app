import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


    return (
        <div className="ui fluid black inverted borderless menu">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink to="/viewall" className="item" activeClassName="active">View All</NavLink>
            <NavLink to="/statistics" className="item" activeClassName="active">Statistics</NavLink>
            <div className="item">
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." />
                    <i className="car icon"></i>
                </div>
            </div>

            <NavLink to="/add" className="right item" activeClassName="active" style={{ fontWeight: "bold" }}>
                Add Client <p>&nbsp;&nbsp;</p><i className="icon plus large" />
            </NavLink>

        </div>
    );
};

export default Navbar;
