function Input({ inputName, type, placeholder, handleChange, error }) {
  return (
    <div className="Input">
      <label htmlFor={inputName}>{inputName}</label>
      <input
        id={inputName}
        name={inputName}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, inputName)}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Input;
