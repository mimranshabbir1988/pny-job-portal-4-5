import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      {/* <input type='radio' onChange={handleChange} /> */}
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <lable className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </lable>

        <InputField
          handleChange={handleChange}
          value="lahore"
          title="Lahore"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="islamabad"
          title="Islamabad"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="london"
          title="London"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="seattle"
          title="Seattle"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="dubai"
          title="Dubai"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="uae"
          title="UAE"
          name="test"
        />




      </div>
    </div>
  );
};

export default Location;
