import RecapSection from "../components/RecapSection";

export default {
  title: "Recap Section",
  component: RecapSection,
};

export const Default = {
  args: {
    videoLink:
      "https://drive.google.com/file/d/19MXfja5TRSUH_1wXcsevFqXZPzKpEv7i/preview",
    statistics: [
      {
        num: 4,
        unit: "Days",
      },
      {
        num: 13,
        unit: "Speakers",
      },
      {
        num: 588,
        unit: "Participants",
      },
    ],
    bgPath: "/recap-bg.png",
    description: `This is the first paragraph.
    
    This is the second paragraph.
    
    This is the third paragraph.`,
  },
};
