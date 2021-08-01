import React from 'react';

import ClientList from "../ClientList";
import { GetClients } from "../GetClients";

import "../home.css";
import Loading from "../Loading";


const ViewAll = () => {
    const [clients, isLoading] = GetClients();
    return (
        <>
            {isLoading && <div className="list"><Loading /></div>}
            {clients.length && <div className="list">
                <div className="ui centered segment">
                    <div className="ui relaxed list">
                        <ClientList clients={clients} />
                    </div>
                </div>
            </div>}
        </>
    );
};

export default ViewAll;
