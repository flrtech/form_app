import React, { useState } from "react";
import Client from "./Client";

const ClientList = ({ clients }) => {
  return (
    <div>
      {clients.map((client) => (
        <div className="item" key={client.id}>
          <Client client={client} />
        </div>
      ))}
    </div>
  );
};

export default ClientList;
