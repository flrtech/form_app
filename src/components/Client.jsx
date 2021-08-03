import React, { useState } from "react";
import firebase from "./firebase";
import "./home.css";

const Client = ({ client }) => {
  const [edit, setEdit] = useState([]);
  const [firstName, setFirstName] = useState(client.firstName);
  const [lastName, setLastName] = useState(client.lastName);
  const [state, setState] = useState(client.state);
  const [phone, setPhone] = useState(client.phone);
  const [address, setAddress] = useState(client.address);
  const [city, setCity] = useState(client.city);
  const [ssn, setSSN] = useState(client.ssn);
  const [licensePlate, setLicensePlate] = useState(client.licensePlate);

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("clients").doc(client.id).delete();
  };

  const onClick = () => {
    if (edit.includes(client.id)) {
      let newEdit = edit.filter((el) => el !== client.id);
      setEdit(newEdit);
    } else {
      setEdit([...edit, client.id]);
    }
  };

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("clients").doc(client.id).set({
      firstName,
      lastName,
      state,
      phone,
      address,
      city,
      ssn,
      licensePlate,
    });
    let newEdit = edit.filter((el) => el !== client.id);
    setEdit(newEdit);
  };

  return (
    <>
      <table className="ui very basic table">
        <tbody>
          <tr>
            <td>Name</td>
            <td className={`w ${edit.includes(client.id) && "six wide"}`}>
              {!edit.includes(client.id) &&
                `${client.firstName} ${client.lastName}`}
              {edit.includes(client.id) && (
                <>
                  <div className="ui fluid input">
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="ui fluid input">
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </>
              )}
            </td>
            {!edit.includes(client.id) && <td></td>}
            {!edit.includes(client.id) && <td></td>}

            <td>State</td>
            <td className={`w ${edit.includes(client.id) && "six wide"}`}>
              {!edit.includes(client.id) && client.state}
              {edit.includes(client.id) && (
                <div className="ui fluid input">
                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              )}
            </td>
            {!edit.includes(client.id) && <td></td>}
            {!edit.includes(client.id) && <td></td>}

            <td>Phone</td>
            <td className={`w ${edit.includes(client.id) && "six wide"}`}>
              {!edit.includes(client.id) && client.phone}
              {edit.includes(client.id) && (
                <div className="ui fluid input">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td className={`w ${edit.includes(client.id) && "six wide"}`}>
              {!edit.includes(client.id) && client.address}
              {edit.includes(client.id) && (
                <div className="ui fluid input">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              )}
            </td>
            {!edit.includes(client.id) && <td></td>}
            {!edit.includes(client.id) && <td></td>}

            <td>City</td>
            <td className={`w ${edit.includes(client.id) && "six wide"}`}>
              {!edit.includes(client.id) && client.city}
              {edit.includes(client.id) && (
                <div className="ui fluid input">
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              )}
            </td>
            {!edit.includes(client.id) && <td></td>}
            {!edit.includes(client.id) && <td></td>}

            <td>SSN</td>
            <td className={`w ${edit.includes(client.id) && "six wide"}`}>
              {!edit.includes(client.id) && client.ssn}{" "}
              {edit.includes(client.id) && (
                <div className="ui fluid input">
                  <input value={ssn} onChange={(e) => setSSN(e.target.value)} />
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td>License Plate</td>
            <td className={`w ${edit.includes(client.id) && "six wide"}`}>
              {!edit.includes(client.id) && client.licensePlate}{" "}
              {edit.includes(client.id) && (
                <div className="ui fluid input">
                  <input
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value)}
                  />
                </div>
              )}
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="flexy i">
        <div className="content">
          <div className="ui primary button" onClick={onClick}>
            Edit
          </div>
        </div>
        {edit.includes(client.id) && (
          <div className="content">
            <div className="ui positive button" onClick={onUpdate}>
              Save
            </div>
          </div>
        )}
        <div className="content">
          <div className="ui negative button" onClick={onDelete}>
            Delete
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
