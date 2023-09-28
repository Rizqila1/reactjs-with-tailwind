import Card from "../../Card";

export default function CardPopularCategories({
  className,
  title,
  img,
  text,
  imgCSS,
}) {
  return (
    <Card
      className={`rounded-40 shadow-custom2 w-72 h-72 ${className}`}
      justifyCardContent="centered"
      cardContent={
        <>
          <div className="flex justify-center items-center xl:w-36 lg:h-36 bg-palmgreen rounded-full z-0 my-5">
            <img
              src={img}
              alt="popular-categories"
              className={`w-[139] h-[139px] object-contain ${imgCSS}`}
            />
          </div>

          <h4 className="text-2xl font-Inter font-semibold">{title}</h4>
          <h3 className="text-xl font-Inter font-medium text-[#555]">{text}</h3>
        </>
      }
    />
  );
}
