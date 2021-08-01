import React from 'react';

const ClientList = ({ clients }) => {
    return (
        <div>
            {clients.map((client) => (
                <div className="item" key={client.id}>
                    <table className="ui table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td className="w">{client.firstName} {client.lastName}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>State</td>
                                <td className="w">{client.state}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Phone</td>
                                <td className="w">{client.phone}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td className="w">{client.address}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>City</td>
                                <td className="w">{client.city}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>SSN</td>
                                <td className="w">{client.ssn}</td>
                            </tr>
                            <tr>
                                <td>License Plate</td>
                                <td className="w">{client.licensePlate}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flexy i">
                        <div className="content">
                            <div className="ui primary button">Edit</div>
                        </div>
                        <div className="content">
                            <div
                                className="ui negative button"

                            >
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClientList;
