import "../src/index.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        xsMin: {
          name: "Tailwind XS (375px)",
          styles: {
            width: "375px",
            height: "100%",
          },
        },
        xsMax: {
          name: "Tailwind XS (639px)",
          styles: {
            width: "639px",
            height: "100%",
          },
        },
        smMin: {
          name: "Tailwind SM (640px)",
          styles: {
            width: "640px",
            height: "100%",
          },
        },
        smMax: {
          name: "Tailwind SM (767px)",
          styles: {
            width: "767px",
            height: "100%",
          },
        },
        mdMin: {
          name: "Tailwind MD (768px)",
          styles: {
            width: "768px",
            height: "100%",
          },
        },
        mdMax: {
          name: "Tailwind MD (1023px)",
          styles: {
            width: "1023px",
            height: "100%",
          },
        },
        lgMin: {
          name: "Tailwind LG (1024px)",
          styles: {
            width: "1024px",
            height: "100%",
          },
        },
        lgMax: {
          name: "Tailwind LG (1279px)",
          styles: {
            width: "1279px",
            height: "100%",
          },
        },
        xlMin: {
          name: "Tailwind XL (1280px)",
          styles: {
            width: "1280px",
            height: "100%",
          },
        },
        xlMax: {
          name: "Tailwind XL (1535px)",
          styles: {
            width: "1535px",
            height: "100%",
          },
        },
        "2xlMin": {
          name: "Tailwind 2XL (1536px)",
          styles: {
            width: "1536px",
            height: "100%",
          },
        },
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
