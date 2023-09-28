import { useState } from "react";
import Card from "../../Card";

import LoveLogoSVG from "../../../utils/svg/loveLogo";
import LoveLogoFillSVG from "../../../utils/svg/loveLogoFill";

export default function CardSpecialDishes({
  className,
  title,
  img,
  text,
  imgCSS,
}) {
  const [value, setValue] = useState(false);

  function handleClick() {
    if (value) {
      setValue(false);
    } else {
      setValue(true);
    }
  }

  return (
    <Card
      className={`rounded-40 shadow-custom2 w-[399px] h-[480px] ${className}`}
      justifyCardContent="centered"
      cardContent={
        <div className="relative">
          <div className="absolute left-[253px] bottom-[390px] flex justify-center items-center xl:w-[87px] xl:h-[75px] bg-lightgreen rounded-custom1">
            <button type="button" onClick={() => handleClick()}>
              {value ? <LoveLogoFillSVG /> : <LoveLogoSVG />}
            </button>
          </div>
          <img
            src={img}
            alt="popular-categories"
            className={`flex justify-center items-center my-5 ${imgCSS}`}
          />

          <h4 className="text-2xl font-Inter font-semibold">{title}</h4>
          <h3 className="text-xl font-Inter font-medium">{text}</h3>
        </div>
      }
    />
  );
}
