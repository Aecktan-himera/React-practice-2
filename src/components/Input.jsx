import React from "react";
import "../styles/Input.css";

const Input = React.forwardRef(
  (
    {
      type = "text",
      value,
      onChange,
      placeholder,
      size = "medium",
      error = false,
      disabled = false,
      className = "",
      ...rest
    },
    ref,
  ) => {
    // Формируем строку классов: базовый 'input' + классы для размера и ошибки + пользовательские
    const inputClasses =
      `input input--${size} ${error ? "input--error" : ""} ${className}`.trim();

    return (
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
