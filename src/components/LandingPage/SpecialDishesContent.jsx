import CardSpecialDishes from "./materials/CardSpecialDishes";

import Image1 from "../../assets/images/special-categories1.png";
import Image2 from "../../assets/images/special-categories2.png";
import Image3 from "../../assets/images/special-categories3.png";

import STAR from "../../utils/svg/starYellow";

export default function SpecialDishesContent() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <CardSpecialDishes
          img={Image1}
          imgCSS={"w-[279px] h-[279px]"}
          title={"Fattoush salad"}
          text={
            <>
              <h3 className="text-[#555]">Description of the item</h3>

              <section className="flex justify-between items-center">
                <div className="flex items-center text-red text-md font-semibold">
                  $
                  <p className="xl:text-2xl lg:text-sm text-[#000000] font-semibold">
                    24.00
                  </p>
                </div>

                <div className="flex items-center leading-[70px]">
                  <STAR />
                  <p className="font-semibold lg:text-2xl xl:ms-2">4.9</p>
                </div>
              </section>
            </>
          }
        />

        <CardSpecialDishes
          img={Image2}
          imgCSS={"w-[279px] h-[279px]"}
          title={"Vegetable Salad"}
          className={"mx-10"}
          text={
            <>
              <h3 className="text-[#555]">Description of the item</h3>

              <section className="flex justify-between items-center">
                <div className="flex items-center text-red text-md font-semibold">
                  $
                  <p className="xl:text-2xl lg:text-sm text-[#000000] font-semibold">
                    26.00
                  </p>
                </div>

                <div className="flex items-center leading-[70px]">
                  <STAR />
                  <p className="font-semibold lg:text-2xl xl:ms-2">4.6</p>
                </div>
              </section>
            </>
          }
        />

        <CardSpecialDishes
          img={Image3}
          imgCSS={"w-[279px] h-[279px]"}
          title={"Egg Vegi Salad"}
          text={
            <>
              <h3 className="text-[#555]">Description of the item</h3>

              <section className="flex justify-between items-center">
                <div className="flex items-center text-red text-md font-semibold">
                  $
                  <p className="xl:text-2xl lg:text-sm text-[#000000] font-semibold">
                    18.00
                  </p>
                </div>

                <div className="flex items-center leading-[70px]">
                  <STAR />
                  <p className="font-semibold lg:text-2xl xl:ms-2">4.5</p>
                </div>
              </section>
            </>
          }
        />
      </div>
    </div>
  );
}
