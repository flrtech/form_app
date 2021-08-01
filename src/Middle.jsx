import React from 'react';

const Middle = () => {
    return (
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
                                        <input className="prompt" type="text" placeholder="Search clients..." />
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
                            <div className="ui primary button">
                                Create
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;
