import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  handleSubmit,
  handleSurpriseMe,
  isSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-grey-900"
        >
          {labelName}
        </label>
      </div>
    </div>
  );
};

export default FormField;
