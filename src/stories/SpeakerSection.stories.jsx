import davidRoSrc from "../assets/speakers/David-Ro.png";
import sethKimSrc from "../assets/speakers/Seth-Kim.png";
import SpeakerSection from "../components/SpeakerSection";

export default {
  title: "Speaker Section",
  component: SpeakerSection,
};

export const Default = {
  args: {
    bgColor: "bg-orange-400",
    hoverBgColor: "hover:bg-orange-600",
    nameTextColor: "text-orange-400",
    speakersData: [
      {
        image: davidRoSrc,
        name: "Rev. Dr. David L. Ro",
        titles: ["Co-founder and Executive Director", "Arise Asia"],
      },
      {
        image: sethKimSrc,
        name: "Rev. Dr. Seth Kim",
        titles: [
          "Co-founder and Vice President, Arise Asia &",
          "Pastor, Harvest Mission Community Church",
        ],
      },
      {
        image: davidRoSrc,
        name: "Rev. Dr. David L. Ro",
        titles: ["Co-founder and Executive Director", "Arise Asia"],
      },
      {
        image: sethKimSrc,
        name: "Rev. Dr. Seth Kim",
        titles: [
          "Co-founder and Vice President, Arise Asia &",
          "Pastor, Harvest Mission Community Church",
        ],
      },
      {
        image: davidRoSrc,
        name: "Rev. Dr. David L. Ro",
        titles: ["Co-founder and Executive Director", "Arise Asia"],
      },
      {
        image: sethKimSrc,
        name: "Rev. Dr. Seth Kim",
        titles: [
          "Co-founder and Vice President, Arise Asia &",
          "Pastor, Harvest Mission Community Church",
        ],
      },
    ],
  },
};
