import React, { useState } from 'react';
import firebase from '../firebase';
import { Formik, Form } from "formik";
import * as yup from 'yup';
import TextField from '../TextField';
import "../home.css";

const AddClient = () => {
    const [submitted, setSubmitted] = useState(false);

    const validate = yup.object({
        firstName: yup.string()
            .max(40, "Must be 40 characters or less")
            .required("*required field"),
        lastName: yup.string()
            .max(40, "Must be 40 characters or less")
            .required("*required field"),
        address: yup.string()
            .max(40, "Must be 40 characters or less")
            .required("*required field"),
        city: yup.string()
            .max(40, "Must be 40 characters or less"),
        state: yup.string()
            .max(40, "Must be 40 characters or less"),
        phone: yup.string()
            .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Phone number is invalid")
            .required("*required field"),
        ssn: yup.string()
            .matches(/^\d{3}-?\d{2}-?\d{4}$/, "SSN is invalid")
            .required("*required field"),
        licensePlate: yup.string()
            .max(10, "Must be 10 characters or less")
            .required("*required field"),
    });

    const initialValues = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        phone: '',
        ssn: '',
        licensePlate: ''
    };

    return (
        <div className="ui grid flexy" style={{ marginTop: "6%" }}>
            <div className="ui ten wide column">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={(values, actions) => {
                        firebase
                            .firestore()
                            .collection("clients")
                            .add(
                                {
                                    ...values
                                }
                            );
                        setSubmitted(true);
                        actions.resetForm(initialValues);

                    }}
                >
                    {formik => (

                        <div className="ui segment">
                            <Form

                                className={`ui big form ${submitted && 'success'}`}>
                                <div className="two fields">
                                    <TextField
                                        label="First name"
                                        name="firstName"
                                        type="text"
                                        placeholder="First name" />
                                    <TextField
                                        label="Last name"
                                        name="lastName"
                                        type="text"
                                        placeholder="Last name" />
                                </div>
                                <TextField
                                    label="Adress"
                                    name="address"
                                    type="text"
                                    placeholder="Address" />
                                <div className="two fields">
                                    <TextField
                                        label="City"
                                        name="city"
                                        type="text"
                                        placeholder="City" />
                                    <TextField
                                        label="State"
                                        name="state"
                                        type="text"
                                        placeholder="State" />
                                </div>
                                <TextField
                                    label="Phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Phone number" />
                                <TextField
                                    label="Social Security Number"
                                    name="ssn"
                                    type="text"
                                    placeholder="SSN" />
                                <TextField
                                    label="License plate"
                                    name="licensePlate"
                                    type="text"
                                    placeholder="License plate" />
                                <div className="ui success message">
                                    <div className="header">Success!</div>
                                    <p>Your data was sent to our servers</p>
                                </div>
                                <button type="submit" className="fluid ui primary button">Add</button>
                            </Form>
                        </div>

                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddClient;



// import React, { useState } from 'react';
// import firebase from '../firebase';
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     address:,
//     city: yup.string(),
//     phone: ,
//     ssn:,
//     state:,
//     licensePlate:
// });

// const AddClient = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [address, setAddress] = useState("");
//     const [city, setCity] = useState("");
//     const [phone, setPhone] = useState("");
//     const [ssn, setSsn] = useState("");
//     const [state, setState] = useState("");
//     const [licensePlate, setLicensePlate] = useState("");

//     const onSubmit = (e) => {
//         e.preventDefault();
//         firebase
//             .firestore()
//             .collection("clients")
//             .add(
//                 {
//                     first_name: firstName,
//                     last_name: lastName,
//                     address,
//                     city,
//                     phone,
//                     ssn,
//                     state,
//                     license_plate: licensePlate
//                 }
//             )
//             .then(() => {
//                 setFirstName("");
//                 setLastName("");
//                 setAddress("");
//                 setCity("");
//                 setPhone("");
//                 setSsn("");
//                 setState("");
//                 setLicensePlate("");
//             });
//     };

//     return (
//         <form onSubmit={onSubmit}>
//             <div>
//                 <label>First name</label>
//                 <input type="text" value={firstName} onChange={e => setFirstName(e.currentTarget.value)} />
//                 {errors.firstName.length !== 0 && <p>{errors.firstName}</p>}
//                 {isEmpty.firstName && <p>{isEmpty.firstName}</p>}
//             </div>
//             <div>
//                 <label>Last name</label>
//                 <input type="text" value={lastName} onChange={e => setLastName(e.currentTarget.value)} />
//                 {errors.lastName.length !== 0 && <p>{errors.lastName}</p>}
//                 {isEmpty.lastName.length !== 0 && <p>{isEmpty.lastName}</p>}
//             </div>
//             <div>
//                 <label>Address</label>
//                 <input type="text" value={address} onChange={e => setAddress(e.currentTarget.value)} />
//                 {errors.address.length !== 0 && <p>{errors.address}</p>}
//                 {isEmpty.address.length !== 0 && <p>{isEmpty.address}</p>}
//             </div>
//             <div>
//                 <label>City</label>
//                 <input type="text" value={city} onChange={e => setCity(e.currentTarget.value)} />
//                 {errors.city.length !== 0 && <p>{errors.city}</p>}
//             </div>
//             <div>
//                 <label>State</label>
//                 <input type="text" value={state} onChange={e => setState(e.currentTarget.value)} />
//                 {errors.state.length !== 0 && <p>{errors.state}</p>}
//             </div>
//             <div>
//                 <label>Phone</label>
//                 <input type="text" value={phone} onChange={e => setPhone(e.currentTarget.value)} />
//                 {errors.phone.length !== 0 && <p>{errors.phone}</p>}
//             </div>
//             <div>
//                 <label>SSN</label>
//                 <input type="text" value={ssn} onChange={e => setSsn(e.currentTarget.value)} />
//                 {errors.ssn.length !== 0 && <p>{errors.ssn}</p>}
//                 {isEmpty.ssn.length !== 0 && <p>{isEmpty.ssn}</p>}
//             </div>
//             <div>
//                 <label>License plate</label>
//                 <input type="text" value={licensePlate} onChange={e => setLicensePlate(e.currentTarget.value)} />
//                 {errors.licensePlate.length !== 0 && <p>{errors.licensePlate}</p>}
//                 {isEmpty.licensePlate.length !== 0 && <p>{isEmpty.licensePlate}</p>}
//             </div>
//             <button>Add</button>
//         </form >
//     );
// };

// export default AddClient;
