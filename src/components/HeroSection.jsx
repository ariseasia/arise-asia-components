import PropTypes from "prop-types";

const HeroSection = ({
  className,
  backgroundSrc,
  overlayPrimaryFillColor,
  overlaySecondaryFillColor,
  overlayTertiaryFillColor,
  conferenceStatus,
  taglineText,
  sloganTextColor,
  sloganText,
  title,
  missionText,
  eventDetailsBgColor,
  eventDetailsText,
  verse,
  verseReferenceColor,
  verseReference,
}) => {
  return (
    <div className={className}>
      <div className="relative">
        <div className="overflow-hidden absolute inset-0 -z-10 rounded-bl-[5rem] md:rounded-bl-[10rem] xl:rounded-bl-[15rem]">
          <img
            alt="Background image"
            className="object-cover absolute opacity-75 size-full grayscale"
            src={backgroundSrc}
          />
          <BaseOverlay
            primaryFillColor={overlayPrimaryFillColor}
            secondaryFillColor={overlaySecondaryFillColor}
            tertiaryFillColor={overlayTertiaryFillColor}
          />
        </div>
        <div className="flex flex-col gap-y-4 items-center px-4 pt-36 pb-10 text-center sm:pb-20 md:pt-44">
          {conferenceStatus == "post-conference" && (
            <p className="py-1 px-4 uppercase rounded-xl border-2 border-black w-fit text-h5">
              Recap
            </p>
          )}
          <p className="uppercase text-h5">{taglineText}</p>
          <p className={`text-h5 ${sloganTextColor}`}>{sloganText}</p>
          <h1 className="mx-10 uppercase text-h1">{title}</h1>
          <p className="-mt-4 max-w-lg italic font-bold sm:-mt-6 sm:text-lg md:text-xl">
            {missionText}
          </p>
          <p
            className={`py-2 px-6 font-bold text-white rounded-xl sm:mt-6 w-fit text-p ${eventDetailsBgColor}`}
          >
            {eventDetailsText}
          </p>
        </div>
      </div>
      <p className="px-4 pt-10 mx-auto max-w-lg text-lg italic text-center">
        {verse}
      </p>
      <p
        className={`px-4 pb-10 text-lg italic font-bold text-center ${verseReferenceColor}`}
      >
        {verseReference}
      </p>
    </div>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
  backgroundSrc: PropTypes.string.isRequired,
  overlayPrimaryFillColor: PropTypes.string.isRequired,
  overlaySecondaryFillColor: PropTypes.string.isRequired,
  overlayTertiaryFillColor: PropTypes.string.isRequired,
  conferenceStatus: PropTypes.oneOf(["pre-conference", "post-conference"])
    .isRequired,
  taglineText: PropTypes.string.isRequired,
  sloganTextColor: PropTypes.string.isRequired,
  sloganText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  missionText: PropTypes.string.isRequired,
  eventDetailsBgColor: PropTypes.string.isRequired,
  eventDetailsText: PropTypes.string.isRequired,
  verse: PropTypes.string.isRequired,
  verseReferenceColor: PropTypes.string.isRequired,
  verseReference: PropTypes.string.isRequired,
};

const BaseOverlay = ({
  primaryFillColor,
  secondaryFillColor,
  tertiaryFillColor,
}) => {
  return (
    <svg
      className="absolute bg-white opacity-75 size-full"
      preserveAspectRatio="none"
      viewBox="0 0 14 7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter)">
        <g className={primaryFillColor}>
          <path d="M9 4 5 -1 -1 -1 -1 6 2 4Z" />
          <path d="M8 1 15 0 15 5 10 4 9 6 10 7 7 7 10 3 8 2Z" />
        </g>
        <g className={secondaryFillColor}>
          <circle cx="6" cy="6" r="2" />
          <path d="M8 0H14L10 1 9 3 6 3 6 1Z" />
          <rect width="3" height="4" x="2" y="4" transform="rotate(9)" />
        </g>
        <g className={tertiaryFillColor}>
          <path d="M10 6 15 5 16 8 11 8 10 6Z" />
          <path d="M3 6 3 2 5 6 5 8 4 6Z" />
        </g>
      </g>
      <defs>
        <filter id="filter">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>
    </svg>
  );
};

BaseOverlay.propTypes = {
  primaryFillColor: PropTypes.string.isRequired,
  secondaryFillColor: PropTypes.string.isRequired,
  tertiaryFillColor: PropTypes.string.isRequired,
};

export default HeroSection;
