import React from 'react';

const InputField = ({ label, type, id, name, error, onChange }) => {
  return (
    <div className="input-control">
      <label htmlFor={id}>{label}</label>
      <input 
        id={id} 
        name={name} 
        type={type} 
        onChange={onChange} 
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InputField;