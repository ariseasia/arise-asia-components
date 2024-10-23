import LinksSection from "../components/LinksSection";

export default {
  title: "Links Section",
  component: LinksSection,
};

export const Default = {
  args: {
    className: "mx-10 lg:mx-52 pb-20",
    linksList: [
      {
        title: "Praise Report",
        target: "https://www.instagram.com/ariseindonesia",
      },
      {
        title: "Instagram",
        target: "https://www.instagram.com/ariseindonesia",
      },
      { title: "Facebook", target: "https://www.instagram.com/ariseindonesia" },
      { title: "Youtube", target: "https://www.instagram.com/ariseindonesia" },
    ],
  },
};
