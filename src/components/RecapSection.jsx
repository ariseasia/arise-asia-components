import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const RecapSection = ({
  className,
  backgroundColor,
  overlaySrc,
  quantityColor,
  statistics,
  videoSrc,
  description,
}) => {
  return (
    <div className={className}>
      <h2 className="pb-10 uppercase text-h3">The Recap</h2>
      <div className="flex flex-col gap-4 justify-center items-center mb-4 lg:flex-row-reverse lg:items-end">
        {statistics && (
          <div className="text-h4">
            {statistics.map(({ quantity, quantifier }) => (
              <p key={quantifier}>
                <span className={quantityColor}>{quantity}</span> {quantifier}
              </p>
            ))}
          </div>
        )}
        {videoSrc && (
          <iframe
            allowFullScreen
            className="w-full max-w-lg rounded-xl aspect-video"
            src={videoSrc}
            title="Video recap"
          />
        )}
      </div>
      <div
        className={`relative py-6 px-10 mx-auto sm:py-8 sm:px-12 w-fit [clip-path:polygon(0_0,_0_92%,_13%_100%,_100%_100%,_100%_0)] sm:[clip-path:polygon(0_0,_0_90%,_10%_100%,_100%_100%,_100%_0)] ${backgroundColor}`}
      >
        <div
          className="absolute inset-0 bg-repeat opacity-5 -z-10"
          style={overlaySrc && { backgroundImage: `url(${overlaySrc})` }}
        />
        <div className="prose-sm prose sm:prose-base">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

RecapSection.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  overlaySrc: PropTypes.string,
  quantityColor: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.string.isRequired,
      quantifier: PropTypes.string.isRequired,
    }),
  ),
  videoSrc: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default RecapSection;
