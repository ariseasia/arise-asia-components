import RecapSection from "../components/RecapSection";

import overlaySrc from "../assets/tiling.png";

export default {
  title: "Recap Section",
  component: RecapSection,
};

export const Default = {
  args: {
    overlaySrc: overlaySrc,
    backgroundColor: "bg-pink-200",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio odio. Mauris tincidunt tortor at ullamcorper hendrerit. In a purus purus. Curabitur pulvinar eleifend dapibus. Pellentesque quis tincidunt felis, vitae viverra odio. Vestibulum quis erat lacus. Quisque ornare orci vel sapien vestibulum ultricies. Praesent nec augue et est lobortis eleifend. Sed at venenatis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et congue felis. Curabitur sit amet pretium eros. Donec at lorem orci. Curabitur egestas enim purus, quis laoreet justo aliquam vitae.

Vestibulum a est nisi. In in ex vitae neque egestas finibus eget eu urna. Integer ac dignissim metus, tincidunt aliquet justo. Mauris varius sodales lectus, eu pretium nisi dapibus non. Sed quis consequat quam. Nullam sodales dapibus convallis. Integer at consequat nisi. Vivamus nec magna condimentum nunc consectetur scelerisque. Aenean ac quam vel turpis porta euismod.`,
    quantityColor: "text-cyan-700",
    statistics: [
      {
        quantity: "2",
        quantifier: "Days",
      },
      {
        quantity: "6",
        quantifier: "Speakers",
      },
      {
        quantity: "700+",
        quantifier: "Participants",
      },
    ],
    videoSrc:
      "https://drive.google.com/file/d/19MXfja5TRSUH_1wXcsevFqXZPzKpEv7i/preview",
  },
};

export const NoStatistics = {
  args: {
    backgroundColor: "bg-purple-200",
    overlaySrc: overlaySrc,
    videoSrc:
      "https://drive.google.com/file/d/19MXfja5TRSUH_1wXcsevFqXZPzKpEv7i/preview",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio odio. Mauris tincidunt tortor at ullamcorper hendrerit. In a purus purus. Curabitur pulvinar eleifend dapibus. Pellentesque quis tincidunt felis, vitae viverra odio. Vestibulum quis erat lacus. Quisque ornare orci vel sapien vestibulum ultricies. Praesent nec augue et est lobortis eleifend. Sed at venenatis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et congue felis. Curabitur sit amet pretium eros. Donec at lorem orci. Curabitur egestas enim purus, quis laoreet justo aliquam vitae.`,
  },
};

export const NoVideo = {
  args: {
    backgroundColor: "bg-orange-300",
    overlaySrc: overlaySrc,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio odio. Mauris tincidunt tortor at ullamcorper hendrerit. In a purus purus. Curabitur pulvinar eleifend dapibus. Pellentesque quis tincidunt felis, vitae viverra odio. Vestibulum quis erat lacus. Quisque ornare orci vel sapien vestibulum ultricies. Praesent nec augue et est lobortis eleifend. Sed at venenatis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et congue felis. Curabitur sit amet pretium eros. Donec at lorem orci. Curabitur egestas enim purus, quis laoreet justo aliquam vitae.`,
    statistics: [
      {
        quantity: "4",
        quantifier: "Days",
      },
      {
        quantity: "13",
        quantifier: "Speakers",
      },
      {
        quantity: "588",
        quantifier: "Participants",
      },
    ],
  },
};

export const OnlyText = {
  args: {
    backgroundColor: "bg-red-200",
    description: `### This is a H3

#### This is a H4

This is **bolded** and *italicized* text.

> Here's a blockquote.

1. First item
2. Second item
3. Third item

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio odio. Mauris tincidunt tortor at ullamcorper hendrerit. In a purus purus. Curabitur pulvinar eleifend dapibus. Pellentesque quis tincidunt felis, vitae viverra odio. Vestibulum quis erat lacus. Quisque ornare orci vel sapien vestibulum ultricies. Praesent nec augue et est lobortis eleifend. Sed at venenatis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et congue felis. Curabitur sit amet pretium eros. Donec at lorem orci. Curabitur egestas enim purus, quis laoreet justo aliquam vitae.`,
  },
};
