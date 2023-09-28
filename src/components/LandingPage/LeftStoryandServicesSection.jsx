import Button from "../Button";

export default function LeftStoryandServicesSection() {
  return (
    <div className="col-span-1">
      <h3 className="text-red tracking-[.25em] font-bold text-base mb-12 font-Inter">
        OUR STORY & SERVICES
      </h3>

      <h1 className="font-Inter font-semibold text-5xl leading-[65px] mb-12">
        Our Culinary Journey <br /> And Services
      </h1>

      <p className="text-[#555] text-lg leading-[41px] xl:mb-16 font-medium mb-12">
        Rooted in passion, we curate unforgettable dining experiences and offer
        exceptional services, blending culinary artistry with warm hospitality.
      </p>

      <Button
        btnText={"Explore"}
        className="xl:w-52 xl:h-16 lg:w-40 lg:h-12 text-white font-semibold xl:text-2xl lg:text-xl"
      />
    </div>
  );
}
