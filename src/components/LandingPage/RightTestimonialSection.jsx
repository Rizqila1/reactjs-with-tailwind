import STAR from "../../utils/svg/starYellow";
import PersonImage1 from "../../assets/images/person1.png";
import PersonImage2 from "../../assets/images/person2.png";
import PersonImage3 from "../../assets/images/person3.png";

export default function RightTestimonialSection() {
  return (
    <div className="col-span-1">
      <h3 className="text-red tracking-[.25em] font-bold text-base mb-14 font-Inter">
        TESTIMONIALS
      </h3>

      <h1 className="font-Inter font-semibold text-5xl leading-[65px] mb-7">
        What Our Customers <br />
        Say About Us
      </h1>

      <p className="text-[#555] text-lg leading-[41px] xl:mb-16 font-medium">
        “I had the pleasure of dining at Foodi last night, and I'm still raving
        about the experience! The attention to detail in presentation and
        service was impeccable”
      </p>

      <div className="flex">
        <section className="flex items-center me-6">
          <img
            src={PersonImage1}
            alt="popular-categories"
            className={`bg-white rounded-full`}
          />

          <img
            src={PersonImage2}
            alt="popular-categories"
            className={`bg-white rounded-full mx-3`}
          />

          <img
            src={PersonImage3}
            alt="popular-categories"
            className={`bg-white rounded-full`}
          />
        </section>

        <div className="flex flex-col">
          <h4 className="font-semibold text-xl mb-2">Customer Feedback</h4>
          <div className="flex items-center">
            <STAR />
            <p className="text-xl font-semibold ms-2">
              4.9 <span className="text-[#555] ms-2">(18.6K Reviews)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
