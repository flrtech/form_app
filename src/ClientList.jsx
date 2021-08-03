import React from "react";
import Scroll from "./Scroll";
import Client from "./Client";

const ClientList = ({ clients }) => {
  return (
    <div>
      <Scroll>
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
