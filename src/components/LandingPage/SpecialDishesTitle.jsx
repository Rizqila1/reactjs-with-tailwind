import Button from "../Button";
import RightedArrow from "../../assets/images/right-arrow.png";

export default function SpecialDishesTitle() {
  return (
    <>
      <h3 className="text-red tracking-[.25em] font-bold text-base mb-3 font-Inter">
        SPECIAL DISHES
      </h3>

      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-semibold text-5xl leading-[65px]">
          Standout Dishes <br />
          From Our Menu
        </h1>

        <div className="flex">
          <Button
            variant="secondary"
            btnText={
              <svg
                className="block m-auto xl:w-6 xl:h-7 lg:w-5 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
              >
                <path
                  d="M9.76453 2L2.00003 9.7645"
                  stroke="#6F6E6E"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M9.76453 18L2.00003 10.2355"
                  stroke="#6F6E6E"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            }
            className="xl:w-16 xl:h-16 lg:w-14 lg:h-14 text-center drop-shadow-xl me-12"
          />

          <Button
            variant="lightgreen"
            btnText={<img src={RightedArrow} alt="arrow" width="16" />}
            className="xl:w-16 xl:h-16 lg:w-14 lg:h-14 flex justify-center items-center drop-shadow-xl"
          />
        </div>
      </div>
    </>
  );
}
