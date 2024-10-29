import SummarySection from "../components/SummarySection";

export default {
  title: "Summary Section",
  component: SummarySection,
};

export const Default = {
  args: {
    gridClassName: "lg:grid-rows-2 lg:grid-flow-col gap-4",
    summaryList: [
      {
        quantity: "13",
        quantifier: "countries",
        bgColor: "bg-pink-600",
        textColor: "text-white",
      },
      {
        quantity: "20+",
        quantifier: "churches",
        bgColor: "bg-pink-600",
        textColor: "text-white",
      },
      {
        quantity: "4",
        quantifier: "speakers",
        bgColor: "bg-pink-600",
        textColor: "text-white",
      },
      {
        quantity: "50+",
        quantifier: "cities",
        bgColor: "bg-pink-600",
        textColor: "text-white",
      },
      {
        quantity: "17",
        quantifier: "schools",
        bgColor: "bg-pink-600",
        textColor: "text-white",
      },
      {
        quantity: "3",
        quantifier: "workshops",
        bgColor: "bg-pink-600",
        textColor: "text-white",
      },
      {
        description: "Responding to",
        bgColor: "bg-blue-200",
        textColor: "text-black",
      },
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
