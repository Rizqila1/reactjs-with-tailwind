import CardStoryandServices from "./materials/CardStoryandServices";

import CateringLogoSVG from "../../utils/svg/cateringLogo";
import FastDeliveryLogoSVG from "../../utils/svg/fastDeliveryLogo";
import GiftCardsLogoSVG from "../../utils/svg/giftCardsLogo";
import OnlineOrderingLogoSVG from "../../utils/svg/onlineOrderingLogo";

export default function RightStoryServicesSection() {
  return (
    <div className="col-span-1">
      <div className="flex justify-end">
        <CardStoryandServices
          svg={<CateringLogoSVG className="my-5" />}
          title={"CATERING"}
          text={"Delight your guests with our flavors and presentation"}
          className={"me-10"}
        />

        <CardStoryandServices
          svg={<FastDeliveryLogoSVG className="my-5" />}
          title={"FAST DELIVERY"}
          text={"We deliver your order promptly to your door"}
          className={"mb-10"}
        />
      </div>

      <div className="flex justify-end">
        <CardStoryandServices
          svg={<OnlineOrderingLogoSVG className="my-5" />}
          title={"ONLINE ORDERING"}
          text={"Explore menu & order with ease using our Online Ordering "}
          className={"me-10"}
        />

        <CardStoryandServices
          svg={<GiftCardsLogoSVG className="my-5" />}
          title={"GIFT CARDS"}
          text={"Give the gift of exceptional dining with Foodi Gift Cards"}
        />
      </div>
    </div>
  );
}
