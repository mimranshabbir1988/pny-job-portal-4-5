import React from "react";

const InputField = ({ handleChange, value, title, name }) => {
  return (
    
    <lable className="sidebar-label-container">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span className="checkmark"></span>{title}
    </lable>
  );
};

export default InputField;
