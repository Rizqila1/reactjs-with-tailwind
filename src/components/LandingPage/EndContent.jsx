import FoodiLogo from "../FoodiLogo";

export default function EndContent() {
  return (
    <>
      <div className="col-span-1">
        <FoodiLogo className="mb-8" />
        <div className="w-[302px] font-semibold text-lg text-[#555] leading-[32px]">
          Savor the artistry where every dish is a culinary masterpiece
        </div>
      </div>

      <div className="col-span-1">
        <h3 className="font-semibold text-xl mb-8">Useful Links</h3>
        <h5 className="font-medium text-lg text-[#555]">About us</h5>
        <h5 className="font-medium text-lg text-[#555] my-2">Events</h5>
        <h5 className="font-medium text-lg text-[#555]">Blogs</h5>
        <h5 className="font-medium text-lg text-[#555] mt-2">FAQ</h5>
      </div>

      <div className="col-span-1">
        <h3 className="font-semibold text-xl mb-8">Main Menu</h3>
        <h5 className="font-medium text-lg text-[#555]">Home</h5>
        <h5 className="font-medium text-lg text-[#555] my-2">Offers</h5>
        <h5 className="font-medium text-lg text-[#555]">Menus</h5>
        <h5 className="font-medium text-lg text-[#555] mt-2">Reservation</h5>
      </div>

      <div className="col-span-1">
        <h3 className="font-semibold text-xl mb-8">Contact Us</h3>
        <h5 className="font-medium text-lg text-[#555]">example@gmail.com</h5>
        <h5 className="font-medium text-lg text-[#555] my-2">
          +64 958 248 966
        </h5>
        <h5 className="font-medium text-lg text-[#555]">Social Media</h5>
      </div>
    </>
  );
}
