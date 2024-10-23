import { ID, US } from "country-flag-icons/react/3x2";

import Navbar from "../components/Navbar";

export default {
  title: "Navbar",
  component: Navbar,
};

export const Default = {
  args: {
    sections: [
      {
        title: "Program",
        clickHandler: () => {alert("Program")},
      },
      {
        title: "Speakers",
        clickHandler: () => {alert("Speakers")},
      },
      {
        title: "About",
        clickHandler: () => {alert("About")},
      },
      {
        title: "Goals",
        clickHandler: () => {alert("Goals")},
      },
      {
        title: "Venue",
        clickHandler: () => {alert("Venue")},
      },
    ],
  },
};

export const WithTranslation = {
  args: {
    sections: [
      {
        title: "Recap",
        clickHandler: () => {alert("Recap")},
      },
      {
        title: "Moments",
        clickHandler: () => {alert("Moments")},
      },
      {
        title: "Speakers",
        clickHandler: () => {alert("Speakers")},
      },
      {
        title: "Summary",
        clickHandler: () => {alert("Summary")},
      },
    ],
    lngs: [
      {
        FlagIcon: US,
        title: "English",
        clickHandler: () => {alert("English")},
      },
      {
        FlagIcon: ID,
        title: "Indonesian",
        clickHandler: () => {alert("Indonesian")},
      },
    ],
  },
};
