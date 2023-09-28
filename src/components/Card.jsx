export default function Card({
  className,
  style,
  cardTitle,
  cardContent,
  justifyCardContent = "",
}) {
  function customize(payload) {
    switch (payload) {
      case "centered":
        return "flex flex-col justify-center items-center";
      default:
        return "";
    }
  }

  return (
    <section
      className={`xl:px-4 xl:py-4 lg:py-2 lg:px-4 bg-white inline-block shadow-custom2 ${className}`}
      style={style}
    >
      <h2 className="text-xl font-semibold">{cardTitle}</h2>
      <div className={customize(justifyCardContent)}>{cardContent}</div>
    </section>
  );
}
