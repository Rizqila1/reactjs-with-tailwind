import Card from "../../Card";

export default function CardStoryandServices({ className, title, svg, text }) {
  return (
    <div className="col-span-1">
      <Card
        className={`rounded-40 shadow-custom2 w-66 h-72 ${className}`}
        justifyCardContent="centered"
        cardContent={
          <>
            {svg}

            <h4 className="text-2xl font-Inter font-bold text-customgreen mb-4">
              {title}
            </h4>

            <div className="w-[220px]">
              <h3 className="text-xl font-Inter font-semibold text-darkgreen text-center">
                {text}
              </h3>
            </div>
          </>
        }
      />
    </div>
  );
}
