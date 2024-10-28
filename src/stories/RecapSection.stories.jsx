import RecapSection from "../components/RecapSection";

import bgPath from "../assets/recap-bg.png";

export default {
  title: "Recap Section",
  component: RecapSection,
};

export const Default = {
  args: {
    bgSrc: bgPath,
    description: `This is the first paragraph.
    
    This is the second paragraph.
    
    This is the third paragraph.`,
    quantityColor: "text-purple-400",
    statistics: [
      {
        quantity: 4,
        quantifier: "Days",
      },
      {
        quantity: 13,
        quantifier: "Speakers",
      },
      {
        quantity: 588,
        quantifier: "Participants",
      },
    ],
    videoSrc:
      "https://drive.google.com/file/d/19MXfja5TRSUH_1wXcsevFqXZPzKpEv7i/preview",
  },
};
