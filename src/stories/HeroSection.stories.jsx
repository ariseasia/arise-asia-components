import HeroSection from "../components/HeroSection";

import backgroundSrc from "../assets/background.jpg";

export default {
  title: "Hero Section",
  component: HeroSection,
};

export const PreConference = {
  args: {
    backgroundSrc: backgroundSrc,
    overlayPrimaryFillColor: "fill-purple-300",
    overlaySecondaryFillColor: "fill-yellow-300",
    overlayTertiaryFillColor: "fill-orange-300",
    conferenceStatus: "pre-conference",
    taglineText: '"Finishing the Task" - One Life, One Challenge',
    sloganTextColor: "text-orange-500",
    sloganText: "Go where there is no Gospel",
    title: "Arise Indonesia",
    missionText:
      "To challenge the next generation to take the gospel throughout Asia and to the world.",
    eventDetailsBgColor: "bg-amber-700",
    eventDetailsText: "Bali, Indonesia • October 15-16, 2024",
    verse:
      '"...and thus I make it my ambition to preach the Gospel, not where Christ has already been named..."',
    verseReference: "Romans 15:20a",
    verseReferenceColor: "text-orange-500",
  },
};

export const PostConference = {
  args: {
    backgroundSrc: backgroundSrc,
    overlayPrimaryFillColor: "fill-red-300",
    overlaySecondaryFillColor: "fill-green-300",
    overlayTertiaryFillColor: "fill-orange-300",
    conferenceStatus: "post-conference",
    taglineText: "One Life, One Challenge",
    sloganTextColor: "text-pink-700",
    sloganText: "Go where there is no Gospel",
    title: "Arise Hong Kong",
    missionText: "Stay Alive, Go Beyond",
    eventDetailsBgColor: "bg-pink-700",
    eventDetailsText: "Hong Kong • July 20-21, 2024",
    verse: '"Get up and eat, for the journey is too much for you."',
    verseReference: "1 Kings 19:7",
    verseReferenceColor: "text-green-700",
  },
};
