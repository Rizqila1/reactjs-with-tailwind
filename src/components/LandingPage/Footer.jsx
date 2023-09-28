import FacebookLogoSVG from "../../utils/svg/facebookLogo";
import InstagramLogoSVG from "../../utils/svg/instagramLogo";
import TwitterLogoSVG from "../../utils/svg/twitterLogo";
import YoutubeLogoSVG from "../../utils/svg/youtubeLogo";

export default function Footer() {
  return (
    <section className="w-full bg-green-100 flex items-center justify-between py-3">
      <div className="flex items-start">
        <div className="bg-lightgreen w-14 h-14 rounded-full flex items-center justify-center mx-6">
          <FacebookLogoSVG />
        </div>

        <div className="bg-darkgreen w-14 h-14 rounded-full flex items-center justify-center">
          <InstagramLogoSVG />
        </div>

        <div className="bg-darkgreen w-14 h-14 rounded-full flex items-center justify-center mx-6">
          <TwitterLogoSVG />
        </div>

        <div className="bg-darkgreen w-14 h-14 rounded-full flex items-center justify-center">
          <YoutubeLogoSVG />
        </div>
      </div>

      <div className="flex">
        <h4 className="text-xl text-[#555] font-medium me-5">
          Copyright &copy; 2023 Dscode | All rights reserved
        </h4>
      </div>
    </section>
  );
}
