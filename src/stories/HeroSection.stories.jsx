import HeroSection from "../components/HeroSection";

import backgroundSrc from "../assets/background.jpg";
import overlaySrc from "../assets/overlay.svg";

export default {
  title: "HeroSection",
  component: HeroSection,
};

export const PreConference = {
  args: {
    backgroundSrc: backgroundSrc,
    overlaySrc: overlaySrc,
    conferenceStatus: "pre-conference",
    taglineText: '"Finishing the Task" - One Life, One Challenge',
    sloganText: "Go where there is no Gospel",
    title: "Arise Indonesia",
    missionText:
      "To inspire the next generation to take the gospel throughout Asia and to the world.",
    primaryBgColor: "bg-amber-700",
    eventDetailsText: "Bali, Indonesia • October 15-16, 2024",
    verse:
      '"...and thus I make it my ambition to preach the Gospel, not where Christ has already been named..."',
    verseReference: "Romans 15:20a",
  },
};

export const PostConference = {
  args: {
    backgroundSrc: backgroundSrc,
    overlaySrc: overlaySrc,
    conferenceStatus: "post-conference",
    taglineText: "One Life, One Challenge",
    sloganText: "Go where there is no Gospel",
    title: "Arise Hong Kong",
    missionText: "Stay Alive, Go Beyond",
    primaryBgColor: "bg-pink-700",
    eventDetailsText: "Hong Kong • July 20-21, 2024",
    verse: '"Get up and eat, for the journey is too much for you."',
    verseReference: "1 Kings 19:7",
  },
};
