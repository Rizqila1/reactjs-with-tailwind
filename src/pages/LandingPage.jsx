import Navbar from "../components/Navbar";
import CardPopularCategories from "../components/LandingPage/materials/CardPopularCategories";
import LeftSectionLandingPage from "../components/LandingPage/LeftSection";
import RightSectionLandingPage from "../components/LandingPage/RightSection";
import SpecialDishesTitle from "../components/LandingPage/SpecialDishesTitle";
import SpecialDishesContent from "../components/LandingPage/SpecialDishesContent";
import LeftTestimonialSection from "../components/LandingPage/LeftTestimonialSection";
import RightTestimonialSection from "../components/LandingPage/RightTestimonialSection";
import LeftStoryandServicesSection from "../components/LandingPage/LeftStoryandServicesSection";
import RightStoryServicesSection from "../components/LandingPage/RightStoryandServicesSection";
import EndContent from "../components/LandingPage/EndContent";
import Footer from "../components/LandingPage/Footer";

import Image1 from "../assets/images/popular-categories1png.png";
import Image2 from "../assets/images/popular-categories2.png";
import Image3 from "../assets/images/popular-categories3.png";
import Image4 from "../assets/images/popular-categories-4.png";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="my-40 xl:px-10 lg:px-10 grid grid-cols-2">
        <LeftSectionLandingPage />
        <RightSectionLandingPage />
      </section>

      <section className="flex flex-col justify-center items-center mb-20">
        <h3 className="text-red tracking-[.25em] font-bold text-base mb-3 font-Inter">
          CUSTOMER FAVORITES
        </h3>

        <h1 className="font-Inter font-semibold text-5xl">
          Popular Categories
        </h1>
      </section>

      {/* POPULAR CATEGORIES SECTION */}
      <section className="mb-48">
        <CardPopularCategories
          img={Image1}
          title={"Main Dish"}
          text={"(82 Dishes)"}
        />

        <CardPopularCategories
          img={Image2}
          title={"Breakfast"}
          text={"(12 Dishes)"}
          imgCSS={"w-[110px]"}
          className={"mx-9"}
        />

        <CardPopularCategories
          img={Image3}
          title={"Dessert"}
          text={"(48 Dishes)"}
          imgCSS={"w-[120px]"}
          className={"me-9"}
        />

        <CardPopularCategories
          img={Image4}
          title={"Browse All"}
          text={"(255 Items)"}
          imgCSS={"w-[85px]"}
        />
      </section>

      <section className="mb-12">
        <SpecialDishesTitle />
      </section>

      <section className="mb-60">
        <SpecialDishesContent />
      </section>

      <section className="grid grid-cols-2 items-center mb-72">
        <LeftTestimonialSection />
        <RightTestimonialSection />
      </section>

      <section className="grid grid-cols-2 mb-60 justify-between items-center">
        <LeftStoryandServicesSection />
        <RightStoryServicesSection />
      </section>

      <section className="grid grid-cols-4 place-items-center items-start mb-28">
        <EndContent />
      </section>

      {/* FOOTER*/}
      <section>
        <Footer />
      </section>
    </>
  );
}
