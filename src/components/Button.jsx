import { Link } from "react-router-dom";

export const Button = ({
  variant = "lightgreen",
  icon,
  btnText,
  style,
  href,
  className,
}) => {
  function buttonVariant(payload) {
    switch (payload) {
      case "lightgreen":
        return "bg-lightgreen hover:bg-green-500 py-2 px-4 rounded-40 text-white";

      case "white":
        return "bg-white hover:bg-gray-100 py-3 px-4 rounded-40 text-black";

      case "secondary":
        return "bg-[#EFEFEF] hover:bg-gray-100 py-3 px-4 rounded-full text-black";

      default:
        return "bg-lightgreen hover:bg-green-500 py-3 px-4 rounded-40 text-white";
    }
  }
  return (
    <Link to={href}>
      <button
        type="button"
        className={`${buttonVariant(variant)}, ${className}`}
        style={style}
      >
        {icon} {btnText}
      </button>
    </Link>
  );
};

export default Button;
