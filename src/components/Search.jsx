import React from "react";
import { GetClients } from "./GetClients";
import Loading from "./Loading";
import ClientList from "./ClientList";
import "./home.css";

function Search({ searchField }) {
  const [clients, isLoading] = GetClients();
  const vh = 50;

  const filteredClients = clients.filter((client) => {
    return (
      (client.firstName &&
        client.firstName.toLowerCase().includes(searchField.toLowerCase())) ||
      (client.lastName &&
        client.lastName.toLowerCase().includes(searchField.toLowerCase())) ||
      (client.licensePlate &&
        client.licensePlate
          .toLowerCase()
          .includes(searchField.toLowerCase())) ||
      (client.address &&
        client.address.toLowerCase().includes(searchField.toLowerCase())) ||
      (client.phone && client.phone.includes(searchField)) ||
      (client.state &&
        client.state.toLowerCase().includes(searchField.toLowerCase())) ||
      (client.city &&
        client.city.toLowerCase().includes(searchField.toLowerCase())) ||
      (client.ssn && client.ssn.includes(searchField))
    );
  });

  return (
    <div >
      {searchField.length !== 0 && isLoading && (
        <div className="list">
          <Loading />
        </div>
      )}
      {searchField.length !== 0 && (
        <div className="list">
          <div className="ui centered segment">
            <div className="ui relaxed list">
              <ClientList clients={filteredClients} vh={vh} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
