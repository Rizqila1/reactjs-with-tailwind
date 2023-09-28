import Button from "../Button";

export default function LeftSectionLandingPage() {
  return (
    <section className="xl:col-span-1 md:col-span-2">
      <div className="mb-14 xl:text-5xl lg:text-5xl font-Inter font-extrabold">
        <h1 className="leading-[5rem]">
          Dive Into Delights <br /> of Delectable{" "}
          <span className="text-lightgreen">Food</span>
        </h1>
      </div>

      <div className="mb-20">
        <h1 className="text-[#555] xl:text-2xl lg:text-lg xl:leading-[41px] xl:mb-16 font-medium mb-12">
          Where Each Plate Weaves a Story of Culinary <br /> Mastery and
          Passionate Craftsmanship
        </h1>
      </div>

      <Button
        btnText={"Order Now"}
        className="xl:w-52 xl:h-16 lg:w-40 lg:h-12 text-white font-semibold xl:text-2xl lg:text-xl"
      />
      <span className="xl:mx-8 lg:mx-4 w-52 h-16 font-semibold xl:text-2xl lg:text-xl">
        Watch Video
      </span>
      <span>
        <Button
          variant="white"
          btnText={
            <svg
              className="block m-auto xl:w-6 xl:h-7 lg:w-5 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 28"
              fill="none"
            >
              <path
                d="M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.49999 26.9904C2.49999 28.1451 -1.34201e-06 26.7017 -1.24107e-06 24.3923L-3.32543e-07 3.60769C-2.31596e-07 1.29829 2.5 -0.145083 4.5 1.00962L22.5 11.4019Z"
                fill="#1E1E1E"
              />
            </svg>
          }
          className="xl:w-16 xl:h-16 lg:w-14 lg:h-14 text-center drop-shadow-xl"
        />
      </span>
    </section>
  );
}
