import React from "react";

function Input({ name, type, placeholder, handleChange, error }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, name)}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Input;
