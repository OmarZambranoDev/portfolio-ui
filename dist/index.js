// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false
}) => {
  const baseStyles = "rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles}`,
      onClick,
      disabled,
      children
    }
  );
};
export {
  Button
};
//# sourceMappingURL=index.js.map