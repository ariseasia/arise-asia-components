import PropTypes from "prop-types";

const HeroSection = ({
  className,
  backgroundSrc,
  overlaySrc,
  conferenceStatus,
  taglineText,
  sloganText,
  title,
  missionText,
  primaryBgColor,
  eventDetailsText,
  verse,
  verseReference,
}) => {
  return (
    <div className={className}>
      <div className="relative">
        <img
          alt="Background image"
          className="object-cover absolute inset-0 w-full h-full -z-10 rounded-bl-[5rem] md:rounded-bl-[10rem] xl:rounded-bl-[15rem] grayscale"
          src={backgroundSrc}
        />
        <img
          alt="Overlay image"
          className="object-cover absolute inset-0 w-full h-full -z-10 rounded-bl-[5rem] md:rounded-bl-[10rem] xl:rounded-bl-[15rem]"
          src={overlaySrc}
        />
        <div className="flex flex-col gap-y-4 items-center px-4 pt-36 pb-10 text-center sm:pb-20 md:pt-44">
          {conferenceStatus == "post-conference" && (
            <p className="py-1 px-4 uppercase rounded-xl border-2 border-black w-fit text-h5">
              Recap
            </p>
          )}
          <p className="uppercase text-h5">{taglineText}</p>
          <p className="text-orange-500 text-h5">{sloganText}</p>
          <h1 className="mx-10 uppercase text-h1">{title}</h1>
          <p className="-mt-4 max-w-lg italic font-bold sm:-mt-6 sm:text-lg md:text-xl">
            {missionText}
          </p>
          <p
            className={`py-2 px-6 font-bold text-white rounded-xl sm:mt-6 w-fit text-p ${primaryBgColor}`}
          >
            {eventDetailsText}
          </p>
        </div>
      </div>
      <p className="px-4 pt-10 mx-auto max-w-lg text-lg italic text-center">
        {verse}
      </p>
      <p className="px-4 pb-10 text-lg italic font-bold text-center text-orange-500">
        {verseReference}
      </p>
    </div>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
  backgroundSrc: PropTypes.string,
  overlaySrc: PropTypes.string,
  conferenceStatus: PropTypes.oneOf(["pre-conference", "post-conference"]),
  taglineText: PropTypes.string,
  sloganText: PropTypes.string,
  title: PropTypes.string,
  missionText: PropTypes.string,
  primaryBgColor: PropTypes.string,
  eventDetailsText: PropTypes.string,
  verse: PropTypes.string,
  verseReference: PropTypes.string,
};

export default HeroSection;
