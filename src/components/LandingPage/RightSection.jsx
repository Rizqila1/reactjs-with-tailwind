import Card from "../../components/Card";

import Image1 from "../../assets/images/Intersect.png";
import FoodImage from "../../assets/images/food1.png";
import FoodImage2 from "../../assets/images/food2.png";

import HotSpicyFoodSVG from "../../utils/svg/HotSpicyFoodSVG";
import STARS from "../../utils/svg/starYellow";
import BlankStars from "../../utils/svg/starBlank";

export default function RightSectionLandingPage() {
  return (
    <section className="xl:col-span-1 md:col-span-2 flex xl:justify-center lg:justify-end">
      <div className="xl:w-W500 xl:h-H500 lg:w-W400 lg:h-H400 bg-lightgreen rounded-full z-0">
        <HotSpicyFoodSVG />
        <div className="relative xl:bottom-66 xl:right-10.5 lg:bottom-52 lg:right-3 lg:h-H500 xl:w-W700 lg:w-W400">
          <img src={Image1} alt="image1" className="z-0" />
        </div>
        {/* 2 CARDS START */}
        <div className="flex relative xl:bottom-80 lg:bottom-80 xl:right-25 lg:right-20">
          <Card
            className="bg-white xl:rounded-3xl lg:rounded-2xl shadow-custom1 xl:me-10 lg:me-5 w-full h-full"
            cardContent={
              <div className="flex items-center xl:w-66 lg:w-54">
                <img
                  src={FoodImage}
                  alt="food1"
                  className="xl:w-20 xl:h-20 lg:w-14 lg:h-14 object-left object-cover rounded-2xl"
                />

                <div className="px-4">
                  <h1 className="xl:text-xl lg:text-base font-semibold xl:mb-1 lg:mb-0.5">
                    Spicy Noodles
                  </h1>

                  <div className="flex xl:mb-1 lg:mb-0.5">
                    {Array(3)
                      .fill(true)
                      .map((item, index) => (
                        <STARS key={index} />
                      ))}

                    {Array(2)
                      .fill(true)
                      .map((item, index) => (
                        <BlankStars key={index} />
                      ))}
                  </div>

                  <div className="flex items-center text-red text-sm font-semibold">
                    $
                    <p className="xl:text-lg lg:text-sm text-black font-semibold">
                      18.00
                    </p>
                  </div>
                </div>
              </div>
            }
          />

          <Card
            className="bg-white xl:rounded-3xl lg:rounded-2xl shadow-custom1 me-10 w-full h-full"
            cardContent={
              <div className="flex items-center xl:w-66 lg:w-54">
                <img
                  src={FoodImage2}
                  alt="food1"
                  className="xl:w-20 xl:h-20 lg:w-14 lg:h-14 object-cover rounded-2xl"
                />

                <div className="px-4">
                  <h1 className="xl:text-xl lg:text-base font-semibold xl:mb-1 lg:mb-0.5">
                    Vegetarian Salad
                  </h1>

                  <div className="flex xl:mb-1 lg:mb-0.5">
                    {Array(4)
                      .fill(true)
                      .map((item, index) => (
                        <STARS key={index} />
                      ))}

                    {Array(1)
                      .fill(true)
                      .map((item, index) => (
                        <BlankStars key={index} />
                      ))}
                  </div>

                  <div className="flex items-center text-red text-sm font-semibold">
                    $
                    <p className="xl:text-lg lg:text-sm text-black font-semibold">
                      18.00
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        {/* 2 CARDS END */}
      </div>
    </section>
  );
}
