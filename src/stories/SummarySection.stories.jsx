import SummarySection from "../components/SummarySection";

export default {
  title: "Summary Section",
  component: SummarySection,
};

export const Default = {
  args: {
    gridClassName: "lg:grid-rows-2 lg:grid-flow-col gap-4",
    bgColor: "bg-pink-600",
    summaryList: [
      {
        quantity: "13",
        quantifier: "countries",
      },
      {
        quantity: "20+",
        quantifier: "churches",
      },
      {
        quantity: "4",
        quantifier: "speakers",
      },
      {
        quantity: "50+",
        quantifier: "cities",
      },
      {
        quantity: "17",
        quantifier: "schools",
      },
      {
        quantity: "3",
        quantifier: "workshops",
      },
    ],
  },
};

export const Has123Go = {
  args: {
    gridClassName: "lg:grid-rows-2 lg:grid-flow-col gap-4",
    bgColor: "bg-blue-600",
    has123Go: true,
    goBgColor: "bg-blue-200",
    goDescription: "Responding to",
    summaryList: [
      {
        quantity: "184",
        quantifier: "committed to praying",
        bgColor: "bg-blue-500",
        textColor: "text-white",
      },
      {
        quantity: "42",
        quantifier: "commissioned to go",
        bgColor: "bg-blue-500",
        textColor: "text-white",
      },
      {
        quantity: "120+",
        quantifier: "convicted to invest",
        bgColor: "bg-blue-500",
        textColor: "text-white",
      },
    ],
  },
};
