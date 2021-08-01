import React from 'react';
import { ErrorMessage, useField } from 'formik';
import "./home.css";

const TextField = ({ label, onChange, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`field ${meta.touched && meta.error && "error"}`}>
            <label htmlFor={field.name}>{label}</label>
            <input autoComplete="off"
                onChange={onChange}
                {...field}
                {...props} />
            <ErrorMessage component="div" name={field.name} className="err" />
        </div>
    );
};

export default TextField;
