import Image1 from "../../assets/images/chef-image.png";

export default function LeftTestimonialSection() {
  return (
    <div className="col-span-1">
      <div className="flex items-end bg-lightgreen rounded-custom2 xl:w-[492px] xl:h-[362px] xl:mt-60">
        <img src={Image1} alt="chef" className="xl:w-[506px] xl:h-[644px]" />
      </div>
    </div>
  );
}
