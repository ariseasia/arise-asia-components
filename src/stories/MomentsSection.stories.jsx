import MomentsSection from "../components/MomentsSection";

export default {
  title: "Moments Section",
  component: MomentsSection,
};

export const Default = {
  args: {
    bgColor: "bg-purple-500",
    hoverBgColor: "hover:bg-purple-700",
    textColor: "text-white",
    moments: [
      {
        day: "Day 1",
        title: "Fellowship Night",
        description:
          "A lively evening of fellowship, performances, and snacks, bringing people together in the hotel lounge",
        image:
          "https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        day: "Day 1",
        title: "Afternoon Panel",
        description:
          "Panelists shared their perspectives on key justice challenges in the world today, focusing on their impact in global missions",
        image:
          "https://images.unsplash.com/photo-1607969892192-8aa9fe65ee26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
      },
      {
        day: "Day 2",
        title: "Missions Booths",
        description:
          "Missions partners and organizations showcased their ministries in booths surrounding the main hall",
        image:
          "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        day: "Day 2",
        title: "Innovation Lab",
        description:
          "Participants collaborated with their teams during the Innovation Lab, a hackathon for pitching innovative ideas for global missions",
        image:
          "https://images.unsplash.com/photo-1508829040592-72f179f8a73f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
};
