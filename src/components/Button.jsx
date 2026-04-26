import "../styles/Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  onClick,
  className = "",
  ...rest // собираем все оставшиеся пропсы
}) => {
  // Формируем строку классов: базовый 'btn' + классы для варианта и размера + пользовательские
  const btnClasses = `btn btn--${variant} btn--${size} ${className}`.trim();

  return (
    <button
      type={type}
      className={btnClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest} // пробрасываем data-атрибуты, aria-* и т.д.
    >
      {children}
    </button>
  );
};

export default Button;
