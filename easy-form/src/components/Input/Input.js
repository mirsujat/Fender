import React from "react";

const Input = (props) => {
  let classNames = "input";
  let errorTextClass = "no-error";
  if (props.errors) return (classNames = classNames + " error");
  if (props.errors) return (errorTextClass = "error-text");

  return (
    <div className="form-input">
      <div className="label">{props.label}</div>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={classNames}
      />
      <div className={errorTextClass}>{props.errors}</div>
    </div>
  );
};

export default Input;
