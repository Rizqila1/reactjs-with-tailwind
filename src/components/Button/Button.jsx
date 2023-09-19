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

      default:
        return "bg-lightgreen hover:bg-green-500 py-3 px-4 rounded-40 text-white";
    }
  }
  return (
    <a href={href}>
      <button
        type="button"
        className={`${buttonVariant(variant)}, ${className}`}
        style={style}
      >
        {icon} {btnText}
      </button>
    </a>
  );
};

export default Button;
