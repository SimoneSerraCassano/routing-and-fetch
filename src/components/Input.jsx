import React from "react";

function Input({ name, type, placeholder, handleChange, error }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{name}</label>
      <input
        type={type ? type : "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, name)}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Input;
