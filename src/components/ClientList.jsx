import React from "react";
import Scroll from "./Scroll";
import Client from "./Client";

const ClientList = ({ clients, vh }) => {
  return (
    <div>
      <Scroll vh={vh}>
        {clients.map((client) => (
          <div className="item" key={client.id}>
            <Client client={client} />
          </div>
        ))}
      </Scroll>
    </div>
  );
};

export default ClientList;
