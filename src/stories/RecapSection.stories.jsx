import RecapSection from "../components/RecapSection";

import bgPath from "../assets/recap-bg.png";

export default {
  title: "Recap Section",
  component: RecapSection,
};

export const Default = {
  args: {
    videoSrc:
      "https://drive.google.com/file/d/19MXfja5TRSUH_1wXcsevFqXZPzKpEv7i/preview",
    statistics: [
      {
        num: 4,
        quantifier: "Days",
      },
      {
        num: 13,
        quantifier: "Speakers",
      },
      {
        num: 588,
        quantifier: "Participants",
      },
    ],
    bgSrc: bgPath,
    description: `This is the first paragraph.
    
    This is the second paragraph.
    
    This is the third paragraph.`,
  },
};
